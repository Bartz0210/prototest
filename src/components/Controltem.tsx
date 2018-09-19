import * as React from "react";
import { css } from "emotion";
import Icon from "./Icon";
import IncrementalInput from "./IncrementalInput";

const theme = {
  root: css`
    label: ControlItem;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;

    width: auto;

    color: #333;
    text-decoration: none;
  `,
  active: css`
    background: rgba(0, 0, 0, 0.1);
  `,
  caption: css`
    padding-top: 5px;
  `
};

export interface Props {
  label: string;
  icon: string;
  value: number;
  onChange(value: number): void;
}

export interface State {
  value: number;
}

export default function ControlItem({ label, value, icon, onChange }: Props) {
  return (
    <div className={theme.root}>
      <Icon name={icon} size="large" />
      <label htmlFor="control">{label}</label>
      <IncrementalInput onChange={onChange} value={value} />
    </div>
  );
}
