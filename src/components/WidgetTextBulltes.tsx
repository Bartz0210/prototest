import * as React from "react";
import { css } from "emotion";
import { NavLink } from "react-router-dom";

const theme = {
  root: css`
    label: WidgetText;

    position: relative;
    top: -12;

    width: 320px;
    height: 300px;
    vertical-align: top;

    color: #64aa95;
    text-decoration: none;
  `,

  patient: css`
    margin: 38 0 0 20;
    padding-right: 8px;
    width: auto;
    color: #64aa95;

    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;

    font-size: 18px;
  `,

  txt: css`
    margin-top: 30px;
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

    color: #3d3d3d;
  `,

  btn: css`
    background: linear-gradient(to bottom, #94cfbd, #72c0a8);
    border-radius: 4px;
    height: 50;
    width: 258;

    position: relative;
    top: 24px;
    left: 33px;

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

export default function WidgetTextBulltes({
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
    <div>
      <div className={theme.root}>
        <span className={theme.patient}>{name}</span>
        <br />
        <div className={theme.txt}>
          <span className={theme.val}>{id}</span>
          <br />
          <span className={theme.val}>{birthday}</span>
          <br />
          <span className={theme.val}>{implantSince}</span>
        </div>
        <div className={theme.btn}>
          <NavLink className={theme.nav} type="button" to={to}>
            <div className={theme.caption}>Reports</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
