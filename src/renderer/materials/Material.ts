import Scene from '../Scene';
import { mat4 } from 'gl-matrix';

export default class Material {
  fragmentShader: WebGLShader | null = null;
  program: WebGLProgram | null = null;
  vertexShader: WebGLShader | null = null;

  aNormal: number = -1;
  aTextureCoord: number = -1;
  aVertex: number = -1;

  uCameraPosition: WebGLUniformLocation | null = null;
  uLightPosition: WebGLUniformLocation | null = null;
  uTransformMatrix: WebGLUniformLocation | null = null;
  uProjectionMatrix: WebGLUniformLocation | null = null;
  uViewMatrix: WebGLUniformLocation | null = null;
  uViewMatrixInv: WebGLUniformLocation | null = null;

  readonly scene: Scene;

  constructor(scene: Scene) {
    this.scene = scene;
  }

  begin(gl: WebGLRenderingContext) {
    const { renderer } = this.scene;
    const {
      program,
      uCameraPosition,
      uLightPosition,
      uProjectionMatrix,
      uTransformMatrix,
      uViewMatrix,
      uViewMatrixInv,
    } = this;

    gl.useProgram(program);

    if (uProjectionMatrix) {
      gl.uniformMatrix4fv(uProjectionMatrix, false, renderer.projection);
    }

    if (uTransformMatrix) {
      gl.uniformMatrix4fv(uTransformMatrix, false, renderer.transform);
    }

    if (uViewMatrix) {
      gl.uniformMatrix4fv(uViewMatrix, false, renderer.view);
    }

    if (uViewMatrixInv) {
      const viewInv = mat4.create();
      mat4.invert(viewInv, renderer.view);
      gl.uniformMatrix4fv(uViewMatrixInv, false, viewInv);
    }

    if (uCameraPosition) {
      gl.uniform3fv(uCameraPosition, renderer.camera.position);
    }

    if (uLightPosition) {
      gl.uniform3fv(uLightPosition, renderer.light);
    }
  }

  protected initializeAttributes(
    gl: WebGLRenderingContext,
    program: WebGLProgram
  ) {
    this.aVertex = gl.getAttribLocation(program, 'aVertex');
    this.aNormal = gl.getAttribLocation(program, 'aNormal');
    this.aTextureCoord = gl.getAttribLocation(program, 'aTextureCoord');

    this.uProjectionMatrix = gl.getUniformLocation(
      program,
      'uProjectionMatrix'
    );

    this.uTransformMatrix = gl.getUniformLocation(program, 'uTransformMatrix');
    this.uViewMatrix = gl.getUniformLocation(program, 'uViewMatrix');
    this.uViewMatrixInv = gl.getUniformLocation(program, 'uViewMatrixInv');
    this.uCameraPosition = gl.getUniformLocation(program, 'uCameraPosition');
    this.uLightPosition = gl.getUniformLocation(program, 'uLightPosition');
  }

  private loadShader(gl: WebGLRenderingContext, type: number, source: string) {
    const shader = gl.createShader(type);
    if (!shader) {
      throw new Error('Could not create shader');
    }

    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(
        'An error occurred compiling a shader: ' + gl.getShaderInfoLog(shader)
      );
    }

    return shader;
  }

  protected setShaders(
    gl: WebGLRenderingContext,
    vertex: string,
    fragment: string
  ) {
    this.fragmentShader = this.loadShader(gl, gl.FRAGMENT_SHADER, fragment);
    this.vertexShader = this.loadShader(gl, gl.VERTEX_SHADER, vertex);

    const program = gl.createProgram();
    if (!program) {
      throw new Error('Could not create shader program');
    }

    gl.attachShader(program, this.vertexShader);
    gl.attachShader(program, this.fragmentShader);
    gl.linkProgram(program);

    this.initializeAttributes(gl, program);
    this.program = program;
  }
}
