import Mesh from "./Mesh";

export default class CapsuleMesh extends Mesh {
  readonly radius: number = 0.5;
  readonly height: number = 10;
  readonly numSubdivisionsHeight: number = 50;
  readonly numSegments: number = 50;

  async load(gl: WebGLRenderingContext) {
    const { radius, height, numSubdivisionsHeight, numSegments } = this;
    const vertices: Array<number> = [];
    const normals: Array<number> = [];
    const textureCoords: Array<number> = [];
    const indicies: Array<number> = [];

    function calculateRing(r: number, y: number, dy: number) {
      const step = 1.0 / (numSegments - 1);

      for (let segment = 0; segment < numSegments; segment++) {
        const x = -Math.cos(Math.PI * 2 * segment * step) * r;
        const z = Math.sin(Math.PI * 2 * segment * step) * r;

        vertices.push(radius * x, radius * y + height * dy, radius * z);
        normals.push(x, y, z);

        const u = segment * step;
        const v = 0.5 - (radius * y + height * dy) / (2.0 * radius + height);
        textureCoords.push(u, 1.0 - v);
      }
    }

    const numRingsBody = numSubdivisionsHeight + 1;
    const numRings = numSubdivisionsHeight + numRingsBody;
    const bodyStep = 1.0 / (numRingsBody - 1);
    const ringStep = 1.0 / (numSubdivisionsHeight - 1);
    for (let index = 0; index < numSubdivisionsHeight / 2; index++) {
      calculateRing(
        Math.sin(Math.PI * index * ringStep),
        Math.sin(Math.PI * (index * ringStep - 0.5)),
        -0.5
      );
    }

    for (let index = 0; index < numRingsBody; index++) {
      calculateRing(1.0, 0.0, index * bodyStep - 0.5);
    }

    for (
      let index = numSubdivisionsHeight / 2;
      index < numSubdivisionsHeight;
      index++
    ) {
      calculateRing(
        Math.sin(Math.PI * index * ringStep),
        Math.sin(Math.PI * (index * ringStep - 0.5)),
        +0.5
      );
    }

    for (let r = 0; r < numRings - 1; r++) {
      for (let s = 0; s < numSegments - 1; s++) {
        indicies.push(
          r * numSegments + (s + 1),
          r * numSegments + (s + 0),
          (r + 1) * numSegments + (s + 1)
        );
        indicies.push(
          (r + 1) * numSegments + (s + 0),
          (r + 1) * numSegments + (s + 1),
          r * numSegments + s
        );
      }
    }

    this.setIndicies(gl, indicies);
    this.setNormals(gl, normals);
    this.setTextureCoords(gl, textureCoords);
    this.setVertices(gl, vertices);
  }
}
