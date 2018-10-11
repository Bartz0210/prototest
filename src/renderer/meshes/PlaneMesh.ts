import Mesh from "./Mesh";

export default class SphereMesh extends Mesh {
  async load(gl: WebGLRenderingContext) {
    const vertices: Array<number> = [
      1.0,
      1.0,
      0.0,
      -1.0,
      1.0,
      0.0,
      1.0,
      -1.0,
      0.0,
      -1.0,
      -1.0,
      0.0
    ];

    const textureCoords: Array<number> = [
      0.0,
      0.0,
      1.0,
      0.0,
      1.0,
      -1.0,
      0.0,
      -1.0
    ];

    this.setVertices(gl, vertices);

    this.setTextureCoords(gl, textureCoords);
  }
}
