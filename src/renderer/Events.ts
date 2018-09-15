import Renderer from '.';

const mouseIdentifier = -1;

export const enum ListenMode {
  None,
  Mouse,
  Touch,
}

export const enum ActionMode {
  None,
  Drag,
  Zoom,
}

export interface Pointer {
  currentX: number;
  currentY: number;
  id: number;
  initialX: number;
  initialY: number;
  lastX: number;
  lastY: number;
}

export default class Events {
  initialDistance: number = 0;
  isSceneInteraction: boolean = false;
  listenMode: ListenMode = ListenMode.None;
  pointers: Array<Pointer> = [];
  readonly renderer: Renderer;
  readonly element: HTMLElement;

  constructor(renderer: Renderer, element: HTMLElement) {
    this.element = element;
    this.renderer = renderer;

    element.addEventListener('mousedown', this.handleMouseDown);
    element.addEventListener('touchstart', this.handleTouchStart);
    element.addEventListener('wheel', this.handleWheel);
  }

  dispose() {
    const { element } = this;
    element.removeEventListener('mousedown', this.handleMouseDown);
    element.removeEventListener('touchstart', this.handleTouchStart);
    element.removeEventListener('wheel', this.handleWheel);

    this.setListenMode(ListenMode.None);
  }

  addPointer(id: number, x: number, y: number) {
    if (this.pointers.length >= 2) {
      return;
    }

    const { left, top } = this.element.getBoundingClientRect();
    x -= left;
    y -= top;

    const pointer = {
      currentX: x,
      currentY: y,
      id,
      initialX: x,
      initialY: y,
      lastX: x,
      lastY: y,
    };

    this.pointers.push(pointer);
    this.initialDistance = this.getDistance();

    if (this.pointers.length === 1) {
      this.isSceneInteraction = this.renderer.scene.hitTest(x, y) !== null;
    }
  }

  updatePointer(id: number, x: number, y: number) {
    const { isSceneInteraction, pointers } = this;
    const { camera, scene } = this.renderer;
    const pointer = pointers.find(pointer => pointer.id === id);
    if (!pointer) {
      return;
    }

    const { left, top } = this.element.getBoundingClientRect();
    pointer.lastX = pointer.currentX;
    pointer.lastY = pointer.currentY;
    pointer.currentX = x - left;
    pointer.currentY = y - top;

    if (pointers.length > 1) {
      const distance = this.getDistance();
      const scale = distance / this.initialDistance;
      this.initialDistance = distance;

      if (scale > 0.2 && scale < 5) {
        if (isSceneInteraction) {
          scene.handleScale(scale);
        } else {
          camera.handleZoom(scale);
        }
      }
    } else {
      if (isSceneInteraction) {
        scene.handleDrag(pointer);
      } else {
        const deltaX = pointer.currentX - pointer.lastX;
        const deltaY = pointer.currentY - pointer.lastY;
        camera.handleDrag(deltaX, deltaY);
      }
    }
  }

  removePointer(id: number) {
    this.pointers = this.pointers.filter(pointer => pointer.id !== id);
    if (this.pointers.length === 0) {
      this.setListenMode(ListenMode.None);
    }
  }

  getDistance() {
    const { pointers } = this;
    if (pointers.length !== 2) return 0;

    const [a, b] = pointers;
    return Math.sqrt(
      Math.pow(a.currentX - b.currentX, 2) +
        Math.pow(a.currentY - b.currentY, 2)
    );
  }

  handleMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    this.setListenMode(ListenMode.Mouse);
    this.addPointer(mouseIdentifier, event.clientX, event.clientY);
  };

  handleMouseMove = (event: MouseEvent) => {
    event.preventDefault();
    this.updatePointer(mouseIdentifier, event.clientX, event.clientY);
  };

  handleMouseUp = (event: MouseEvent) => {
    event.preventDefault();
    this.removePointer(mouseIdentifier);
  };

  handleTouchStart = (event: TouchEvent) => {
    event.preventDefault();
    this.setListenMode(ListenMode.Touch);
    for (const touch of event.changedTouches) {
      this.addPointer(touch.identifier, touch.clientX, touch.clientY);
    }
  };

  handleTouchMove = (event: TouchEvent) => {
    event.preventDefault();
    for (const touch of event.changedTouches) {
      this.updatePointer(touch.identifier, touch.clientX, touch.clientY);
    }
  };

  handleTouchEnd = (event: TouchEvent) => {
    event.preventDefault();
    for (const touch of event.changedTouches) {
      this.removePointer(touch.identifier);
    }
  };

  handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    this.renderer.camera.handleZoom(1 - event.deltaY * 0.001);
  };

  setListenMode(mode: ListenMode): boolean {
    if (this.listenMode === mode) return false;

    switch (this.listenMode) {
      case ListenMode.Mouse:
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
        break;
      case ListenMode.Touch:
        document.removeEventListener('touchmove', this.handleTouchMove);
        document.removeEventListener('touchcancel', this.handleTouchEnd);
        document.removeEventListener('touchend', this.handleTouchEnd);
        break;
    }

    this.listenMode = mode;
    switch (mode) {
      case ListenMode.Mouse:
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
        break;
      case ListenMode.Touch:
        document.addEventListener('touchmove', this.handleTouchMove);
        document.addEventListener('touchcancel', this.handleTouchEnd);
        document.addEventListener('touchend', this.handleTouchEnd);
        break;
    }

    return true;
  }
}
