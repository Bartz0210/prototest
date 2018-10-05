import SphereMesh from "./meshes/SphereMesh";
import CapsuleMesh from "./meshes/CapsuleMesh";
import FresnelMaterial from "./materials/FresnelMaterial";
import Renderer, { Ray } from ".";
import TextureMaterial from "./materials/TextureMaterial";
import { vec3, mat4 } from "gl-matrix";
import { Pointer } from "./Events";
import _ from "underscore";
import CursorMaterial from "./materials/CursorMaterial";

export type Color = [number, number, number];
export type Position = [number, number, number];

//const cursorColor: Color = [0, 0.5, 1];

export interface CursorState {
  position: Position;
  radius: number;
  scaleX: number;
  scaleY: number;
  scaleZ: number;

  isOn: boolean;

  frequency: number;
  color: Color;

  // //ring1
  // isAtLead0: boolean;
  // //ring2
  // isAtLead1: boolean;
  // isAtLead2: boolean;
  // //ring3
  // isAtLead3: boolean;
  // isAtLead4: boolean;
  // //ring4
  // isAtLead5: boolean;
}

export interface LeadState {
  leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}

export interface SpotState extends CursorState {
  color: Color;
}

export interface SceneData {
  cursor: CursorState;
  spots: Array<SpotState>;
  leads: LeadState;
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

    // isAtLead0: false,
    // isAtLead1: false,
    // isAtLead2: false,
    // isAtLead3: false,
    // isAtLead4: false,
    // isAtLead5: false
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

