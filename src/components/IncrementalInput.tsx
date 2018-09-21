import * as React from "react";
import { css } from "emotion";

const theme = {
  root: css`
    label: IncrementalInput;
    display: flex;
    flex-flow: row;
    align-items: center;
    width: auto;
  `
};

export interface Props {
  value: number;
  increment: number;
  onChange(value: number): void;
}

export default function IncrementalInput({
  value,
  increment,
  onChange
}: Props) {
  return (
    <div className={theme.root}>
      <button onClick={() => onChange(value - increment)}>-</button>
      <input
        type="number"
        onChange={event => onChange(Number(event.currentTarget.value))}
        value={String(value)}
      />
      <button onClick={() => onChange(value + increment)}>+</button>
    </div>
  );
}
