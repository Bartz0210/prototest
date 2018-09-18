import * as React from "react";
import { css } from "emotion";
import Canvas from "../../components/Canvas";
import Controlpanel from "../../components/Controlpanel";
import ControlItem from "../../components/Controltem";
import store, { RootState } from "../../store";
import scene, { UpdateCursorRadius } from "../../store/scene";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { CursorState } from "../../renderer/Scene";

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
  // updateRadius: UpdateCursorRadius
}

function Programm(props: OwnProps & StateProps & DispatchProps) {
  return (
    <div className={theme.root}>
      <Controlpanel>
        <ControlItem
          label="Radius"
          value={props.cursor.radius}
          icon="settings"
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

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Programm);
