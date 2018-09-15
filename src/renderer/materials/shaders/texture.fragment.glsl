precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;

uniform sampler2D uSampler;

varying float vLighting;
varying vec2 vTextureCoord;

void main(void) {
  vec4 color = texture2D(uSampler, vec2(vTextureCoord)) * vLighting;
  color.a = 1.0;
  gl_FragColor = color;
}
