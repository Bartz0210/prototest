import * as React from "react";
import * as numeral from "numeral";
import { css } from "emotion";

const theme = {
  root: css`
    label: IncrementalInput;
    display: flex;
    flex-flow: row;
    align-items: center;
    width: 160px;
  `,
  buttonlft: css`
    width: 40px;
    height: 40px;
    background:#72C0A8;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: none;
    color: #fff;
    font-size: 32px;
    font-weight: normal;
  `,
  buttonrght: css`
  width: 40px;
  height: 40px;
  background:#72C0A8;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  color: #fff;
  font-size: 32px;
  font-weight: normal;
  `,
  input: css`
    width: 80px;
    height: 40px;

    font-style: normal;
    font-weight: 600;

    font-size: 15px;
    text-align: center;
    border: none;
    color:#3d3d3d;
  `
};

export interface Props {
  className?: string;
  value: number;
  increment: number;
  onChange(value: number): void;
}

export default function IncrementalInput({
  className,
  value,
  increment,
  onChange
}: Props) {
  return (
    <div className={theme.root}>
      <button
        className={theme.buttonlft}
        onClick={() => onChange(value - increment)}
      >
        -
      </button>
      <input
        className={theme.input}
        type="number"
        onChange={event =>
          onChange(Number(event.currentTarget.value))
        }
        value={String(Math.round(value*100)/100)}
      />
      <button
        className={theme.buttonrght}
        onClick={() => onChange(value + increment)}
      >
        +
      </button>
    </div>
  );
}
