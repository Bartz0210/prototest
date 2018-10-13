import Material from "./Material";

import fragmentSource from "./shaders/texture.fragment.glsl";
import vertexSource from "./shaders/texture.vertex.glsl";
import { mat4 } from 'gl-matrix';

export default class TextureMaterial extends Material {
  texture: WebGLTexture | null = null;
  uSampler: WebGLUniformLocation | null = null;

  begin(gl: WebGLRenderingContext) {
    super.begin(gl);

    gl.disable(gl.BLEND);
    gl.depthMask(true);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.uniform1i(this.uSampler, 0);
  }

  async load(gl: WebGLRenderingContext) {
    this.setShaders(gl, vertexSource, fragmentSource);
    const texture = gl.createTexture();
    if (!texture) {
      throw new Error("Could not create texture");
    }

    this.texture = texture;

    return new Promise(resolve => {
      const image = document.createElement("img");
      image.addEventListener("load", () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          image
        );

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

        gl.generateMipmap(gl.TEXTURE_2D);
        gl.bindTexture(gl.TEXTURE_2D, null);

        resolve();
      });

      image.src = "scan.jpg";
    });
  }

  protected initializeAttributes(
    gl: WebGLRenderingContext,
    program: WebGLProgram
  ) {
    super.initializeAttributes(gl, program);
    this.uSampler = gl.getUniformLocation(program, "uSampler");
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
      mat4.scale(transform, transform, [scaleX, scaleY, scaleZ]); 
      gl.uniformMatrix4fv(uTransformMatrix, false, transform);
    }
  }
}
