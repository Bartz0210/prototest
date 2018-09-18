import * as React from 'react';
import { css } from 'emotion';
import Widget from '../../components/widget';
import WidgetPic from '../../components/WidegtPic';
import WidgetText from '../../components/WidgetText';

const theme = {
  root: css`
    label: Overview;
    margin: 20 20 20 20;
    display: grid;
    grid-template-columns: 314 314 314;
    grid-template-rows: 261 261;
    grid-gap: 20px;
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
    <Widget headline="Widget">
      <WidgetText name="Max Mustermann" id="123-456-789" birthday="23-11-1954" implantSince="11-06-2003" modelNo="DBS123-56" serialNo="234-56" firmware="V0.454545"/>
    </Widget>
    <Widget headline="Widget" />
    <Widget headline="Lokalisation">
      <WidgetPic picture="Bild1.jpg" />
    </Widget>
    <Widget headline="Widget" />
    <Widget headline="Widget" />
  </div>;
}