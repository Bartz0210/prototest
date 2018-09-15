import * as React from 'react';
import { css } from 'emotion';
import Icon from './Icon';

const theme = {
  root: css`
    label: Header;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    height: 75px;
    padding: 25px 10px 0 10px;

    background: rgb(93, 153, 249);

    color: #fff;
    font-weight: bold;
  `,
  caption: css`
    flex: 1;
    text-align: center;
    text-transform: uppercase;
  `,
  percent: css``,
  back: css`
    cursor: pointer;
  `,
};

export interface Props {
  children?: React.ReactNode;
}

export default function Header({ children }: Props) {
  return (
    <div className={theme.root}>
      <Icon
        className={theme.back}
        name="arrow_back"
        size="large"
        onClick={() => window.history.back()}
      />
      <div className={theme.caption}>{children}</div>
      <div className={theme.percent}>97%</div>
      <Icon name="battery_charging_full" size="large" />
    </div>
  );
}
