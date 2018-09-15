import Material from '../materials/Material';
import Scene from '../Scene';

export default class Mesh {
  indexBuffer: WebGLBuffer | null = null;
  normalBuffer: WebGLBuffer | null = null;
  numElements: number = 0;
  textureCoordBuffer: WebGLBuffer | null = null;
  vertexBuffer: WebGLBuffer | null = null;

  readonly scene: Scene;

  constructor(scene: Scene) {
    this.scene = scene;
  }

  render(gl: WebGLRenderingContext, material: Material) {
    const {
      normalBuffer,
      textureCoordBuffer,
      vertexBuffer,
      indexBuffer,
      numElements,
    } = this;

    const { aNormal, aTextureCoord, aVertex } = material;

    if (aNormal >= 0 && normalBuffer !== null) {
      gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
      gl.enableVertexAttribArray(aNormal);
      gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 0, 0);
    }

    if (aTextureCoord >= 0 && textureCoordBuffer !== null) {
      gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
      gl.enableVertexAttribArray(aTextureCoord);
      gl.vertexAttribPointer(aTextureCoord, 2, gl.FLOAT, false, 0, 0);
    }

    if (aVertex >= 0 && vertexBuffer !== null) {
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.enableVertexAttribArray(aVertex);
      gl.vertexAttribPointer(aVertex, 3, gl.FLOAT, false, 0, 0);
    }

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.drawElements(gl.TRIANGLES, numElements, gl.UNSIGNED_SHORT, 0);
  }

  protected setIndicies(gl: WebGLRenderingContext, data: Array<number>) {
    const indexBuffer = gl.createBuffer();
    if (!indexBuffer) {
      throw new Error('Could not create vertex index buffer');
    }

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(data),
      gl.STREAM_DRAW
    );

    this.numElements = data.length;
    this.indexBuffer = indexBuffer;
  }

  protected setNormals(gl: WebGLRenderingContext, data: Array<number>) {
    const normalBuffer = gl.createBuffer();
    if (!normalBuffer) {
      throw new Error('Could not create vertex buffer');
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

    this.normalBuffer = normalBuffer;
  }

  protected setTextureCoords(gl: WebGLRenderingContext, data: Array<number>) {
    const textureCoordBuffer = gl.createBuffer();
    if (!textureCoordBuffer) {
      throw new Error('Could not create vertex coord buffer');
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

    this.textureCoordBuffer = textureCoordBuffer;
  }

  protected setVertices(gl: WebGLRenderingContext, data: Array<number>) {
    const vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
      throw new Error('Could not create vertex position buffer');
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

    this.vertexBuffer = vertexBuffer;
  }
}
