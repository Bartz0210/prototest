import * as React from "react";
import { css } from "emotion";
import Canvas from "../../components/Canvas";
import Controlpanel from "../../components/Controlpanel";
import ControlItem from "../../components/Controltem";
import ControlItemCheck from "../../components/ControlItemCheck";
import store, { RootState } from "../../store";
import scene, {
  UpdateCursorRadius,
  UpdateCursorPosition,
  UpdateCursorPositionY,
  TransformCursorX,
  ToggleElectrode
} from "../../store/scene";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { CursorState } from "../../renderer/Scene";
import { CursorRadiusCallback } from "../../renderer";

const theme = {
  root: css`
    label: Programm;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    font-size: 32px;
  `
};

interface OwnProps {}

interface StateProps {
  cursor: CursorState;
}

interface DispatchProps {
  updateCursorRadius(radius: number): void;
  updateCursorPositionY(y: number): void;
  transformCursorX(scaleX: number): void;
  toggleElectrode(isOn: boolean): void;
}

function Programm(props: OwnProps & StateProps & DispatchProps) {
  return (
    <div className={theme.root}>
      <Controlpanel>
        {/*     Control Item: Radius*/}
        <ControlItem
          label="Radius"
          value={props.cursor.radius}
          icon="settings"
          onChange={props.updateCursorRadius}
        />
        {/*     Control Item: Yposition*/}
        <ControlItem
          label="Position"
          value={props.cursor.position["1"]}
          icon="settings"
          onChange={props.updateCursorPositionY}
        />

        {/*     Control Item: transform x*/}
        <ControlItem
          label="xtransform"
          value={props.cursor.scaleX}
          icon="settings"
          onChange={props.transformCursorX}
        />

        <ControlItemCheck
          label="ON/OFF"
          checked={props.cursor.isOn}
          icon="settings"
          onChange={props.toggleElectrode}
        />
      </Controlpanel>
      <Canvas />
    </div>
  );
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState> = (
  state,
  props
) => {
  return {
    cursor: state.scene.cursor
  };
};

//Action creators
function updateCursorRadius(radius: number): UpdateCursorRadius {
  return { type: "updateCursorRadius", radius };
}

function updateCursorPositionY(y: number): UpdateCursorPositionY {
  return { type: "updateCursorPositionY", y };
}

function transformCursorX(scaleX: number): TransformCursorX {
  return { type: "transformCursorX", scaleX };
}

function toggleElectrode(isOn: boolean): ToggleElectrode {
  return { type: "toggleElectrode", isOn };
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  updateCursorRadius,
  updateCursorPositionY,
  transformCursorX,
  toggleElectrode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Programm);
