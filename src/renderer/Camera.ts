import Renderer from './index';
import { mat4, vec3 } from 'gl-matrix';

const dragPower = 0.01;
const pi = Math.PI;
const piHalf = Math.PI * 0.5;

export default class Camera {
  lat: number = 0;
  lng: number = 0;
  distance: number = 30;
  position: vec3 = vec3.create();
  readonly renderer: Renderer;

  constructor(renderer: Renderer) {
    this.renderer = renderer;
    this.handleDrag(0, 0);
  }

  handleDrag(x: number, y: number) {
    let { lat, lng } = this;

    lat += x * dragPower;
    while (lat > pi) lat -= pi * 2;
    while (lat < -pi) lat += pi * 2;

    lng -= y * dragPower;
    if (lng < -piHalf) lng = -piHalf;
    if (lng > piHalf) lng = piHalf;

    this.lat = lat;
    this.lng = lng;
    this.update();
  }

  handleZoom(scale: number) {
    let { distance } = this;
    distance /= scale;
    if (distance < 10) distance = 10;
    if (distance > 50) distance = 50;

    this.distance = distance;
    this.update();
  }

  render() {
    const { projectionView, projection, view } = this.renderer;
    mat4.lookAt(view, this.position, [0, 0, 0], [0, -1, 0]);
    mat4.multiply(projectionView, projection, view);
  }

  update() {
    const { distance, lat, lng, position } = this;
    const lngCos = Math.cos(lng);

    position[0] = Math.sin(lat) * lngCos * distance;
    position[1] = Math.sin(lng) * distance;
    position[2] = Math.cos(lat) * lngCos * distance;
  }
}
