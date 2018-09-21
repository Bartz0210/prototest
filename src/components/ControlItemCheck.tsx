import * as React from "react";
import { css } from "emotion";
import Icon from "./Icon";
import Toggle from "./Toggle";

const theme = {
  root: css`
    label: ControlItem;
    display: flex;
    flex-flow: row;
    align-items: left;
    justify-content: stretch;
    height: 40px;
    width: auto;

    border-bottom: 1px solid #333;
    text-decoration: none;
  `,
  children: css`
    margin: auto 0 auto 16;
  `
};

export interface Props {
  label: string;
  icon: string;
  checked: boolean;
  onChange(checked: boolean): void;
}

export interface State {
  value: number;
}

export default function ControlItem({ label, checked, icon, onChange }: Props) {
  return (
    <div className={theme.root}>
      <Icon className={theme.children} name={icon} size="large" />
      <Toggle className={theme.children} onChange={onChange} isOn={checked} />
      <label className={theme.children} htmlFor="control">
        {label}
      </label>
    </div>
  );
}
