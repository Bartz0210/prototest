import SphereMesh from "./meshes/SphereMesh";
import CapsuleMesh from "./meshes/CapsuleMesh";
import FresnelMaterial from "./materials/FresnelMaterial";
import Renderer, { Ray } from ".";
import TextureMaterial from "./materials/TextureMaterial";
import { vec3, mat4 } from "gl-matrix";
import { Pointer } from "./Events";

export type Color = [number, number, number];
export type Position = [number, number, number];

const cursorColor: Color = [0, 0.5, 1];

export interface CursorState {
  position: Position;
  radius: number;
  scaleX: number;
  scaleY: number;
  scaleZ: number;

  isOn: boolean;

  //ring1
  isAtLead0: boolean;
  //ring2
  isAtLead1: boolean;
  isAtLead2: boolean;
  //ring3
  isAtLead3: boolean;
  isAtLead4: boolean;
  //ring4
  isAtLead5: boolean;
}

export interface SpotState extends CursorState {
  color: Color;
}

export interface SceneData {
  cursor: CursorState;
  spots: Array<SpotState>;
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

    isAtLead0: false,
    isAtLead1: false,
    isAtLead2: false,
    isAtLead3: false,
    isAtLead4: false,
    isAtLead5: false
  };

  readonly capsule: CapsuleMesh = new CapsuleMesh(this);
  readonly fresnel: FresnelMaterial = new FresnelMaterial(this);
  readonly sphere: SphereMesh = new SphereMesh(this);
  readonly renderer: Renderer;
  readonly texture: TextureMaterial = new TextureMaterial(this);

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

    this.isReady = true;
  }

  render(gl: WebGLRenderingContext, data: SceneData) {
    const { capsule, isReady, fresnel, sphere, texture } = this;
    if (!isReady) return;

    this.cursor = data.cursor;
    const {
      isAtLead0,
      isAtLead1,
      isAtLead2,
      isAtLead3,
      isAtLead4,
      isAtLead5,
      position,
      radius,
      scaleX,
      scaleY
    } = this.cursor;

    //1,2,3,4
    if (
      !isAtLead0 &&
      isAtLead1 &&
      isAtLead2 &&
      isAtLead3 &&
      isAtLead4 &&
      !isAtLead5
    ) {
      //data.cursor.position = [0, 0.625, position["2"]];
      fresnel.setTransform(
        gl,
        (this.cursor.position = [0, 0.625, position["2"]]),
        (this.cursor.scaleX = 2),
        (this.cursor.scaleY = 2),
        (this.cursor.scaleZ = 1)
      );
    }

    //0,1,2
    if (
      isAtLead0 &&
      isAtLead1 &&
      isAtLead2 &&
      !isAtLead3 &&
      !isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [0, 3.125, position["2"]];
      // data.cursor.radius = 2;
    }
    //5,3,4
    if (
      !isAtLead0 &&
      !isAtLead1 &&
      !isAtLead2 &&
      isAtLead3 &&
      isAtLead4 &&
      isAtLead5
    ) {
      data.cursor.position = [0, -4.625, position["2"]];
      // data.cursor.radius = 2;
    }
    //1,2,4
    if (
      !isAtLead0 &&
      isAtLead1 &&
      isAtLead2 &&
      !isAtLead3 &&
      isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [0.25 + radius * scaleX, 1.25, position["2"]];
      // data.cursor.radius=1;
      //data.cursor.scaleY=2;
    }
    //2,3,4
    if (
      !isAtLead0 &&
      !isAtLead1 &&
      isAtLead2 &&
      isAtLead3 &&
      isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [0.25 + radius * scaleX, 0, position["2"]];
      //data.cursor.radius=1;
      //data.cursor.scaleY=2;
    }
    //1,3,4
    if (
      !isAtLead0 &&
      isAtLead1 &&
      !isAtLead2 &&
      isAtLead3 &&
      isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [-0.25 - radius * scaleX, 0, position["2"]];
      //data.cursor.radius=1;
      // data.cursor.scaleY=2;
    }
    //1,2,3
    if (
      !isAtLead0 &&
      isAtLead1 &&
      isAtLead2 &&
      isAtLead3 &&
      !isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [-0.25 - radius * scaleX, 1.25, position["2"]];
      //data.cursor.radius=1;
      //data.cursor.scaleY=2;
    }

    //1,2
    if (
      !isAtLead0 &&
      isAtLead1 &&
      isAtLead2 &&
      !isAtLead3 &&
      !isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [0, 1.875, position["2"]];
      // data.cursor.radius=1;
      //7data.cursor.scaleX=2;
    }
    //3,4
    if (
      !isAtLead0 &&
      !isAtLead1 &&
      !isAtLead2 &&
      isAtLead3 &&
      isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [0, -1.875, position["2"]];
      //data.cursor.radius=1;
      //data.cursor.scaleX=2;
    }
    //0,1
    if (
      isAtLead0 &&
      isAtLead1 &&
      !isAtLead2 &&
      !isAtLead3 &&
      !isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [-0.25 - radius * scaleX, 3.125, position["2"]];
      //data.cursor.radius=1;
      //data.cursor.scaleY=2;
    }
    //0,2
    if (
      isAtLead0 &&
      !isAtLead1 &&
      isAtLead2 &&
      !isAtLead3 &&
      !isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [0.25 + radius * scaleX, 3.125, position["2"]];
      //data.cursor.radius=1;
      //data.cursor.scaleY=2;
    }
    //5,3
    if (
      !isAtLead0 &&
      !isAtLead1 &&
      !isAtLead2 &&
      isAtLead3 &&
      !isAtLead4 &&
      isAtLead5
    ) {
      data.cursor.position = [-0.25 - radius * scaleX, -1.875, position["2"]];
      //  data.cursor.radius=1;
      // data.cursor.scaleY=2;
    }
    //5,4
    if (
      !isAtLead0 &&
      !isAtLead1 &&
      !isAtLead2 &&
      !isAtLead3 &&
      isAtLead4 &&
      isAtLead5
    ) {
      data.cursor.position = [0.25 + radius * scaleX, -1.875, position["2"]];
      //data.cursor.radius=1;
      // data.cursor.scaleY=2;
    }
    //1,3
    if (
      !isAtLead0 &&
      isAtLead1 &&
      !isAtLead2 &&
      isAtLead3 &&
      !isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [0.5 + radius * scaleX, 0.625, position["2"]];
      //data.cursor.radius=1;
      // data.cursor.scaleY=2;
    }
    //1,4
    if (
      !isAtLead0 &&
      isAtLead1 &&
      !isAtLead2 &&
      !isAtLead3 &&
      isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [-0.5 - radius * scaleX, 0.625, position["2"]];
      // data.cursor.radius=1;
      //  data.cursor.scaleY=2;
    }

    //0
    if (
      isAtLead0 &&
      !isAtLead1 &&
      !isAtLead2 &&
      !isAtLead3 &&
      !isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [0, 4.625, 0];
    }
    //1
    if (
      !isAtLead0 &&
      isAtLead1 &&
      !isAtLead2 &&
      !isAtLead3 &&
      !isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [-0.5 - radius * scaleX, 1.125, position["2"]];
    }
    //2
    if (
      !isAtLead0 &&
      !isAtLead1 &&
      isAtLead2 &&
      !isAtLead3 &&
      !isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [0.5 + radius * scaleX, 1.125, position["2"]];
    }
    //3
    if (
      !isAtLead0 &&
      !isAtLead1 &&
      !isAtLead2 &&
      isAtLead3 &&
      !isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [-0.5 - radius * scaleX, -0.625, position["2"]];
    }
    //4
    if (
      !isAtLead0 &&
      !isAtLead1 &&
      !isAtLead2 &&
      !isAtLead3 &&
      isAtLead4 &&
      !isAtLead5
    ) {
      data.cursor.position = [0.5 + radius * scaleX, -0.625, position["2"]];
    }
    //5
    if (
      !isAtLead0 &&
      !isAtLead1 &&
      !isAtLead2 &&
      !isAtLead3 &&
      !isAtLead4 &&
      isAtLead5
    ) {
      data.cursor.position = [0, -3.125, 0];
    }

    texture.begin(gl);
    capsule.render(gl, texture);

    fresnel.begin(gl);
    //render cursor only, when toggled on
    if (data.cursor.isOn) {
      fresnel.setColor(gl, cursorColor);
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
      if (delta[1] < -this.cursor.radius - 5)
        delta[1] = -this.cursor.radius - 5;
      if (delta[1] > this.cursor.radius + 5) delta[1] = this.cursor.radius + 5;
      //z-axis
      if (delta[2] < -this.cursor.radius - 0.5)
        delta[2] = -this.cursor.radius - 0.5;
      if (delta[2] > this.cursor.radius + 0.5)
        delta[2] = this.cursor.radius + 0.5;

      //Orbit

      let angle = Math.atan2(delta[2], delta[0]);
      if (delta[0] < -this.cursor.radius || delta[0] > this.cursor.radius) {
        delta[0] = this.cursor.radius * Math.cos(angle);
      }
      if (delta[2] < -this.cursor.radius || delta[2] > this.cursor.radius) {
        delta[2] = this.cursor.radius * Math.sin(angle);
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

  intersectsSphere(ray: Ray, cursor: CursorState): vec3 | null {
    const tmp = vec3.create();
    vec3.subtract(tmp, cursor.position, ray.origin);

    //get Tranformationmatrix Scale from sphere
    const scale = mat4.create();
    mat4.fromScaling(scale, [cursor.scaleX, cursor.scaleY, cursor.scaleZ]);
    //get Transformationmatrix Translate sphere
    const translate = mat4.create();
    mat4.fromTranslation(translate, cursor.position);
    //multiply scale x translation
    const multi = mat4.create();
    mat4.multiply(multi, scale, translate);
    //calculate inverse
    const inv = mat4.create();
    mat4.invert(inv, multi);
    //apply inverse to ray.origin and ray.direction
    const transformedOrigin = vec3.create();
    const transformedDirection = vec3.create();

    vec3.transformMat4(transformedOrigin, ray.origin, inv);
    vec3.transformMat4(transformedDirection, ray.direction, inv);
    //von hier aus geht es dann mit dem normalen Hittest weiter

    const length = vec3.dot(transformedDirection, tmp);
    if (length < 0) {
      return null;
    }

    vec3.scaleAndAdd(tmp, transformedOrigin, transformedDirection, length);
    const dSq = vec3.squaredDistance(cursor.position, tmp);
    const rSq = cursor.radius * cursor.radius;
    if (dSq > rSq) {
      return null;
    }

    const result = vec3.create();
    vec3.scale(result, transformedDirection, length - Math.sqrt(rSq - dSq));
    vec3.add(result, result, ray.origin);
    return result;
  }
}
