import * as React from "react";
import { css } from "emotion";
import Icon from "./Icon";
import Switch from "./Switch";

const theme = {
  root: css`
    label: ControlItem;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: stretch;
    height: 36px;
    width: auto;

    text-decoration: none;
  `,
  children: css`
    margin: auto 0 auto 16;
  `
};

export interface Props {
 
  style?: string;
  checked: boolean;

  onChange(checked: boolean): void;
}

export interface State {
  value: number;
}

export default function ControlItem({  checked, onChange }: Props) {
  return (
    <div className={theme.root}>
      <Switch className={theme.children} onChange={onChange} isOn={checked} />
      <label className={theme.children} htmlFor="control">
        {checked? "ON": "OFF"}
      </label>
    </div>
  );
}
