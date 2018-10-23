import * as React from "react";
import { css } from "emotion";
import Canvas from "../../components/Canvas";
import Controlpanel from "../../components/Controlpanel";
import ControlItem from "../../components/Controltem";
import ControlItemCheck from "../../components/ControlItemCheck";
import ControlItemSwitch from "../../components/ControlItemSwitch";
import { RootState } from "../../store";
import {
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
  TransformCursorZ,
  UpdateFrequency,
  ToggleLead134,
  ToggleLead234,
  ToggleLead34,
  ToggleLead1234,
  ToggleLead02,
  ToggleLead12,
  ToggleLead24,
  ToggleLead012,
  ToggleLead01,
  ToggleLead124,
  ToggleLead123,
  ToggleLead13,
  ToggleLead345,
  ToggleLead35,
  ToggleLeads,
  ToggleLead45
} from "../../store/scene";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { CursorState, LeadState } from "../../renderer/Scene";
import { Sidebar } from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";
import Icon from "../../components/Icon";
import _ from "underscore";

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
  `,
  flexb: css`
    display: flex;
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
  toggleLead01(isAtLead0: boolean): void;
  toggleLead02(isAtLead: boolean): void;
  toggleLead012(isAtLead: boolean): void;
  toggleLead1(isAtLead1: boolean): void;
  toggleLead12(isAtLead: boolean): void;
  toggleLead13(isAtLead: boolean): void;
  toggleLead123(isAtLead: boolean): void;
  toggleLead124(isAtLead: boolean): void;
  toggleLead2(isAtLead2: boolean): void;
  toggleLead234(isAtLead2: boolean): void;
  toggleLead24(isAtLead2: boolean): void;
  toggleLead3(isAtLead3: boolean): void;
  toggleLead34(isAtLead3: boolean): void;
  toggleLead345(isAtLead3: boolean): void;
  toggleLead35(isAtLead3: boolean): void;
  toggleLead4(isAtLead4: boolean): void;
  toggleLead45(isAtLead4: boolean): void;
  toggleLead5(isAtLead5: boolean): void;
  toggleLead134(isAtLead: boolean): void;
  toggleLead1234(isAtLead: boolean): void;
  toggleLeads(isAtLead: boolean): void;
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

    //console.log("render", JSON.stringify(props.cursor, null, 2));

    return (
      <div className={theme.root}>
        <Sidebar
          title="Programme"
          visible={this.state.menuVisible}
          onClick={this.handleMenuToggle}
        >
          <SidebarItem
            label="Programm 1 - Dystonie"
            even={false}
            menuVisible={this.state.menuVisible}
            onClick={isAtLead => {
              this.handleMenuToggle();
              props.toggleLead123(isAtLead);
              props.updateCursorPosition(
                -0.25 - props.cursor.radius * props.cursor.scaleX,
                1.25,
                props.cursor.position[2]
              );
              props.transformCursorY(2);
              props.updateCursorRadius(2.4);
            }}
          />
          <SidebarItem
            label="Programm 2 - Tremor"
            even={true}
            menuVisible={this.state.menuVisible}
            onClick={isAtLead => {
              this.handleMenuToggle();
              props.toggleLead012(isAtLead);
              props.updateCursorPosition(0, 3.125, props.cursor.position[2]);
              props.transformCursorY(2);
              props.transformCursorX(3);
              props.updateFrequency(150);
            }}
            // onClick={this.handleMenuToggle}
          />
          <SidebarItem
            label="Programm 3 - Bradykinese"
            even={false}
            menuVisible={this.state.menuVisible}
            onClick={isAtLead => {
              this.handleMenuToggle();
              props.toggleLead34(isAtLead);
              props.updateCursorPosition(0, -1.875, props.cursor.position[2]);
              props.transformCursorY(1);
              props.updateCursorRadius(1.8);
              props.updateFrequency(180);
            }}
            // onClick={this.handleMenuToggle}
          />
          <SidebarItem
            label="Programm 4 - Feinmotorik"
            even={true}
            menuVisible={this.state.menuVisible}
            onClick={isAtLead => {
              this.handleMenuToggle();
              props.toggleLead5(isAtLead);
              props.updateCursorPosition(0, -3.125, 0);
              props.transformCursorY(1);
              props.transformCursorX(2.6);
              props.updateFrequency(105);
            }}
            // onClick={this.handleMenuToggle}
          />
        </Sidebar>
        <button
          style={{
            zIndex: 3,
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
            border: "none",
            background: "#72C0A8",
            width: "56",
            height: "56px",
            position: "fixed",
            top: 0,
            left: 0,

            color: "#fff"
          }}
          onClick={this.handleMenuToggle}
        >
          <Icon
            name={this.state.menuVisible ? "close" : "menu"}
            size={"medium"}
          />
        </button>

        <Controlpanel>
          {/*ON OFF!*/}
          <div style={{ margin: "10 0 0 20" }}>
            <ControlItemSwitch
              checked={props.cursor.isOn}
              onChange={checked => {
                props.toggleElectrode(checked);
                if (checked) {
                  props.toggleLead1234(checked);
                  props.updateCursorPosition(0, 1.25, props.cursor.position[2]);
                  props.transformCursorY(2);
                } else {
                  props.toggleLeads(checked);
                }
              }}
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
                  //onChange={props.toggleLead5}
                  onChange={isAtLead => {
                    //345
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead345(isAtLead);
                      props.updateCursorPosition(
                        0,
                        -4.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        true,
                        true
                      ])
                    ) {
                      props.toggleLead34(isAtLead);
                      props.updateCursorPosition(
                        0,
                        -1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }
                    //35
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead35(isAtLead);
                      props.updateCursorPosition(
                        -0.25 - props.cursor.radius * props.cursor.scaleX,
                        -1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        false,
                        true
                      ])
                    ) {
                      props.toggleLead3(isAtLead);
                      props.updateCursorPosition(
                        -0.5 - props.cursor.radius * props.cursor.scaleX,
                        -0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //45
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead45(isAtLead);
                      props.updateCursorPosition(
                        0.25 + props.cursor.radius * props.cursor.scaleX,
                        -1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        true,
                        true
                      ])
                    ) {
                      props.toggleLead4(isAtLead);
                      props.updateCursorPosition(
                        0.5 + props.cursor.radius * props.cursor.scaleX,
                        -0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //none
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        false,
                        true
                      ])
                    ) {
                      props.toggleLeads(isAtLead);
                      props.toggleElectrode(isAtLead);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead5(isAtLead);
                      props.updateCursorPosition(0, -3.125, 0);
                      props.transformCursorY(1);
                      props.toggleElectrode(isAtLead);
                    }
                  }}
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
                  //onChange={props.toggleLead3}
                  onChange={isAtLead => {
                    //1234
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead124(isAtLead);
                      props.updateCursorPosition(
                        0.25 + props.cursor.radius * props.cursor.scaleX,
                        1.25,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        false,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead1234(isAtLead);
                      props.updateCursorPosition(
                        0,
                        0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }

                    //345
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        true,
                        true
                      ])
                    ) {
                      props.toggleLead345(isAtLead);
                      props.updateCursorPosition(
                        0,
                        -4.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        true,
                        true
                      ])
                    ) {
                      props.toggleLead45(isAtLead);
                      props.updateCursorPosition(
                        0.25 + props.cursor.radius * props.cursor.scaleX,
                        -1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }

                    //123
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead123(isAtLead);
                      props.updateCursorPosition(
                        -0.25 - props.cursor.radius * props.cursor.scaleX,
                        1.25,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        true,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead12(isAtLead);
                      props.updateCursorPosition(
                        0,
                        1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //234
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        true,
                        true,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead234(isAtLead);
                      props.updateCursorPosition(
                        0.25 + props.cursor.radius * props.cursor.scaleX,
                        0,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        true,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead24(isAtLead);
                      props.updateCursorPosition(
                        -0.5 - props.cursor.radius * props.cursor.scaleX,
                        0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }

                    //13
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead13(isAtLead);
                      props.updateCursorPosition(
                        0.5 + props.cursor.radius * props.cursor.scaleX,
                        0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        false,
                        true,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead1(isAtLead);
                      props.updateCursorPosition(
                        -0.5 - props.cursor.radius * props.cursor.scaleX,
                        1.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //34
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead34(isAtLead);
                      props.updateCursorPosition(
                        0,
                        -1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead4(isAtLead);
                      props.updateCursorPosition(
                        0.5 + props.cursor.radius * props.cursor.scaleX,
                        -0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //35
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        false,
                        true
                      ])
                    ) {
                      props.toggleLead35(isAtLead);
                      props.updateCursorPosition(
                        -0.25 - props.cursor.radius * props.cursor.scaleX,
                        -1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        false,
                        true
                      ])
                    ) {
                      props.toggleLead5(isAtLead);
                      props.updateCursorPosition(0, -3.125, 0);
                      props.transformCursorY(1);
                    }

                    //none
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLeads(isAtLead);
                      props.toggleElectrode(isAtLead);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead3(isAtLead);
                      props.updateCursorPosition(
                        -0.5 - props.cursor.radius * props.cursor.scaleX,
                        -0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                      props.toggleElectrode(isAtLead);
                    }
                  }}
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
                  //onChange={props.toggleLead4}
                  onChange={isAtLead => {
                    //1234
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead123(isAtLead);
                      props.updateCursorPosition(
                        -0.25 - props.cursor.radius * props.cursor.scaleX,
                        1.25,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        true,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead1234(isAtLead);
                      props.updateCursorPosition(
                        0,
                        0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }

                    //345
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        false,
                        true
                      ])
                    ) {
                      props.toggleLead345(isAtLead);
                      props.updateCursorPosition(
                        0,
                        -4.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        true,
                        true
                      ])
                    ) {
                      props.toggleLead35(isAtLead);
                      props.updateCursorPosition(
                        -0.25 - props.cursor.radius * props.cursor.scaleX,
                        -1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }

                    //124
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead124(isAtLead);
                      props.updateCursorPosition(
                        0.25 + props.cursor.radius * props.cursor.scaleX,
                        1.25,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        false,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead12(isAtLead);
                      props.updateCursorPosition(
                        0,
                        1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //134
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        false,
                        true,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead134(isAtLead);
                      props.updateCursorPosition(
                        -0.25 - props.cursor.radius * props.cursor.scaleX,
                        0,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        false,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead13(isAtLead);
                      props.updateCursorPosition(
                        0.5 + props.cursor.radius * props.cursor.scaleX,
                        0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }

                    //34
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead34(isAtLead);
                      props.updateCursorPosition(
                        0,
                        -1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead3(isAtLead);
                      props.updateCursorPosition(
                        -0.5 - props.cursor.radius * props.cursor.scaleX,
                        -0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //24
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead24(isAtLead);
                      props.updateCursorPosition(
                        -0.5 - props.cursor.radius * props.cursor.scaleX,
                        0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        true,
                        false,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead2(isAtLead);
                      props.updateCursorPosition(
                        0.5 + props.cursor.radius * props.cursor.scaleX,
                        1.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //45
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        false,
                        true
                      ])
                    ) {
                      props.toggleLead45(isAtLead);
                      props.updateCursorPosition(
                        0.25 + props.cursor.radius * props.cursor.scaleX,
                        -1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        true,
                        true
                      ])
                    ) {
                      props.toggleLead5(isAtLead);
                      props.updateCursorPosition(0, -3.125, 0);
                      props.transformCursorY(1);
                    }
                    //none
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLeads(isAtLead);
                      props.toggleElectrode(isAtLead);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead4(isAtLead);
                      props.updateCursorPosition(
                        0.5 + props.cursor.radius * props.cursor.scaleX,
                        -0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                      props.toggleElectrode(isAtLead);
                    }
                  }}
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
                  //onChange={props.toggleLead1}
                  onChange={isAtLead => {
                    //1234
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead234(isAtLead);
                      props.updateCursorPosition(
                        0.25 + props.cursor.radius * props.cursor.scaleX,
                        0,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        true,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead1234(isAtLead);
                      props.updateCursorPosition(
                        0,
                        0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }

                    //124
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        true,
                        false,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead124(isAtLead);
                      props.updateCursorPosition(
                        0.25 + props.cursor.radius * props.cursor.scaleX,
                        1.25,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        false,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead24(isAtLead);
                      props.updateCursorPosition(
                        -0.5 - props.cursor.radius * props.cursor.scaleX,
                        0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }

                    //134
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead134(isAtLead);
                      props.updateCursorPosition(
                        -0.25 - props.cursor.radius * props.cursor.scaleX,
                        0,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        false,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead34(isAtLead);
                      props.updateCursorPosition(
                        0,
                        -1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //012
                    if (
                      _.isEqual(props.leads.leads, [
                        true,
                        false,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead012(isAtLead);
                      props.updateCursorPosition(
                        0,
                        3.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        true,
                        true,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead02(isAtLead);
                      props.updateCursorPosition(
                        0.25 + props.cursor.radius * props.cursor.scaleX,
                        3.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }

                    //01
                    if (
                      _.isEqual(props.leads.leads, [
                        true,
                        false,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead01(isAtLead);
                      props.updateCursorPosition(
                        -0.25 - props.cursor.radius * props.cursor.scaleX,
                        3.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        true,
                        true,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead0(isAtLead);
                      props.updateCursorPosition(0, 4.625, 0);
                      props.transformCursorY(1);
                    }

                    //12
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead12(isAtLead);
                      props.updateCursorPosition(
                        0,
                        1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead2(isAtLead);
                      props.updateCursorPosition(
                        0.5 + props.cursor.radius * props.cursor.scaleX,
                        1.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //13
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead13(isAtLead);
                      props.updateCursorPosition(
                        0.5 + props.cursor.radius * props.cursor.scaleX,
                        0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        false,
                        true,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead3(isAtLead);
                      props.updateCursorPosition(
                        -0.5 - props.cursor.radius * props.cursor.scaleX,
                        -0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //none

                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLeads(isAtLead);
                      props.toggleElectrode(isAtLead);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead1(isAtLead);
                      props.updateCursorPosition(
                        -0.5 - props.cursor.radius * props.cursor.scaleX,
                        1.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                      props.toggleElectrode(isAtLead);
                    }
                  }}
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
                  //onChange={props.toggleLead2}
                  onChange={isAtLead => {
                    //1234
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead134(isAtLead);
                      props.updateCursorPosition(
                        -0.25 - props.cursor.radius * props.cursor.scaleX,
                        0,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        false,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead1234(isAtLead);
                      props.updateCursorPosition(
                        0,
                        0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }

                    //02
                    if (
                      _.isEqual(props.leads.leads, [
                        true,
                        false,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead02(isAtLead);
                      props.updateCursorPosition(
                        0.25 + props.cursor.radius * props.cursor.scaleX,
                        3.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        true,
                        false,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead0(isAtLead);
                      props.updateCursorPosition(0, 4.625, 0);
                      props.transformCursorY(1);
                    }

                    //12
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead12(isAtLead);
                      props.updateCursorPosition(
                        0,
                        1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead1(isAtLead);
                      props.updateCursorPosition(
                        -0.5 - props.cursor.radius * props.cursor.scaleX,
                        1.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //24
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead24(isAtLead);
                      props.updateCursorPosition(
                        -0.5 - props.cursor.radius * props.cursor.scaleX,
                        0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        true,
                        false,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead4(isAtLead);
                      props.updateCursorPosition(
                        0.5 + props.cursor.radius * props.cursor.scaleX,
                        -0.625,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //012
                    if (
                      _.isEqual(props.leads.leads, [
                        true,
                        true,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead012(isAtLead);
                      props.updateCursorPosition(
                        0,
                        3.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        true,
                        true,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead01(isAtLead);
                      props.updateCursorPosition(
                        -0.25 - props.cursor.radius * props.cursor.scaleX,
                        3.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }

                    //123
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        false,
                        true,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead123(isAtLead);
                      props.updateCursorPosition(
                        -0.25 - props.cursor.radius * props.cursor.scaleX,
                        1.25,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        true,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead13(isAtLead);
                    }

                    //234
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead234(isAtLead);
                      props.updateCursorPosition(
                        0.25 + props.cursor.radius * props.cursor.scaleX,
                        0,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        true,
                        true,
                        true,
                        false
                      ])
                    ) {
                      props.toggleLead34(isAtLead);
                      props.updateCursorPosition(
                        0,
                        -1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //none

                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLeads(isAtLead);
                      props.toggleElectrode(isAtLead);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead2(isAtLead);
                      props.updateCursorPosition(
                        0.5 + props.cursor.radius * props.cursor.scaleX,
                        1.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                      props.toggleElectrode(isAtLead);
                    }
                    // props.toggleLead2(isAtLead);
                  }}
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
                  //onChange={props.toggleLead0}
                  onChange={isAtLead => {
                    //012
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead012(isAtLead);
                      props.updateCursorPosition(
                        0,
                        3.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        true,
                        true,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead12(isAtLead);
                      props.updateCursorPosition(
                        0,
                        1.875,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //01
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        true,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead01(isAtLead);
                      props.updateCursorPosition(
                        -0.25 - props.cursor.radius * props.cursor.scaleX,
                        3.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        true,
                        true,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead1(isAtLead);
                      props.updateCursorPosition(
                        -0.5 - props.cursor.radius * props.cursor.scaleX,
                        1.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //02
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead02(isAtLead);
                      props.updateCursorPosition(
                        0.25 + props.cursor.radius * props.cursor.scaleX,
                        3.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(2);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        true,
                        false,
                        true,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead2(isAtLead);
                      props.updateCursorPosition(
                        0.5 + props.cursor.radius * props.cursor.scaleX,
                        1.125,
                        props.cursor.position[2]
                      );
                      props.transformCursorY(1);
                    }

                    //none

                    if (
                      _.isEqual(props.leads.leads, [
                        true,
                        false,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLeads(isAtLead);
                      props.toggleElectrode(isAtLead);
                    }
                    if (
                      _.isEqual(props.leads.leads, [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false
                      ])
                    ) {
                      props.toggleLead0(isAtLead);
                      props.updateCursorPosition(0, 4.625, 0);
                      props.transformCursorY(1);
                      props.toggleElectrode(isAtLead);
                    }
                  }}
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
            onChange={value => {
              props.updateCursorRadius(value);
            }}
          />
          {/*     Control Item: Xposition*/}
          <ControlItem
            label="Frequenz"
            value={props.cursor.frequency}
            increment={15.0}
            onChange={props.updateFrequency}
          />
          {/*     Control Item: Yposition*/}
          <ControlItem
            label="Pulsweite"
            value={props.cursor.scaleX}
            increment={0.1}
            onChange={props.transformCursorX}
          />
          <div className={theme.flexb}>
            <button onClick={() => console.log("Do somenthing")}>
              alskdfdsajl
            </button>
            <button onClick={() => console.log("Do something else!")}>
              alskdfdsajl
            </button>
          </div>
        </Controlpanel>
        <Canvas />
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => {
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

function toggleLead123(isAtLead: boolean): ToggleLead123 {
  return { type: "toggleLead123", isAtLead };
}
function toggleLead234(isAtLead: boolean): ToggleLead234 {
  return { type: "toggleLead234", isAtLead };
}
function toggleLead34(isAtLead: boolean): ToggleLead34 {
  return { type: "toggleLead34", isAtLead };
}
function toggleLead345(isAtLead: boolean): ToggleLead345 {
  return { type: "toggleLead345", isAtLead };
}
function toggleLead45(isAtLead: boolean): ToggleLead45 {
  return { type: "toggleLead45", isAtLead };
}

function toggleLead124(isAtLead: boolean): ToggleLead124 {
  return { type: "toggleLead124", isAtLead };
}
function toggleLead134(isAtLead: boolean): ToggleLead134 {
  return { type: "toggleLead134", isAtLead };
}
function toggleLead1234(isAtLead: boolean): ToggleLead1234 {
  return { type: "toggleLead1234", isAtLead };
}
function toggleLead02(isAtLead: boolean): ToggleLead02 {
  return { type: "toggleLead02", isAtLead };
}
function toggleLead12(isAtLead: boolean): ToggleLead12 {
  return { type: "toggleLead12", isAtLead };
}

function toggleLead13(isAtLead: boolean): ToggleLead13 {
  return { type: "toggleLead13", isAtLead };
}
function toggleLead24(isAtLead: boolean): ToggleLead24 {
  return { type: "toggleLead24", isAtLead };
}
function toggleLead012(isAtLead: boolean): ToggleLead012 {
  return { type: "toggleLead012", isAtLead };
}
function toggleLead01(isAtLead: boolean): ToggleLead01 {
  return { type: "toggleLead01", isAtLead };
}
function toggleLead35(isAtLead: boolean): ToggleLead35 {
  return { type: "toggleLead35", isAtLead };
}
function toggleLeads(isAtLead: boolean): ToggleLeads {
  return { type: "toggleLeads", isAtLead };
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
  toggleLead01,
  toggleLead02,
  toggleLead1,
  toggleLead012,
  toggleLead12,
  toggleLead13,
  toggleLead123,
  toggleLead124,
  toggleLead2,
  toggleLead24,
  toggleLead234,
  toggleLead3,
  toggleLead4,
  toggleLead45,
  toggleLead5,
  toggleLead134,
  toggleLead34,
  toggleLead345,
  toggleLead35,
  toggleLeads,
  toggleLead1234
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Programm);
