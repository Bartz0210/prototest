import * as React from "react";
import { css } from "emotion";

const theme = {
  root: css`
    label: WidgetText;

    width: 320px;
    height: 453px;

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
    width: 280;
    top: 32;
    left: 20;
  `,

  val: css`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    line-height: 2;
    font-size: 15px;

    float: right;

    color: #3d3d3d;
  `,

  lbl: css`
    font-style: normal;
    font-weight: 600;

    font-size: 15px;

    color: #000000;
    opacity: 0.5;

    line-height: 2;
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

export default function ReportEffekte(props: Props) {
  return (
    <div>
      <div className={theme.root}>
        <span className={theme.patient}>{props.headline}</span>
        <br />
        <div className={theme.txt}>
          <span className={theme.lbl}>Steifheit </span>
          <span className={theme.val}>3</span>
          <br />
          <span className={theme.lbl}>Tremor </span>
          <span className={theme.val}>4</span>
          <br />
          <span className={theme.lbl}>Bradykinese</span>
          <span className={theme.val}>3</span>
          <br />
          <span className={theme.lbl}>Gang </span>
          <span className={theme.val}>3</span>
          <br />
          <span className={theme.lbl}>Haltung </span>
          <span className={theme.val}>5</span>
          <br />
          <span className={theme.lbl}>Dystonie </span>
          <span className={theme.val}>4</span>
          <br />
          <span className={theme.lbl}>Gleichgewicht </span>
          <span className={theme.val}>4</span>
          <br />
          <span className={theme.lbl}>Stillstand </span>
          <span className={theme.val}>4</span>
          <br />
          <span className={theme.lbl}>Armschwingen </span>
          <span className={theme.val}>4</span>
          <br />
        </div>
      </div>
    </div>
  );
}
