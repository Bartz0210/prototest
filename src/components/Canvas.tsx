import * as React from 'react';
import { css, cx } from 'emotion';
import { connect } from 'react-redux';

import { RootState } from '../store';
import { SceneData } from '../renderer/Scene';
import Renderer, {
  CursorPositionCallback,
  CursorRadiusCallback,
} from '../renderer';

const theme = {
  root: css`
    label: Canvas;
    position: relative;
    width: 100%;
    height: 100%;
    flex: 1;
  `,
  canvas: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
};

export type Props = {
  className?: string;
} & {
  scene: SceneData;
  onCursorPosition: CursorPositionCallback;
  onCursorRadius: CursorRadiusCallback;
};

export class Canvas extends React.Component<Props> {
  canvas: HTMLCanvasElement | null = null;
  frame: number | null = null;
  height: number = 0;
  renderer: Renderer | null = null;
  width: number = 0;

  setElement = (canvas: HTMLCanvasElement | null) => {
    if (this.canvas === canvas) return;
    this.canvas = canvas;

    if (this.frame) {
      window.cancelAnimationFrame(this.frame);
      this.frame = null;
    }

    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }

    if (canvas) {
      const { onCursorPosition, onCursorRadius } = this.props;
      this.frame = window.requestAnimationFrame(this.update);
      this.renderer = new Renderer({
        canvas,
        onCursorPosition,
        onCursorRadius,
      });
    }
  };

  render() {
    const { className } = this.props;
    const { height, width } = this;

    return (
      <div className={cx(theme.root, className)}>
        <canvas
          className={theme.canvas}
          height={height}
          ref={this.setElement}
          width={width}
        />
      </div>
    );
  }

  update = () => {
    const { canvas, renderer } = this;
    if (!canvas || !renderer) return;

    const container = canvas.parentElement;
    let { height, width } = this;
    if (!container) return;

    if (container.clientHeight !== height || container.clientWidth !== width) {
      height = this.height = canvas.height = container.clientHeight;
      width = this.width = canvas.width = container.clientWidth;
      renderer.setSize(width, height);
    }

    renderer.render(this.props.scene);

    this.frame = window.requestAnimationFrame(this.update);
  };
}

export default connect(
  (state: RootState) => ({
    scene: state.scene,
  }),
  dispatch => ({
    onCursorPosition: (x: number, y: number, z: number) =>
      dispatch({
        type: 'updateCursorPosition',
        x,
        y,
        z,
      }),
    onCursorRadius: (radius: number) =>
      dispatch({
        type: 'updateCursorRadius',
        radius,
      }),
  })
)(Canvas);
