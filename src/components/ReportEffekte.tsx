import * as React from "react";
import { css } from "emotion";
import EffektZeile from "./EffektZeile";

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
    left: 30;
    display: flex;
    flex-direction: column;
    height: 346px;
    justify-content: space-evenly;
  `
};

export interface Props {
  headline: string;

  steifheit: number;
  tremor: number;
  bradykinese: number;
  gang: number;
  haltung: number;
  dystonie: number;
  gleichgewicht: number;
  stillstand: number;
  armschwingen: number;
  className?: string;
}

export default function ReportEffekte(props: Props) {
  return (
    <div>
      <div className={theme.root}>
        <span className={theme.patient}>{props.headline}</span>
        <br />

        <div className={theme.txt}>
          <EffektZeile name="Steifheit" value={props.steifheit} />
          <EffektZeile name="Tremor" value={props.tremor} />
          <EffektZeile name="Bradykinese" value={props.bradykinese} />
          <EffektZeile name="Gang" value={props.gang} />
          <EffektZeile name="Haltung" value={props.haltung} />
          <EffektZeile name="Dystonie" value={props.dystonie} />
          <EffektZeile name="Gleichgewicht" value={props.gleichgewicht} />
          <EffektZeile name="Stillstand" value={props.stillstand} />
          <EffektZeile name="Armschwingen" value={props.armschwingen} />
        </div>
      </div>
    </div>
  );
}
