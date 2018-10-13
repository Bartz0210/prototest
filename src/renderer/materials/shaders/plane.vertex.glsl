attribute vec3 aVertex;
attribute vec3 aNormal;
attribute vec2 aTextureCoord;

uniform mat4 uTransformMatrix
uniform mat4 uViewMatrix;
uniform mat4 uViewMatrixInv;
uniform mat4 uProjectionMatrix;
uniform vec3 uLightPosition;

uniform float uBias;
uniform float uScale;
uniform float uPower;

varying float vLighting;
varying vec2 vTextureCoord;

void main(void) {
  gl_Position = uProjectionMatrix * uViewMatrix * uTransformMatrix * vec4(aVertex, 1.0);

  vec3 lightDirection = normalize(aVertex - (uViewMatrixInv * vec4(uLightPosition, 1.0)).xyz);

  vLighting = max(dot(aNormal, lightDirection), 0.3);
  vTextureCoord = aTextureCoord;
}
