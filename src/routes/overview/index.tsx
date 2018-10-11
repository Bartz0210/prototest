import * as React from "react";
import { css } from "emotion";
import Widget from "../../components/widget";
import WidgetOnOff from "../../components/WidgetOnOff";
import WidgetPic from "../../components/WidegtPic";
import WidgetProfile from "../../components/WidgetProfile";
import WidgetText from "../../components/WidgetText";
import WidgetTextBulltes from "../../components/WidgetTextBulltes";
import WidgetElektrode from "../../components/WidgetElektrode";
import { CursorState, LeadState } from "../../renderer/Scene";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { RootState } from "../../store";
import {
  UpdateCursorPosition,
  UpdateCursorRadius,
  UpdateFrequency,
  UpdateCursorPositionX,
  UpdateCursorPositionY,
  UpdateCursorPositionZ,
  TransformCursorX,
  TransformCursorY,
  TransformCursorZ,
  ToggleElectrode,
  ToggleLead0,
  ToggleLead1,
  ToggleLead2,
  ToggleLead3,
  ToggleLead4,
  ToggleLead5
} from "../../store/scene";

const theme = {
  root: css`
    label: Overview;
    margin: 14 17 13 17;
    display: grid;
    grid-template-columns: 320 320 320;
    grid-template-rows: 300 300;
    grid-gap: 15px;
    align-items: stretch;
    justify-content: stretch;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `
};

interface OwnProps {}

interface StateProps {
  cursor: CursorState;
  leads: LeadState;
}

interface DispatchProps {
  updateFrequency(frequency: number): void;
  updateCursorPosition(x: number, y: number, z: number): void;
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

class Overview extends React.Component<OwnProps & StateProps & DispatchProps> {
  render() {
    const props = this.props;
    return (
      <div className={theme.root}>
        <Widget headline=" ">
          <WidgetProfile picture="Profilepicture.png" />
        </Widget>
        <Widget headline="Patient">
          <WidgetText
            name="Max Mustermann"
            id="123-456-789"
            birthday="23-11-1954"
            implantSince="11-06-2003"
            modelNo="DBS123-56"
            serialNo="234-56"
            firmware="V0.454545"
          />
        </Widget>
        <Widget headline="Symptome">
          <WidgetTextBulltes
            id="- Tremor"
            birthday="- Rigor"
            implantSince="- Akinese"
          />
        </Widget>
        <Widget headline="Lokalisation">
          <WidgetPic picture="Bild1.jpg" />
        </Widget>
        <WidgetOnOff
          headline="Linke Elektrode"
          checked={this.props.cursor.isOn}
          onChange={this.props.toggleElectrode}
        >
          <WidgetElektrode
            id={this.props.cursor.radius}
            birthday={this.props.cursor.frequency}
            implantSince="22"
            to="/programm"
            lead0={props.leads.leads["0"]}
            lead1={props.leads.leads["1"]}
            lead2={props.leads.leads["2"]}
            lead3={props.leads.leads["3"]}
            lead4={props.leads.leads["4"]}
            lead5={props.leads.leads["5"]}
          />
        </WidgetOnOff>
        <Widget headline="Rechte Elektrode">
          <WidgetElektrode
            id="1.5"
            birthday="60"
            implantSince="130"
            to="/programm"
            lead0={false}
            lead1={false}
            lead2={false}
            lead3={false}
            lead4={false}
            lead5={false}
          />
        </Widget>
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
function updateCursorPosition(
  x: number,
  y: number,
  z: number
): UpdateCursorPosition {
  return { type: "updateCursorPosition", x, y, z };
}
function updateCursorRadius(radius: number): UpdateCursorRadius {
  return { type: "updateCursorRadius", radius };
}
function updateFrequency(frequency: number): UpdateFrequency {
  return { type: "updateFrequency", frequency };
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
  updateFrequency,
  updateCursorPosition,
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
)(Overview);
