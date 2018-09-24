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
    fill: #3d3d3d;
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
  id?: string;
  birthday?: string;
  implantSince?: string;
  modelNo?: string;
  serialNo?: string;
  firmware?: string;
  to: string;
}

export default function WidgetText({
  name,
  id,
  birthday,
  implantSince,
  modelNo,
  serialNo,
  firmware,
  to
}: Props) {
  return (
    <div className={theme.root}>
      {/* <Elektrode className={theme.illu}/>*/}

      <svg
        className={theme.illu}
        id="Ebene_1"
        data-name="Ebene 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33.69 229.18"
      >
        <title>Elektroooden-01</title>
        <path d="M16.74,1.91a14.51,14.51,0,0,0-14.5,14.5v196a14.5,14.5,0,0,0,29,0v-196A14.52,14.52,0,0,0,16.74,1.91Zm13.5,84.5H21.4v28h8.84v28.36H21.4v28h8.84v28h-27v-28h8.83v-28H3.24V114.41h8.83v-28H3.24v-28h27Zm0-56h-27v-14a13.5,13.5,0,0,1,27,0Z" />
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
