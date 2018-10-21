import * as React from "react";
import { css } from "emotion";
import EffektZeile from './EffektZeile';

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
  `,

  

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
        <EffektZeile name="Steifheit" value={2} />
        <EffektZeile name="Tremor" value={3} />
        <EffektZeile name="Bradykinese" value={4} />
        <EffektZeile name="Gang" value={5} />
        <EffektZeile name="Haltung" value={3} />
        <EffektZeile name="Dystonie" value={1} />
        <EffektZeile name="Gleichgewicht" value={2} />
        <EffektZeile name="Stillstand" value={4} />
        <EffektZeile name="Armschwingen" value={5} />
        </div>
      </div>
    </div>
  );
}
