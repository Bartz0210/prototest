import { mat4, vec3, vec4 } from 'gl-matrix';
import Camera from './Camera';
import Scene, { SceneData } from './Scene';
import Events from './Events';

const fov = 0.75;

export interface Ray {
  origin: vec3;
  direction: vec3;
}

export interface CursorPositionCallback {
  (x: number, y: number, z: number): void;
}

export interface CursorRadiusCallback {
  (radius: number): void;
}

export interface RendererOptions {
  canvas: HTMLCanvasElement;
  onCursorPosition: CursorPositionCallback;
  onCursorRadius: CursorRadiusCallback;
}

export default class Renderer {
  gl: WebGLRenderingContext | null;
  height: number = 0;
  width: number = 0;

  readonly onCursorPosition: CursorPositionCallback;
  readonly onCursorRadius: CursorRadiusCallback;

  readonly camera: Camera = new Camera(this);
  readonly events: Events;
  readonly light: vec3 = vec3.create();
  readonly projection: mat4 = mat4.create();
  readonly projectionView: mat4 = mat4.create();
  readonly scene: Scene = new Scene(this);
  readonly transform: mat4 = mat4.create();
  readonly view: mat4 = mat4.create();

  constructor(options: RendererOptions) {
    mat4.identity(this.view);
    mat4.identity(this.transform);
    vec3.set(this.light, -25, -25, -50);

    const gl = this.createContext(options.canvas);
    this.events = new Events(this, options.canvas);
    this.scene.load(gl);
    this.gl = gl;
    this.onCursorPosition = options.onCursorPosition;
    this.onCursorRadius = options.onCursorRadius;
  }

  createContext(canvas: HTMLCanvasElement): WebGLRenderingContext {
    const gl = canvas.getContext('webgl', { antialias: true });
    if (!gl) {
      throw new Error('Could not create WebGL context');
    }

    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.FRONT);

    gl.clearColor(0.3, 0.3, 0.32, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    return gl;
  }

  dispose() {
    this.gl = null;
    this.events.dispose();
    this.scene.dispose();
  }

  getRay(x: number, y: number): Ray {
    const { camera, height, projection, view, width } = this;
    const projected: vec4 = vec4.create();
    vec4.set(projected, (2 * x) / width - 1, 1 - (2 * y) / height, -1, 1);

    const projectionI = mat4.create();
    mat4.invert(projectionI, projection);
    vec4.transformMat4(projected, projected, projectionI);
    projected[2] = -1;
    projected[3] = 0;

    const viewI = mat4.create();
    mat4.invert(viewI, view);
    vec4.transformMat4(projected, projected, viewI);
    vec4.normalize(projected, projected);

    const direction = vec3.create();
    vec3.set(direction, projected[0], projected[1], projected[2]);

    return {
      origin: camera.position,
      direction,
    };
  }

  render(data: SceneData) {
    const { camera, gl, scene } = this;
    if (!gl) return;

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    camera.render();
    scene.render(gl, data);
  }

  setSize(width: number, height: number) {
    const { gl } = this;
    if (!gl) return;

    this.width = width;
    this.height = height;

    mat4.perspective(this.projection, fov, width / height, 0.1, 1000);
    gl.viewport(0, 0, width, height);
  }
}
