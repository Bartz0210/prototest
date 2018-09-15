attribute vec3 aVertex;
attribute vec3 aNormal;

uniform mat4 uTransformMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uViewMatrixInv;
uniform mat4 uProjectionMatrix;
uniform vec3 uCameraPosition;
uniform vec3 uLightPosition;

uniform float uBias;
uniform float uScale;
uniform float uPower;

varying float vLighting;
varying float vRefraction;

void main(void) {
  gl_Position = uProjectionMatrix * uViewMatrix * uTransformMatrix * vec4(aVertex, 1.0);

  vec3 posWorld = (uTransformMatrix * vec4(aVertex, 1.0)).xyz;
  vec3 lightDirection = normalize(posWorld - (uViewMatrixInv * vec4(uLightPosition, 1.0)).xyz);

	vec3 I = normalize(posWorld - uCameraPosition);
	vRefraction = uBias + uScale * pow(1.0 + dot(I, aNormal), uPower);
  vLighting = max(dot(aNormal, lightDirection), 0.3);
}
