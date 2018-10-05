precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;

uniform float uTime; 
uniform vec3 uColor;
uniform float uFrequency;

varying float vLighting;
varying float vRefraction;

void main(void) {
  gl_FragColor = vec4(uColor * vLighting, vRefraction);
}
