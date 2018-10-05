precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;

uniform mediump float uTime; 
uniform vec3 uColor;
uniform float uFrequency;

varying float vLighting;
varying float vRefraction;

void main(void) {

  mediump float frq = uFrequency/60.0;
  mediump float osc = (sin(uTime/frq))/2.0;
  mediump float green = osc;

  if(green<0.5){
    green = 0.5;
  }

  gl_FragColor = vec4(osc, green, 1, vRefraction);
  //gl_FragColor = vec4(uColor * vLighting, vRefraction);
}
