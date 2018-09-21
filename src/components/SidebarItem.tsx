import * as React from "react";
import { css } from "emotion";
import Icon from "./Icon";
import IncrementalInput from "./IncrementalInput";
import { NavLink } from "react-router-dom";

const theme = {
  root: css`
    label: ControlItem;
    display: flex;
    flex-flow: row;
    align-items: left;
    justify-content: stretch;
    height: 40px;
    width: auto;

    background: #f1f9ff;
    border-bottom: 1px solid #2699fb;

    text-decoration: none;
  `,
  item_padding: css`
    padding: 8 8 8 16;
  `,

  item_text: css`
    font-size: 16px;
    font-weight: 200;
    color: #2699fb;
  `
};

export interface Props {
  label: string;
}

export default function ControlItem({ label }: Props) {
  return (
    <div className={theme.root}>
      <div className={theme.item_padding}>
        <span className={theme.item_text}>{label}</span>
      </div>
    </div>
  );
}
