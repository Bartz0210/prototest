import Mesh from './Mesh';

export default class PlaneMesh extends Mesh {


  async load(gl: WebGLRenderingContext) {

    const vertices: Array<number> = [
      // vordere Fläche
      -1.0, -1.0, 1.0,
      1.0, -1.0, 1.0,
      1.0, 1.0, 1.0,
      -1.0, 1.0, 1.0,

      // hintere Fläche
      -1.0, -1.0, -1.0,
      -1.0, 1.0, -1.0,
      1.0, 1.0, -1.0,
      1.0, -1.0, -1.0,

      // obere Fläche
      -1.0, 1.0, -1.0,
      -1.0, 1.0, 1.0,
      1.0, 1.0, 1.0,
      1.0, 1.0, -1.0,

      // untere Fläche
      -1.0, -1.0, -1.0,
      1.0, -1.0, -1.0,
      1.0, -1.0, 1.0,
      -1.0, -1.0, 1.0,

      // rechte Fläche
      1.0, -1.0, -1.0,
      1.0, 1.0, -1.0,
      1.0, 1.0, 1.0,
      1.0, -1.0, 1.0,

      // linke Fläche
      -1.0, -1.0, -1.0,
      -1.0, -1.0, 1.0,
      -1.0, 1.0, 1.0,
      -1.0, 1.0, -1.0
    ];

    const indicies: Array<number> = [
      0, 1, 2, 0, 2, 3,    // vorne
      4, 5, 6, 4, 6, 7,    // hinten
      8, 9, 10, 8, 10, 11,   // oben
      12, 13, 14, 12, 14, 15,   // unten
      16, 17, 18, 16, 18, 19,   // rechts
      20, 21, 22, 20, 22, 23    // links
    ];


    const normals: Array<number> = [
      // vorne
      0.0, 0.0, 1.0,
      0.0, 0.0, 1.0,
      0.0, 0.0, 1.0,
      0.0, 0.0, 1.0,

      // hinten
      0.0, 0.0, -1.0,
      0.0, 0.0, -1.0,
      0.0, 0.0, -1.0,
      0.0, 0.0, -1.0,

      // oben
      0.0, 1.0, 0.0,
      0.0, 1.0, 0.0,
      0.0, 1.0, 0.0,
      0.0, 1.0, 0.0,

      // unten
      0.0, -1.0, 0.0,
      0.0, -1.0, 0.0,
      0.0, -1.0, 0.0,
      0.0, -1.0, 0.0,

      // rechts
      1.0, 0.0, 0.0,
      1.0, 0.0, 0.0,
      1.0, 0.0, 0.0,
      1.0, 0.0, 0.0,

      // links
      -1.0, 0.0, 0.0,
      -1.0, 0.0, 0.0,
      -1.0, 0.0, 0.0,
      -1.0, 0.0, 0.0
    ];


    const textureCoords: Array<number> = [
      // vorne
      0.0, 0.0,
      1.0, 0.0,
      1.0, 1.0,
      0.0, 1.0,
      // hinten
      0.0, 0.0,
      1.0, 0.0,
      1.0, 1.0,
      0.0, 1.0,
      // oben
      0.0, 0.0,
      1.0, 0.0,
      1.0, 1.0,
      0.0, 1.0,
      // unten
      0.0, 0.0,
      1.0, 0.0,
      1.0, 1.0,
      0.0, 1.0,
      // rechts
      0.0, 0.0,
      1.0, 0.0,
      1.0, 1.0,
      0.0, 1.0,
      // links
      0.0, 0.0,
      1.0, 0.0,
      1.0, 1.0,
      0.0, 1.0
    ];

    this.setVertices(gl, vertices);
    this.setIndicies(gl, indicies);
    this.setNormals(gl, normals);
    this.setTextureCoords(gl, textureCoords);
  }
}
