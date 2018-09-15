import Mesh from './Mesh';

export default class SphereMesh extends Mesh {
  readonly latSteps: number = 50;
  readonly lngSteps: number = 50;
  readonly radius: number = 1;

  async load(gl: WebGLRenderingContext) {
    const { latSteps, lngSteps, radius } = this;
    const vertices: Array<number> = [];
    const normals: Array<number> = [];
    const textureCoords: Array<number> = [];

    for (let lat = 0; lat <= latSteps; lat++) {
      const theta = (lat * Math.PI) / latSteps;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let lng = 0; lng <= lngSteps; lng++) {
        const phi = (lng * 2 * Math.PI) / lngSteps;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);
        const x = cosPhi * sinTheta;
        const y = cosTheta;
        const z = sinPhi * sinTheta;
        const u = 1 - lng / lngSteps;
        const v = lat / latSteps;

        normals.push(x, y, z);
        textureCoords.push(u, v);
        vertices.push(radius * x, radius * y, radius * z);
      }
    }

    const indicies: Array<number> = [];
    for (let lat = 0; lat < latSteps; lat++) {
      for (let lng = 0; lng < lngSteps; lng++) {
        const first = lat * (lngSteps + 1) + lng;
        const second = first + lngSteps + 1;

        indicies.push(first, second, first + 1);
        indicies.push(second, second + 1, first + 1);
      }
    }

    this.setVertices(gl, vertices);
    this.setIndicies(gl, indicies);
    this.setNormals(gl, normals);
    this.setTextureCoords(gl, textureCoords);
  }
}
