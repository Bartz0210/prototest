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
import { CursorState, LeadState } from "../../renderer/Scene";
import { Sidebar } from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";
import { ControlElectrode } from "../../components/ControlElectrode";

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
  `,
  grid: css`
    label: ControlItem;
    display: grid;
    grid-template-columns: 177 37 176;
    grid-template-rows: 36 36 36 36 36 36 36 36;
    grid-gap: 0;

    align-items: left;

    height: 288px;
    width: 390px;

    text-decoration: none;
  `,
  electr: css`
    grid-column-start: 2;
    grid-row: 0 / span 8;
    z-index: 1;
  `,
  electr_fill: css`
    fill: none;
  `,

  empty: css`
    background: none;
  `
};

interface OwnProps {}

interface StateProps {
  cursor: CursorState;
  leads: LeadState;
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
        </Sidebar>
        <button
          style={{
            zIndex: 3,
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
            border: "none",
            background: "#72C0A8",
            width: "32px",
            height: "112px",
            position: "fixed",
            left: 0,
            boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.2)",
            transform: this.state.menuVisible
              ? "translateX(300px)"
              : "translateX(0)",
            transition: "300ms ease-in"
          }}
          onClick={this.handleMenuToggle}
        >
          I I
        </button>

        <Controlpanel>
          {/*ON OFF!*/}
          <div style={{ margin: "10 0 0 20" }}>
            <ControlItemCheck
              label="ON/OFF"
              checked={props.cursor.isOn}
              onChange={props.toggleElectrode}
            />
          </div>
          <div className={theme.grid}>
            <div className={theme.electr}>
              <svg
                className={theme.electr}
                id="Ebene_1"
                data-name="Ebene 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36.94 289.06"
              >
                <title>Elektroooden-Illus</title>
                <path
                  className={theme.electr_fill}
                  d="M35.94,18.56v252a17.5,17.5,0,0,1-35,0v-252a17.5,17.5,0,1,1,35,0Z"
                />
                <path d="M18.44.06A18.52,18.52,0,0,0-.06,18.56v252a18.5,18.5,0,0,0,37,0v-252A18.52,18.52,0,0,0,18.44.06Zm17.5,270.5a17.5,17.5,0,0,1-35,0v-252a17.5,17.5,0,1,1,35,0Z" />
                <rect
                  fill={props.leads.leads["5"] ? "#72C0A8" : "#3d3d3d"}
                  x="-0.06"
                  y="36.62"
                  width="37"
                  height="36"
                />
                <rect
                  fill={props.leads.leads["3"] ? "#72C0A8" : "#3d3d3d"}
                  x="-0.06"
                  y="108.63"
                  width="12.5"
                  height="36"
                />
                <rect
                  fill={props.leads.leads["4"] ? "#72C0A8" : "#3d3d3d"}
                  x="24.43"
                  y="108.63"
                  width="12.5"
                  height="36"
                />
                <rect
                  fill={props.leads.leads["1"] ? "#72C0A8" : "#3d3d3d"}
                  x="-0.06"
                  y="180.63"
                  width="12.5"
                  height="36"
                />
                <rect
                  fill={props.leads.leads["2"] ? "#72C0A8" : "#3d3d3d"}
                  x="24.43"
                  y="180.63"
                  width="12.5"
                  height="36"
                />
                <path
                  fill={props.leads.leads["0"] ? "#72C0A8" : "#3d3d3d"}
                  d="M.4,252.63h36a.47.47,0,0,1,.47.47v17.5A18.47,18.47,0,0,1,18.4,289.06h0A18.47,18.47,0,0,1-.06,270.6v-17.5a.47.47,0,0,1,.47-.47Z"
                />
              </svg>
            </div>
            <div style={{ gridColumn: "1", gridRow: "1" }} />
            <div style={{ gridColumn: "3", gridRow: "1" }} />
            <div
              style={{ gridColumn: "1", gridRow: "2", background: "#dadada" }}
            >
              <div style={{ float: "right", marginRight: 30 }}>
                <ControlItemCheck
                  label="Lead 5"
                  checked={props.leads.leads["5"]}
                  onChange={props.toggleLead5}
                />
              </div>
            </div>
            <div
              style={{ gridColumn: "3", gridRow: "2", background: "#dadada" }}
            />
            <div style={{ gridColumn: "1", gridRow: "3" }} />
            <div style={{ gridColumn: "3", gridRow: "3" }} />
            <div
              style={{ gridColumn: "1", gridRow: "4", background: "#dadada" }}
            >
              <div style={{ float: "right", marginRight: 30 }}>
                <ControlItemCheck
                  label="Lead 3"
                  checked={props.leads.leads["3"]}
                  onChange={props.toggleLead3}
                />
              </div>
            </div>
            <div
              style={{ gridColumn: "3", gridRow: "4", background: "#dadada" }}
            >
              <div style={{ float: "left", marginLeft: 30 }}>
                <ControlItemCheck
                  label="Lead 4"
                  checked={props.leads.leads["4"]}
                  onChange={props.toggleLead4}
                />
              </div>
            </div>
            <div style={{ gridColumn: "1", gridRow: "5" }} />
            <div style={{ gridColumn: "3", gridRow: "5" }} />
            <div
              style={{ gridColumn: "1", gridRow: "6", background: "#dadada" }}
            >
              <div style={{ float: "right", marginRight: 30 }}>
                <ControlItemCheck
                  label="Lead 1"
                  checked={props.leads.leads["1"]}
                  onChange={props.toggleLead1}
                />
              </div>
            </div>
            <div
              style={{ gridColumn: "3", gridRow: "6", background: "#dadada" }}
            >
              <div style={{ float: "left", marginLeft: 30 }}>
                <ControlItemCheck
                  label="Lead 2"
                  checked={props.leads.leads["2"]}
                  onChange={props.toggleLead2}
                />
              </div>
            </div>
            <div style={{ gridColumn: "1", gridRow: "7" }} />
            <div style={{ gridColumn: "3", gridRow: "7" }} />
            <div
              style={{ gridColumn: "1", gridRow: "8", background: "#dadada" }}
            >
              <div style={{ float: "right", marginRight: 30 }}>
                <ControlItemCheck
                  label="Lead 0"
                  checked={props.leads.leads["0"]}
                  onChange={props.toggleLead0}
                />
              </div>
            </div>
            <div
              style={{ gridColumn: "2", gridRow: "8", background: "#dadada" }}
            />
            <div
              style={{ gridColumn: "3", gridRow: "8", background: "#dadada" }}
            />
          </div>
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
    cursor: state.scene.cursor,
    leads: state.scene.leads
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
