import SphereMesh from "./meshes/SphereMesh";
import CapsuleMesh from "./meshes/CapsuleMesh";
import PlaneMesh from "./meshes/PlaneMesh";
import FresnelMaterial from "./materials/FresnelMaterial";
import Renderer, { Ray } from ".";
import TextureMaterial from "./materials/TextureMaterial";
import { vec3, mat4 } from "gl-matrix";
import { Pointer } from "./Events";
import _ from "underscore";
import CursorMaterial from "./materials/CursorMaterial";
import PlaneMaterial from "./materials/PlaneMaterial";

export type Color = [number, number, number];
export type Position = [number, number, number];

//const cursorColor: Color = [0, 0.5, 1];

const start = new Date().getTime();

export interface CursorState {
  position: Position;
  radius: number;
  scaleX: number;
  scaleY: number;
  scaleZ: number;

  isOn: boolean;

  frequency: number;
  color: Color;
}

export interface LeadState {
  leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}

export interface SpotState extends CursorState {
  color: Color;
}

// export interface PlaneState {
//   position: Position;
// }

export interface SceneData {
  cursor: CursorState;
  spots: Array<SpotState>;
  leads: LeadState;
  // plane: PlaneState;
}

export interface Plane {
  position: vec3;
  normal: vec3;
}

export default class Scene {
  isReady: boolean = false;
  cursor: CursorState = {
    position: [0, 0, 0],
    radius: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,

    isOn: true,
    frequency: 60,
    color: [0, 0.5, 1]
  };

  leads: LeadState = {
    leads: [false, false, false, false, false, false]
  };

  readonly capsule: CapsuleMesh = new CapsuleMesh(this);
  readonly fresnel: FresnelMaterial = new FresnelMaterial(this);
  readonly sphere: SphereMesh = new SphereMesh(this);
  readonly renderer: Renderer;
  readonly texture: TextureMaterial = new TextureMaterial(this);
  readonly crsor: CursorMaterial = new CursorMaterial(this);
  readonly plan: PlaneMesh = new PlaneMesh(this);
  readonly planMat: PlaneMaterial = new PlaneMaterial(this);

  constructor(renderer: Renderer) {
    this.renderer = renderer;
  }

  dispose() {
    // TODO: Tidy up resources
  }

  async load(gl: WebGLRenderingContext) {
    await this.capsule.load(gl);
    await this.fresnel.load(gl);
    await this.sphere.load(gl);
    await this.texture.load(gl);
    await this.crsor.load(gl);
    await this.plan.load(gl);
    await this.planMat.load(gl);

    this.isReady = true;
  }

  render(gl: WebGLRenderingContext, data: SceneData) {
    const {
      capsule,
      isReady,
      fresnel,
      sphere,
      texture,
      crsor,
      plan,
      planMat
    } = this;
    if (!isReady) return;

    this.cursor = data.cursor;
    this.leads = data.leads;

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    texture.begin(gl);
    capsule.render(gl, texture);

    planMat.begin(gl);
    planMat.setTransform(gl, [0.0, 15.0, 0.0], 15.0, 1.0, 15.0);
    plan.render(gl, planMat);

    //render cursor only, when toggled on
    if (data.cursor.isOn) {
      crsor.begin(gl);
      crsor.setColor(
        gl,
        data.cursor.color,
        new Date().getTime() - start,
        data.cursor.frequency
      );
      crsor.setTransform(
        gl,
        data.cursor.position,
        data.cursor.radius * data.cursor.scaleX,
        data.cursor.radius * data.cursor.scaleY,
        data.cursor.radius * data.cursor.scaleZ
      );
      sphere.render(gl, crsor);
    }

    //toggle 0 by cursor
    if (
      data.cursor.position[1] + data.cursor.radius * data.cursor.scaleY >=
      4.625
    ) {
      data.leads.leads[0] = true;
    }
    if (
      data.cursor.position[1] + data.cursor.radius * data.cursor.scaleY <
      4.625
    ) {
      data.leads.leads[0] = false;
    }

    //toggle 1 2 by cursor
    if (
      data.cursor.position[1] + data.cursor.radius * data.cursor.scaleY >=
      1.125
    ) {
      data.leads.leads[1] = true;
      data.leads.leads[2] = true;
    }
    if (
      data.cursor.position[1] - data.cursor.radius * data.cursor.scaleY <=
      1.125
    ) {
      data.leads.leads[1] = true;
      data.leads.leads[2] = true;
    }
    if (
      data.cursor.position[1] + data.cursor.radius * data.cursor.scaleY <
      1.125
    ) {
      data.leads.leads[1] = false;
      data.leads.leads[2] = false;
    }
    if (
      data.cursor.position[1] - data.cursor.radius * data.cursor.scaleY >
      1.125
    ) {
      data.leads.leads[1] = false;
      data.leads.leads[2] = false;
    }

    //toggle 3 4 by cursor
    if (
      data.cursor.position[1] + data.cursor.radius * data.cursor.scaleY >=
      -1.875
    ) {
      data.leads.leads[3] = true;
      data.leads.leads[4] = true;
    }
    if (
      data.cursor.position[1] - data.cursor.radius * data.cursor.scaleY <=
      -1.875
    ) {
      data.leads.leads[3] = true;
      data.leads.leads[4] = true;
    }
    if (
      data.cursor.position[1] + data.cursor.radius * data.cursor.scaleY <
      -1.875
    ) {
      data.leads.leads[3] = false;
      data.leads.leads[4] = false;
    }
    if (
      data.cursor.position[1] - data.cursor.radius * data.cursor.scaleY >
      -1.875
    ) {
      data.leads.leads[3] = false;
      data.leads.leads[4] = false;
    }

    //toggle 5 by cursor
    if (
      data.cursor.position[1] - data.cursor.radius * data.cursor.scaleY <=
      -3.125
    ) {
      data.leads.leads[5] = true;
    }
    if (
      data.cursor.position[1] - data.cursor.radius * data.cursor.scaleY >
      -3.125
    ) {
      data.leads.leads[5] = false;
    }

    fresnel.begin(gl);
    for (const spot of data.spots) {
      fresnel.setColor(gl, spot.color);
      fresnel.setTransform(
        gl,
        spot.position,
        spot.radius,
        spot.radius,
        spot.radius
      );
      sphere.render(gl, fresnel);
    }
  }

