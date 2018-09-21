import * as React from "react";
import { css } from "emotion";
import Icon from "./Icon";
import IncrementalInput from "./IncrementalInput";

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
  className?: string;
  label: string;
  icon: string;
  value: number;
  increment: number;
  onChange(value: number): void;
}

export interface State {
  value: number;
}

export default function ControlItem({
  className,
  label,
  value,
  increment,
  icon,
  onChange
}: Props) {
  return (
    <div className={theme.root}>
      <Icon className={theme.children} name={icon} size="large" />
      <label className={theme.children} htmlFor="control">
        {label}
      </label>
      <IncrementalInput
        onChange={onChange}
        value={value}
        increment={increment}
      />
    </div>
  );
}
