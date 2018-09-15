import * as React from 'react';
import { css } from 'emotion';

const theme = {
  root: css`
    label: Overview;
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

export default function Overview() {
  return <div className={theme.root}>
    <div>
      <ul>
      <li>zeug</li>
      <li>das</li>
      <li>hier</li>
      <li>stehen</li>
      <li>könnte</li>
      <li>ist</li>
      <li>das</li>
      <li>hier</li>
      </ul>
    </div>
    <div>
      <ul>
      <li>zeug</li>
      <li>das</li>
      <li>hier</li>
      <li>stehen</li>
      <li>könnte</li>
      <li>ist</li>
      <li>das</li>
      <li>hier</li>
      </ul>
    </div>
  </div>;
}