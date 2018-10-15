import * as React from "react";
import { css } from "emotion";
import { NavLink } from "react-router-dom";
import Leistung from "../components/Leistung";

const theme = {
  hl: css`
    position: relative;
    top: 15;
    left: 20;

    width: 320;
    color: #3d3d3d;
    opacity: 0.6;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;

    font-size: 15px;
  `,
  root: css`
    width: 655px;
    height: 297px;

    background: rgba(255, 255, 255, 0.6);
    border-radius: 4px;
  `,
  flexb: css`
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;
    top: 32px;

    width: 320px;
    height: 300px;

    color: #3d3d3d;
    text-decoration: none;
  `,

  illu: css`
    width: 35px;
    fill: none;
    margin-left: 30px;
  `,
  txt: css`
    float: right;
    padding-left: 30px;
    padding-right: 30px;
    width: auto;
  `,
  lbl: css`
    font-style: normal;
    font-weight: 600;

    font-size: 15px;

    color: #3d3d3d;

    line-height: 2;
  `,
  val: css`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    line-height: 2;
    font-size: 15px;
    text-align: right;

    margin-left: 32px;

    float: right;
    color: #3d3d3d;
  `
};

export interface Props {
  className?: string;
  headline: string;
  amplitude: string | number;
  pulsweite: string | number;
  frequenz: string | number;
  pCase: number;
  pLead0: number;
  pLead1: number;
  pLead2: number;
  pLead3: number;
  pLead4: number;
  pLead5: number;

  lead5: boolean;
  lead4: boolean;
  lead3: boolean;
  lead2: boolean;
  lead1: boolean;
  lead0: boolean;
}

export default function ReportElectrode({
  headline,
  amplitude,
  pulsweite,
  frequenz,
  pCase,
  pLead0,
  pLead1,
  pLead2,
  pLead3,
  pLead4,
  pLead5,
  lead5,
  lead4,
  lead3,
  lead2,
  lead1,
  lead0
}: Props) {
  return (
    <div className={theme.root}>
      <div className={theme.hl}>{headline}</div>
      <div className={theme.flexb}>
        <svg
          className={theme.illu}
          id="Ebene_1"
          data-name="Ebene 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.69 229.18"
        >
          <title>elektrode</title>
          <rect
            fill="none"
            stroke="#3d3d3d"
            strokeWidth="1px"
            x="2.73"
            y="2.41"
            width="28"
            height="224"
            rx="14"
            ry="14"
          />
          <rect
            fill={lead5 ? "#72C0A8" : "#3d3d3d"}
            x="2.73"
            y="30.41"
            width="28"
            height="28"
          />
          <rect
            fill={lead3 ? "#72C0A8" : "#3d3d3d"}
            x="2.73"
            y="86.41"
            width="9.33"
            height="28"
          />
          <rect
            fill={lead4 ? "#72C0A8" : "#3d3d3d"}
            x="21.4"
            y="86.41"
            width="9.33"
            height="28"
          />
          <rect
            fill={lead1 ? "#72C0A8" : "#3d3d3d"}
            x="2.73"
            y="142.77"
            width="9.33"
            height="28"
          />
          <rect
            fill={lead2 ? "#72C0A8" : "#3d3d3d"}
            x="21.4"
            y="142.77"
            width="9.33"
            height="28"
          />
          <path
            fill={lead0 ? "#72C0A8" : "#3d3d3d"}
            d="M2.73,198.77h28a0,0,0,0,1,0,0v14a14,14,0,0,1-14,14h0a14,14,0,0,1-14-14v-14a0,0,0,0,1,0,0Z"
          />
        </svg>

        <div className={theme.txt}>
          <span className={theme.lbl}>Total Amplitude </span>
          <span className={theme.val}>{amplitude}</span>
          <br />
          <span className={theme.lbl}>Pulsweite(μs) </span>
          <span className={theme.val}>{pulsweite}</span>
          <br />
          <span className={theme.lbl}>Frequenz (Hz) </span>
          <span className={theme.val}>{frequenz}</span>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          left: 96,
          top: -120,
          width: 300
        }}
      >
        <Leistung
          pCase={pCase}
          pLead0={pLead0}
          pLead1={pLead1}
          pLead2={pLead2}
          pLead3={pLead3}
          pLead4={pLead4}
          pLead5={pLead5}
        />
      </div>
    </div>
  );
}
