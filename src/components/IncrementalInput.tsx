import * as React from "react";
import { css } from "emotion";

const theme = {
  root: css`
    label: IncrementalInput;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    width: 140px;
    margin-right: 24px;
  `,
  buttonlft: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    max-width: 40px;
    height: 40px;
    background: linear-gradient(to bottom, #72c0a8, #5b9986);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: none;
    color: #fff;
    font-size: 22px;
    font-weight: normal;
  `,
  buttonrght: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    max-width: 40px;
    height: 40px;
    background: linear-gradient(to bottom, #72c0a8, #5b9986);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: none;
    color: #fff;
    font-size: 22px;
    font-weight: normal;
  `,
  inpu: css`
    width: 80px;
    height: 40px;
    flex: 2 auto;
    font-style: normal;
    font-weight: 600;

    font-size: 15px;
    text-align: center;
    border: none;
    color: #3d3d3d;
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
  // console.log("IncrementalInput value", value);

  return (
    <div className={theme.root}>
      <button
        className={theme.buttonlft}
        onClick={() => onChange(value - increment)}
      >
        <span>-</span>
      </button>
      <input
        className={theme.inpu}
        type="number"
        onChange={event => onChange(Number(event.currentTarget.value))}
        value={String(Math.round(value * 100) / 100)}
      />
      <button
        className={theme.buttonrght}
        onClick={() => onChange(value + increment)}
      >
        <span>+</span>
      </button>
    </div>
  );
}