    this.isReady = true;
  }

  render(gl: WebGLRenderingContext, data: SceneData) {
    const { capsule, isReady, fresnel, sphere, texture, crsor } = this;
    if (!isReady) return;

    this.cursor = data.cursor;
    this.leads = data.leads;

    const { leads } = this.leads;

    //1,2,3,4
    if (_.isEqual(leads, [false, true, true, true, true, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [0, 0.625, this.cursor.position["2"]]),
        (this.cursor.scaleX = 2),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 1)
      );
    }

    //0,1,2
    if (_.isEqual(leads, [true, true, true, false, false, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [0, 3.125, this.cursor.position["2"]]),
        (this.cursor.scaleX = 2),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 2)
      );
    }

    //3,4,5
    if (_.isEqual(leads, [false, false, false, true, true, true])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [0, -4.625, this.cursor.position["2"]]),
        (this.cursor.scaleX = 2),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 2)
      );
    }

    //1,2,4
    if (_.isEqual(leads, [false, true, true, false, true, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          0.25 + this.cursor.radius * this.cursor.scaleX,
          1.25,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 1)
      );
    }

    //2,3,4
    if (_.isEqual(leads, [false, false, true, true, true, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          0.25 + this.cursor.radius * this.cursor.scaleX,
          0,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 1)
      );
    }

    //1,3,4
    if (_.isEqual(leads, [false, true, false, true, true, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          -0.25 - this.cursor.radius * this.cursor.scaleX,
          0,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 1)
      );
    }

    //1,2,3
    if (_.isEqual(leads, [false, true, true, true, false, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          -0.25 - this.cursor.radius * this.cursor.scaleX,
          1.25,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 1)
      );
    }

    //1,2
    if (_.isEqual(leads, [false, true, true, false, false, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [0, 1.875, this.cursor.position["2"]]),
        (this.cursor.scaleX = 2),
        (this.cursor.scaleY = 1),
        (this.cursor.scaleZ = 1)
      );
    }

    //3,4
    if (_.isEqual(leads, [false, false, false, true, true, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [0, -1.875, this.cursor.position["2"]]),
        (this.cursor.scaleX = 2),
        (this.cursor.scaleY = 1),
        (this.cursor.scaleZ = 1)
      );
    }

    //0,1
    if (_.isEqual(leads, [true, true, false, false, false, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          -0.25 - this.cursor.radius * this.cursor.scaleX,
          3.125,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 1)
      );
    }

    //0,2
    if (_.isEqual(leads, [true, false, true, false, false, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          0.25 + this.cursor.radius * this.cursor.scaleX,
          3.125,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 1)
      );
    }

    //3,5
    if (_.isEqual(leads, [false, false, false, true, false, true])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          -0.25 - this.cursor.radius * this.cursor.scaleX,
          -1.875,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 1)
      );
    }

    //4,5
    if (_.isEqual(leads, [false, false, false, false, true, true])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          0.25 + this.cursor.radius * this.cursor.scaleX,
          -1.875,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 1)
      );
    }

    //1,3
    if (_.isEqual(leads, [false, true, false, true, false, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          0.5 + this.cursor.radius * this.cursor.scaleX,
          0.625,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 1)
      );
    }

    //1,4
    if (_.isEqual(leads, [false, true, false, false, true, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          -0.5 - this.cursor.radius * this.cursor.scaleX,
          0.625,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 1)
      );
    }

    //0
    if (_.isEqual(leads, [true, false, false, false, false, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [0, 4.625, 0]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 1),
        (this.cursor.scaleZ = 1)
      );
    }
    //1
    if (_.isEqual(leads, [false, true, false, false, false, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          -0.5 - this.cursor.radius * this.cursor.scaleX,
          1.125,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 1),
        (this.cursor.scaleZ = 1)
      );
    }
    //2
    if (_.isEqual(leads, [false, false, true, false, false, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          0.5 + this.cursor.radius * this.cursor.scaleX,
          1.125,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 1),
        (this.cursor.scaleZ = 1)
      );
    }
    //3
    if (_.isEqual(leads, [false, false, false, true, false, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          -0.5 - this.cursor.radius * this.cursor.scaleX,
          -0.625,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 1),
        (this.cursor.scaleZ = 1)
      );
    }
    //4
    if (_.isEqual(leads, [false, false, false, false, true, false])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [
          0.5 + this.cursor.radius * this.cursor.scaleX,
          -0.625,
          this.cursor.position["2"]
        ]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 1),
        (this.cursor.scaleZ = 1)
      );
    }
    //5
    if (_.isEqual(leads, [false, false, false, false, false, true])) {
      fresnel.setTransform(
        gl,
        (this.cursor.position = [0, -3.125, 0]),
        (this.cursor.scaleX = 1),
        (this.cursor.scaleY = 1),
        (this.cursor.scaleZ = 1)
      );
    }

    texture.begin(gl);
    capsule.render(gl, texture);

    fresnel.begin(gl);

    //render cursor only, when toggled on
    if (data.cursor.isOn) {
      fresnel.setColor(gl, data.cursor.color);
      fresnel.setTransform(
        gl,
        data.cursor.position,
        data.cursor.radius * data.cursor.scaleX,
        data.cursor.radius * data.cursor.scaleY,
        data.cursor.radius * data.cursor.scaleZ
      );
      sphere.render(gl, fresnel);
    }

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
    this.renderer.onCursorRadius(this.cursor.radius * scale);
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

  // intersectsSphere(ray: Ray, cursor: CursorState): vec3 | null {
  //   const tmp = vec3.create();
  //   vec3.subtract(tmp, cursor.position, ray.origin);

  //   const length = vec3.dot(ray.direction, tmp);
  //   if (length < 0) {
  //     return null;
  //   }

  //   vec3.scaleAndAdd(tmp, ray.origin, ray.direction, length);
  //   const dSq = vec3.squaredDistance(cursor.position, tmp);
  //   const rSq = cursor.radius * cursor.radius;
  //   if (dSq > rSq) {
  //     return null;
  //   }

  //   const result = vec3.create();
  //   vec3.scale(result, ray.direction, length - Math.sqrt(rSq - dSq));
  //   vec3.add(result, result, ray.origin);
  //   return result;
  // }

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
