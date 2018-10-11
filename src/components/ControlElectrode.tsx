import * as React from "react";
import { css } from "emotion";
import Icon from "./Icon";
import Toggle from "./Toggle";
import ControlItemCheck from "./ControlItemCheck";
import store, { RootState } from "../store";
import scene, {
  ToggleLead0,
  ToggleLead1,
  ToggleLead2,
  ToggleLead3,
  ToggleLead4,
  ToggleLead5
} from "../store/scene";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { CursorState } from "../renderer/Scene";

const theme = {
  root: css`
    label: ControlItem;
    display: grid;
    grid-template-columns: 177 37 176;
    grid-template-rows: 36 36 36 36 36 36 36 36;
    grid-gap: 0;

    align-items: left;

    height: 288px;
    width: 390px;

    border-bottom: 1px solid #333;
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
}

interface DispatchProps {
  toggleLead0(isAtLead0: boolean): void;
  toggleLead1(isAtLead1: boolean): void;
  toggleLead2(isAtLead2: boolean): void;
  toggleLead3(isAtLead3: boolean): void;
  toggleLead4(isAtLead4: boolean): void;
  toggleLead5(isAtLead5: boolean): void;
}

export interface Props {
  label?: string;
  icon?: string;
  checked5: boolean;
  checked4: boolean;
  checked3: boolean;
  checked2: boolean;
  checked1: boolean;
  checked0: boolean;
}

export interface State {
  value: number;
}

export function ControlElectrode({
  label,
  checked5,
  checked4,
  checked3,
  checked2,
  checked1,
  checked0
}: Props) {
  return (
    <div className={theme.root}>
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
          <rect x="-0.06" y="36.62" width="37" height="36" />
          <rect x="-0.06" y="108.63" width="12.5" height="36" />
          <rect x="24.43" y="108.63" width="12.5" height="36" />
          <rect x="-0.06" y="180.63" width="12.5" height="36" />
          <rect x="24.43" y="180.63" width="12.5" height="36" />
          <path d="M.4,252.63h36a.47.47,0,0,1,.47.47v17.5A18.47,18.47,0,0,1,18.4,289.06h0A18.47,18.47,0,0,1-.06,270.6v-17.5a.47.47,0,0,1,.47-.47Z" />
        </svg>
      </div>
      <div style={{ gridColumn: "1", gridRow: "1" }} />
      <div style={{ gridColumn: "3", gridRow: "1" }} />
      <div style={{ gridColumn: "1", gridRow: "2", background: "#dadada" }} />
      <div style={{ gridColumn: "3", gridRow: "2", background: "#dadada" }} />
      <div style={{ gridColumn: "1", gridRow: "3" }} />
      <div style={{ gridColumn: "3", gridRow: "3" }} />
      <div style={{ gridColumn: "1", gridRow: "4", background: "#dadada" }} />
      <div style={{ gridColumn: "3", gridRow: "4", background: "#dadada" }} />
      <div style={{ gridColumn: "1", gridRow: "5" }} />
      <div style={{ gridColumn: "3", gridRow: "5" }} />
      <div style={{ gridColumn: "1", gridRow: "6", background: "#dadada" }} />
      <div style={{ gridColumn: "3", gridRow: "6", background: "#dadada" }} />
      <div style={{ gridColumn: "1", gridRow: "7" }} />
      <div style={{ gridColumn: "3", gridRow: "7" }} />
      <div style={{ gridColumn: "1", gridRow: "8", background: "#dadada" }} />
      <div style={{ gridColumn: "2", gridRow: "8", background: "#dadada" }} />
      <div style={{ gridColumn: "3", gridRow: "8", background: "#dadada" }} />
    </div>
  );
}
