import Material from "./Material";

import fragmentSource from "./shaders/fresnel.fragment.glsl";
import vertexSource from "./shaders/fresnel.vertex.glsl";
import { mat4 } from "gl-matrix";

export default class FresnelMaterial extends Material {
  bias: number = 0;
  scale: number = 2.0;
  power: number = 4.0;

  uBias: WebGLUniformLocation | null = null;
  uColor: WebGLUniformLocation | null = null;
  uScale: WebGLUniformLocation | null = null;
  uPower: WebGLUniformLocation | null = null;

  begin(gl: WebGLRenderingContext) {
    super.begin(gl);
    const { bias, scale, power, uBias, uScale, uPower } = this;

    gl.uniform1f(uBias, bias);
    gl.uniform1f(uScale, scale);
    gl.uniform1f(uPower, power);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.depthMask(false);
  }

  async load(gl: WebGLRenderingContext) {
    this.setShaders(gl, vertexSource, fragmentSource);
  }

  protected initializeAttributes(
    gl: WebGLRenderingContext,
    program: WebGLProgram
  ) {
    super.initializeAttributes(gl, program);

    this.uBias = gl.getUniformLocation(program, "uBias");
    this.uColor = gl.getUniformLocation(program, "uColor");
    this.uScale = gl.getUniformLocation(program, "uScale");
    this.uPower = gl.getUniformLocation(program, "uPower");
  }

  setColor(gl: WebGLRenderingContext, color: [number, number, number]) {
    gl.uniform3fv(this.uColor, color);
  }

  setTransform(
    gl: WebGLRenderingContext,
    position: [number, number, number],
    scaleX: number,
    scaleY: number,
    scaleZ: number
  ) {
    const { uTransformMatrix } = this;

    if (uTransformMatrix) {
      const transform = mat4.create();
      mat4.translate(transform, transform, position);
      mat4.scale(transform, transform, [scaleX, scaleY, scaleZ]); //<-- Transformationmatrix for spheres
      gl.uniformMatrix4fv(uTransformMatrix, false, transform);
    }
  }
}
