import * as React from "react";
import { css } from "emotion";
import Toggle from "./Toggle";

const theme = {
  root: css`
    label: ControlItem;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-around ;
    height: 36px;
    width: auto;

    text-decoration: none;
  `,
  children: css`
   margin-left: 16px;
  `
};

export interface Props {
  label: string;
  style?: string;
  checked: boolean;

  onChange(checked: boolean): void;
}

export interface State {
  value: number;
}

export default function ControlItem({ label, checked, onChange }: Props) {
  return (
    <div className={theme.root}>
      <Toggle className={theme.children} onChange={onChange} isOn={checked} />
      <label className={theme.children} htmlFor="control">
        {label}
      </label>
    </div>
  );
}
