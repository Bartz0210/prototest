import * as React from "react";
import { css } from "emotion";
import Icon from "./Icon";

const theme = {
  root: css`
    label: Header;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    height: 56px;
    padding: auto 16px 0 16px;

    background: #72c0a8;

    color: #fff;
    font-weight: bold;
  `,
  caption: css`
    flex: 1;
    text-align: center;

    font-weight: normal;
    font-size: 18px;
  `,
  percent: css`
    margin-right: 8px;
    display: inline;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
  `,
  back: css`
    cursor: pointer;
    padding-left: 16px;
    display: row
    align-items: center;
  `,
  battery: css`
  cursor: pointer;
  padding-bottom: 8px;
  padding-top: 8px;
  margin-right: 16px;
  display: row
  align-items: center;
  transform: rotateZ(-90deg);
`
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
        size="medium"
        onClick={() => window.history.back()}
      />
      <div className={theme.caption}>{children}</div>
      <div className={theme.percent}> 97%</div>
      <Icon
        className={theme.battery}
        name="battery_charging_full"
        size="medium"
      />
    </div>
  );
}
