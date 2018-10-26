import Mesh from "./Mesh";

export default class PlaneMesh extends Mesh {
  async load(gl: WebGLRenderingContext) {
    const vertices: Array<number> = [
      -25.0,
      9.0,
      -17.0,
      -25.0,
      9.0,
      27.0,
      19.0,
      9.0,
      27.0,
      19.0,
      9.0,
      -17.0
    ];

    const indicies: Array<number> = [0, 1, 2, 0, 2, 3];

    const normals: Array<number> = [
      0.0,
      1.0,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0,
      1.0,
      0.0
    ];

    const textureCoords: Array<number> = [
      0.0,
      0.0,
      1.0,
      0.0,
      1.0,
      1.0,
      0.0,
      1.0
    ];

    this.setVertices(gl, vertices);
    this.setIndicies(gl, indicies);
    this.setNormals(gl, normals);
    this.setTextureCoords(gl, textureCoords);
  }
}
