import * as React from "react";
import { css } from "emotion";

const theme = {
  root: css`
    label: WidgetText;

    width: 320px;
    height: 141px;

    color: #64aa95;
    text-decoration: none;

    background: rgba(255, 255, 255, 0.6);
    border-radius: 4px;
  `,

  patient: css`
    position: relative;
    top: 15;
    left: 20;
    padding-right: 8px;

    width: auto;
    color: #3d3d3d;
    opacity: 0.6;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;

    font-size: 15px;
  `,

  txt: css`
    position: relative;
    top: 32;
    left: 20;
  `,

  val: css`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    line-height: 2;
    font-size: 15px;

    color: #3d3d3d;
  `,
  cont: css`
    vertical-align: top;
  `
};

export interface Props {
  headline: string;
  programm: string;
  doctor: string;
  className?: string;
}

export default function ReportName({ headline, programm, doctor }: Props) {
  return (
    <div>
      <div className={theme.root}>
        <span className={theme.patient}>{headline}</span>
        <br />
        <div className={theme.txt}>
          <span className={theme.val}>{programm}</span>
          <br />
          <span className={theme.val}>{doctor}</span>
          <br />
        </div>
      </div>
    </div>
  );
}
