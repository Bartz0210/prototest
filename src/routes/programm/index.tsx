import * as React from "react";
import { css } from "emotion";
import Canvas from "../../components/Canvas";
import Controlpanel from "../../components/Controlpanel";
import ControlItem from "../../components/Controltem";
import store, { RootState } from "../../store";
import scene, {
  UpdateCursorRadius,
  UpdateCursorPosition,
  updateCursorPositionY
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
}

function Programm(props: OwnProps & StateProps & DispatchProps) {
  return (
    <div className={theme.root}>
      <Controlpanel>
        {/*     Control Item: Radiu*/}
        <ControlItem
          label="Radius"
          value={props.cursor.radius}
          icon="settings"
          onChange={props.updateCursorRadius}
        />

        <ControlItem
          label="Position"
          value={props.cursor.position["1"]}
          icon="settings"
          onChange={props.updateCursorPositionY}
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

function updateCursorPositionY(y: number): updateCursorPositionY {
  return { type: "updateCursorPositionY", y };
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  updateCursorRadius,
  updateCursorPositionY
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Programm);
