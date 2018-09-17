import * as React from 'react';
import { css } from 'emotion';
import Widget from '../../components/widget';

const theme = {
  root: css`
    label: Overview;
    margin: 20 20 20 20;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    align-items: stretch;
    justify-content: stretch;

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
    <Widget headline="Widget" />
    <Widget headline="Widget" />
    <Widget headline="Widget" />
    <Widget headline="Widget" />
    <Widget headline="Widget" />
    <Widget headline="Widget" />
  </div>;
}