import * as React from "react";
import * as numeral from "numeral";
import { css } from "emotion";

const theme = {
  root: css`
    label: IncrementalInput;
    display: flex;
    flex-flow: row;
    align-items: center;
    width: auto;
  `,
  button: css`
    width: 36px;
    height: 36px;
  `,
  input: css`
    width: 108px;
    height: 36px;
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
      <button
        className={theme.button}
        onClick={() => onChange(value - increment)}
      >
        -
      </button>
      <input
        className={theme.input}
        type="number"
        onChange={event =>
          onChange(Number(numeral(event.currentTarget.value).format("0.0")))
        }
        value={String(value)}
      />
      <button
        className={theme.button}
        onClick={() => onChange(value + increment)}
      >
        +
      </button>
    </div>
  );
}
