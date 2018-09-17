import * as React from 'react';
import { css } from 'emotion';
import Canvas from '../../components/Canvas';
import Controlpanel from '../../components/Controlpanel';
import ControlItem from '../../components/Controltem';

const theme = {
  root: css`
    label: Programm;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    font-size: 32px;
  `,
};

export default function Programm() {
  return (
    <div className={theme.root}>
      <Controlpanel>
        <ControlItem label="something" placeholder={17} icon="settings"/> 
      </Controlpanel>
      <Canvas />
    </div>
  );
}
