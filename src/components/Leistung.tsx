import * as React from "react";
import { css } from "emotion";

const theme = {
  wurz: css`
    width: 300;
  `,
  hl: css`
    font-weight: bold;
    line-height: normal;
    font-size: 15px;
    margin-bottom: 15px;
    width: 300;

    color: #3d3d3d;
  `,
  root: css`
    width: 20;
    label: Leistung;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,
  begin: css`
    width: 64px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    font-weight: normal;
    line-height: normal;
    font-size: 15px;

    color: #3d3d3d;
  `,

  cell: css`
    width: 64px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-left: 1px solid #3d3d3d;
    font-weight: normal;
    line-height: normal;
    font-size: 15px;

    color: #3d3d3d;
  `
};

export interface Props {
  style?: String;
  pCase: number;
  pLead0: number;
  pLead1: number;
  pLead2: number;
  pLead3: number;
  pLead4: number;
  pLead5: number;
}

export default function Leistung(props: Props) {
  return (
    <div className={theme.wurz}>
      <div className={theme.hl}>Leistung</div>
      <div className={theme.root}>
        <div className={theme.begin}>
          <div
            style={{
              paddingLeft: 8,
              paddingRight: 8
            }}
          >
            Case
          </div>
          <div
            style={{
              float: "left",
              textAlign: "left",
              fontWeight: 600,
              paddingLeft: 8,
              color: props.pCase < 0 ? "#FF4D00" : "#3d3d3d"
            }}
          >
            {props.pCase}%
          </div>
        </div>
        <div className={theme.cell}>
          <div
            style={{
              paddingLeft: 8,
              paddingRight: 8
            }}
          >
            Lead0
          </div>
          <div
            style={{
              float: "left",
              textAlign: "left",
              fontWeight: 600,
              paddingLeft: 8,
              color: props.pLead0 < 0 ? "#FF4D00" : "#3d3d3d"
            }}
          >
            {props.pLead0}%
          </div>
        </div>
        <div className={theme.cell}>
          <div
            style={{
              paddingLeft: 8,
              paddingRight: 8
            }}
          >
            Lead1
          </div>
          <div
            style={{
              float: "left",
              textAlign: "left",
              fontWeight: 600,
              paddingLeft: 8,
              color: props.pLead1 < 0 ? "#FF4D00" : "#3d3d3d"
            }}
          >
            {props.pLead1}%
          </div>
        </div>
        <div className={theme.cell}>
          <div
            style={{
              paddingLeft: 8,
              paddingRight: 8
            }}
          >
            Lead2
          </div>
          <div
            style={{
              float: "left",
              textAlign: "left",
              fontWeight: 600,
              paddingLeft: 8,
              color: props.pLead2 < 0 ? "#FF4D00" : "#3d3d3d"
            }}
          >
            {props.pLead2}%
          </div>
        </div>
        <div className={theme.cell}>
          <div
            style={{
              paddingLeft: 8,
              paddingRight: 8
            }}
          >
            Lead3
          </div>
          <div
            style={{
              float: "left",
              textAlign: "left",
              fontWeight: 600,
              paddingLeft: 8,
              color: props.pLead3 < 0 ? "#FF4D00" : "#3d3d3d"
            }}
          >
            {props.pLead3}%
          </div>
        </div>
        <div className={theme.cell}>
          <div
            style={{
              paddingLeft: 8,
              paddingRight: 8
            }}
          >
            Lead4
          </div>
          <div
            style={{
              float: "left",
              textAlign: "left",
              fontWeight: 600,
              paddingLeft: 8,
              color: props.pLead4 < 0 ? "#FF4D00" : "#3d3d3d"
            }}
          >
            {props.pLead4}%
          </div>
        </div>
        <div className={theme.cell}>
          <div
            style={{
              paddingLeft: 8,
              paddingRight: 8
            }}
          >
            Lead5
          </div>
          <div
            style={{
              float: "left",
              textAlign: "left",
              fontWeight: 600,
              paddingLeft: 8,
              color: props.pLead5 < 0 ? "#FF4D00" : "#3d3d3d"
            }}
          >
            {props.pLead5}%
          </div>
        </div>
      </div>
    </div>
  );
}
