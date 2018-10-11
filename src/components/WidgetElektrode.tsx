import * as React from "react";
import { css } from "emotion";
import { NavLink } from "react-router-dom";

const theme = {
  root: css`
    label: something;
    display: flex;
    flex-flow: row;
    align-items: center;

    position: relative;
    top: -24;

    width: 320px;
    height: 300px;

    color: #64aa95;
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

    color: #000000;
    opacity: 0.5;

    line-height: 2;
  `,
  val: css`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    line-height: 2;
    font-size: 15px;
    text-align: right;

    float: right;
    color: #3d3d3d;
  `,

  btn: css`
    background: linear-gradient(to bottom, #94cfbd, #72c0a8);
    border-radius: 4px;
    height: 50;
    width: 201;
    margin-top: 50;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;

    font-size: 15px;
    text-align: center;
    color: #ffffff;
    outline: 0;
    border: none;
    text-decoration: none;
  `,
  nav: css`
    text-decoration: none;
  `,

  caption: css`
    margin: auto auto auto auto;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;

    font-size: 15px;
    text-align: center;
    color: #ffffff;
    outline: 0;
    border: none;
  `
};

export interface Props {
  name?: string;
  id?: string | number;
  birthday?: string | number;
  implantSince?: string | number;
  to: string;

  lead5: boolean;
  lead4: boolean;
  lead3: boolean;
  lead2: boolean;
  lead1: boolean;
  lead0: boolean;
}

export default function WidgetText({
  id,
  birthday,
  implantSince,
  to,
  lead5,
  lead4,
  lead3,
  lead2,
  lead1,
  lead0
}: Props) {
  return (
    <div className={theme.root}>
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
        <span className={theme.val}>{id}</span>
        <br />
        <span className={theme.lbl}>Pulsweite(μs) </span>
        <span className={theme.val}>{birthday}</span>
        <br />
        <span className={theme.lbl}>Frequenz (Hz) </span>
        <span className={theme.val}>{implantSince}</span>
        <br />
        <div className={theme.btn}>
          <NavLink className={theme.nav} type="button" to={to}>
            <div className={theme.caption}>Programmierung</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
