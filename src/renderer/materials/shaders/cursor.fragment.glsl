precision highp float;
precision highp int;
precision lowp sampler2D;
precision lowp samplerCube;
// precision highp vec3;

uniform mediump float uTime; 
uniform vec3 uColor;
uniform float uFrequency;

varying float vLighting;
varying float vRefraction;


void main(void) {
  mediump vec3 color;
  mediump float frq = uFrequency/6.0;
  mediump float osc = (sin(uTime/1000.0*frq));
  mediump float green = osc;
  


  if(green<0.5){
    green = 0.5;
  }
  color = vec3(osc, green, 1.0);

  //gl_FragColor = vec4(osc, green, 1, vRefraction);
  gl_FragColor = vec4(color * vLighting, vRefraction);
  //gl_FragColor = vec4(uColor * vLighting, vRefraction);
}
