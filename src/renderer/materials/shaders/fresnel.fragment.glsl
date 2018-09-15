precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;

uniform vec3 uColor;

varying float vLighting;
varying float vRefraction;

void main(void) {
  gl_FragColor = vec4(uColor * vLighting, vRefraction);
}
