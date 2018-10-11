import * as React from "react";
import { css } from "emotion";
import ControlItem from "./ControlItemSwitch";

const theme = {
  root: css`
    label: Widget;

    width: 320px;
    height: 300px;

    background: rgba(255, 255, 255, 0.6);
    border-radius: 4px;

    color: #3d3d3d;
    text-decoration: none;
  `,
  container: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
  `,
  hl: css`
    /* Patient */

    position: relative;
    width: auto;
    z-index: 1;

    left: 20px;
    top: 0;

    text-align: left;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 15px;

    color: #3d3d3d;
    opacity: 0.6;
  `
};

export interface Props {
  headline: string;
  checked: boolean;
  children?: React.ReactNode;

  onChange(checked: boolean): void;
}

export default function Widget({
  headline,
  children,
  checked,
  onChange
}: Props) {
  return (
    <div
      className={theme.root}
      style={{
        background: checked
          ? "rgba(255, 255, 255, 0.6)"
          : "rgba(255, 255, 255, 0.2)"
      }}
    >
      <div className={theme.container}>
        <h2 className={theme.hl}>{headline}</h2>
        <ControlItem checked={checked} onChange={onChange} />
      </div>
      <div>{children}</div>
    </div>
  );
}
