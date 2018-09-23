import * as React from 'react';
import { css } from 'emotion';
import Widget from '../../components/widget';
import WidgetPic from '../../components/WidegtPic';
import WidgetText from '../../components/WidgetText';
import WidgetTextBulltes from '../../components/WidgetTextBulltes';
import WidgetElektrode from '../../components/WidgetElektrode';

const theme = {
  root: css`
    label: Overview;
    margin: 14 17 13 17;
    display: grid;
    grid-template-columns: 320 320 320;
    grid-template-rows: 300 300;
    grid-gap: 15px;
    align-items: stretch;
    justify-content: stretch;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

   `,
};

export default function Overview() {
  return <div className={theme.root}>
    <Widget headline="Widget">
      <WidgetPic picture="Profilepicture.png" />
    </Widget>
    <Widget headline="Patient">
      <WidgetText name="Max Mustermann" id="123-456-789" birthday="23-11-1954" implantSince="11-06-2003" modelNo="DBS123-56" serialNo="234-56" firmware="V0.454545"/>
    </Widget>
    <Widget headline="Symptome">
      <WidgetTextBulltes id="- Tremor" birthday="- Rigor" implantSince="- Akinese" />
    </Widget>
    <Widget headline="Lokalisation">
      <WidgetPic picture="Bild1.jpg" />
    </Widget>
    <Widget headline="Linke Elektrode">
      <WidgetElektrode id="1.5" birthday="60" implantSince="130" to="/programm" />
    </Widget>
    <Widget headline="Rechte Elektrode">
      <WidgetElektrode id="1.5" birthday="60" implantSince="130" to="/programm" />
    </Widget>
  </div>;
}