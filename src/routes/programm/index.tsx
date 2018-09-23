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
  UpdateCursorPositionX,
  UpdateCursorPositionY,
  UpdateCursorPositionZ,
  TransformCursorX,
  ToggleElectrode,
  ToggleLead0,
  ToggleLead1,
  ToggleLead2,
  ToggleLead3,
  ToggleLead4,
  ToggleLead5,
  TransformCursorY,
  TransformCursorZ
} from "../../store/scene";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { CursorState } from "../../renderer/Scene";
import { Sidebar } from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";

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
  updateCursorPositionX(x: number): void;
  updateCursorPositionY(y: number): void;
  updateCursorPositionZ(z: number): void;
  transformCursorX(scaleX: number): void;
  transformCursorY(scaleY: number): void;
  transformCursorZ(scaleZ: number): void;
  toggleElectrode(isOn: boolean): void;
  toggleLead0(isAtLead0: boolean): void;
  toggleLead1(isAtLead1: boolean): void;
  toggleLead2(isAtLead2: boolean): void;
  toggleLead3(isAtLead3: boolean): void;
  toggleLead4(isAtLead4: boolean): void;
  toggleLead5(isAtLead5: boolean): void;
}

interface State {
  menuVisible: boolean;
}

class Programm extends React.Component<
  OwnProps & StateProps & DispatchProps,
  State
> {
  state: State = {
    menuVisible: false
  };

  handleMenuToggle = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };



  render() {
    const props = this.props;

    return (
      <div className={theme.root}>
        <Sidebar visible={this.state.menuVisible}>
          <SidebarItem label="Programm" />
          <SidebarItem label="Programm" />
          <SidebarItem label="Programm" />
          <SidebarItem label="Programm" />
          <SidebarItem label="Programm" />
          <SidebarItem label="Programm" />
          <SidebarItem label="Programm" />
          <SidebarItem label="Programm" />
          <SidebarItem label="Programm" />
          <SidebarItem label="Programm" />
          <SidebarItem label="Programm" />

          <button onClick={this.handleMenuToggle}>Close</button>
        </Sidebar>

        <Controlpanel>
          {/*ON OFF!*/}
          <ControlItemCheck
            label="ON/OFF"
            checked={props.cursor.isOn}
            icon="settings"
            onChange={props.toggleElectrode}
          />
          {/*5*/}
          <ControlItemCheck
            label="Lead5"
            checked={props.cursor.isAtLead5}
            icon="settings"
            onChange={props.toggleLead5}
          />
          {/*4*/}
          <ControlItemCheck
            label="Lead4"
            checked={props.cursor.isAtLead4}
            icon="settings"
            onChange={props.toggleLead4}
          />
          {/*3*/}
          <ControlItemCheck
            label="Lead3"
            checked={props.cursor.isAtLead3}
            icon="settings"
            onChange={props.toggleLead3}
          />
          {/*2*/}
          <ControlItemCheck
            label="Lead2"
            checked={props.cursor.isAtLead2}
            icon="settings"
            onChange={props.toggleLead2}
          />
          {/*1*/}
          <ControlItemCheck
            label="Lead1"
            checked={props.cursor.isAtLead1}
            icon="settings"
            onChange={props.toggleLead1}
          />
          {/*0*/}
          <ControlItemCheck
            label="Lead0"
            checked={props.cursor.isAtLead0}
            icon="settings"
            onChange={props.toggleLead0}
          />
          {/*     Control Item: Radius*/}
          <ControlItem
            label="Amplitude"
            value={props.cursor.radius}
            increment={0.2}
            
            onChange={props.updateCursorRadius}
          />
          {/*     Control Item: Xposition*/}
          <ControlItem
            label="XPosition"
            value={props.cursor.position["0"]}
            increment={0.2}
            
            onChange={props.updateCursorPositionX}
          />
          {/*     Control Item: Yposition*/}
          <ControlItem
            label="YPosition"
            value={props.cursor.position["1"]}
            increment={0.2}
            
            onChange={props.updateCursorPositionY}
          />
         
          <button onClick={this.handleMenuToggle}>Toggle</button>
        </Controlpanel>
        <Canvas />
      </div>
    );
  }
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

function updateCursorPositionX(x: number): UpdateCursorPositionX {
  return { type: "updateCursorPositionX", x };
}
function updateCursorPositionY(y: number): UpdateCursorPositionY {
  return { type: "updateCursorPositionY", y };
}
function updateCursorPositionZ(z: number): UpdateCursorPositionZ {
  return { type: "updateCursorPositionZ", z };
}

function transformCursorX(scaleX: number): TransformCursorX {
  return { type: "transformCursorX", scaleX };
}
function transformCursorY(scaleY: number): TransformCursorY {
  return { type: "transformCursorY", scaleY };
}
function transformCursorZ(scaleZ: number): TransformCursorZ {
  return { type: "transformCursorZ", scaleZ };
}

function toggleElectrode(isOn: boolean): ToggleElectrode {
  return { type: "toggleElectrode", isOn };
}
function toggleLead0(isAtLead0: boolean): ToggleLead0 {
  return { type: "toggleLead0", isAtLead0 };
}
function toggleLead1(isAtLead1: boolean): ToggleLead1 {
  return { type: "toggleLead1", isAtLead1 };
}
function toggleLead2(isAtLead2: boolean): ToggleLead2 {
  return { type: "toggleLead2", isAtLead2 };
}
function toggleLead3(isAtLead3: boolean): ToggleLead3 {
  return { type: "toggleLead3", isAtLead3 };
}
function toggleLead4(isAtLead4: boolean): ToggleLead4 {
  return { type: "toggleLead4", isAtLead4 };
}
function toggleLead5(isAtLead5: boolean): ToggleLead5 {
  return { type: "toggleLead5", isAtLead5 };
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  updateCursorRadius,
  updateCursorPositionX,
  updateCursorPositionY,
  updateCursorPositionZ,
  transformCursorX,
  transformCursorY,
  transformCursorZ,
  toggleElectrode,
  toggleLead0,
  toggleLead1,
  toggleLead2,
  toggleLead3,
  toggleLead4,
  toggleLead5
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Programm);