  getWorkPlane(): Plane {
    const normal = vec3.create();
    vec3.normalize(normal, this.renderer.camera.position);

    const position = vec3.create();
    vec3.set(position, ...this.cursor.position);

    return {
      position,
      normal
    };
  }

  handleDrag(pointer: Pointer) {
    const { renderer } = this;
    const plane = this.getWorkPlane();

    const last = this.intersectsPlane(
      renderer.getRay(pointer.lastX, pointer.lastY),
      plane
    );

    const current = this.intersectsPlane(
      renderer.getRay(pointer.currentX, pointer.currentY),
      plane
    );

    if (last && current) {
      const delta = vec3.create();
      vec3.subtract(delta, current, last);
      vec3.add(delta, this.cursor.position, delta);

      //orbiting around Capusle

      //x-axis
      if (delta[0] < -this.cursor.radius * this.cursor.scaleX - 0.5)
        delta[0] = -this.cursor.radius * this.cursor.scaleX - 0.5;
      if (delta[0] > this.cursor.radius * this.cursor.scaleX + 0.5)
        delta[0] = this.cursor.radius * this.cursor.scaleX + 0.5;
      //y-axis
      if (delta[1] < -this.cursor.radius * this.cursor.scaleY - 3.75)
        delta[1] = -this.cursor.radius * this.cursor.scaleY - 3.75;
      if (delta[1] > this.cursor.radius * this.cursor.scaleY + 5)
        delta[1] = this.cursor.radius * this.cursor.scaleY + 5;
      //z-axis
      if (delta[2] < -this.cursor.radius * this.cursor.scaleZ - 0.5)
        delta[2] = -this.cursor.radius * this.cursor.scaleZ - 0.5;
      if (delta[2] > this.cursor.radius * this.cursor.scaleZ + 0.5)
        delta[2] = this.cursor.radius * this.cursor.scaleZ + 0.5;

      //Orbit

      let angle = Math.atan2(delta[2], delta[0]);
      if (
        delta[0] < -this.cursor.radius * this.cursor.scaleX ||
        delta[0] > this.cursor.radius * this.cursor.scaleX
      ) {
        delta[0] = this.cursor.radius * this.cursor.scaleX * Math.cos(angle);
      }
      if (
        delta[2] < -this.cursor.radius * this.cursor.scaleZ ||
        delta[2] > this.cursor.radius * this.cursor.scaleZ
      ) {
        delta[2] = this.cursor.radius * this.cursor.scaleZ * Math.sin(angle);
      }

      this.renderer.onCursorPosition(delta[0], delta[1], delta[2]);
    }
  }

  handleScale(scale: number) {
    const radi = this.cursor.radius * scale;
    // this.cursor.radius = radi;

    this.renderer.onCursorRadius(radi);
  }

  hitTest(x: number, y: number) {
    const ray = this.renderer.getRay(x, y);
    return this.intersectsSphere(ray, this.cursor);
  }

  intersectsPlane(ray: Ray, plane: Plane): vec3 | null {
    const denom = vec3.dot(ray.direction, plane.normal);
    const dist = -vec3.dot(plane.normal, plane.position);

    if (denom !== 0) {
      const t = -(vec3.dot(ray.origin, plane.normal) + dist) / denom;
      if (t < 0) {
        return null;
      }

      const tmp = vec3.create();
      vec3.scale(tmp, ray.direction, t);

      const result = vec3.create();
      vec3.add(result, ray.origin, tmp);
      return result;
    }

    if (vec3.dot(plane.normal, ray.origin) + dist === 0) {
      return ray.origin;
    }

    return null;
  }

  intersectsSphere(ray: Ray, cursor: CursorState): vec3 | null {
    const transform = mat4.create();
    mat4.scale(transform, transform, [
      cursor.scaleX,
      cursor.scaleY,
      cursor.scaleZ
    ]);

    const transformI = mat4.create();
    mat4.invert(transformI, transform);

    //apply inverse to ray.origin and ray.direction
    const rayOrigin = vec3.create();
    const rayDirection = vec3.create();

    vec3.transformMat4(rayOrigin, ray.origin, transformI);
    vec3.transformMat4(rayDirection, ray.direction, transformI);
    vec3.normalize(rayDirection, rayDirection);
    //von hier aus geht es dann mit dem normalen Hittest weiter

    const tmp = vec3.create();
    vec3.subtract(tmp, cursor.position, rayOrigin);

    const length = vec3.dot(rayDirection, tmp);
    if (length < 0) {
      return null;
    }

    vec3.scaleAndAdd(tmp, rayOrigin, rayDirection, length);
    const dSq = vec3.squaredDistance(cursor.position, tmp);
    const rSq = cursor.radius * cursor.radius;
    if (dSq > rSq) {
      return null;
    }

    const result = vec3.create();
    vec3.scale(result, rayDirection, length - Math.sqrt(rSq - dSq));
    vec3.add(result, result, ray.origin);
    return result;
  }
}
