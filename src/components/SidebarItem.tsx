import * as React from "react";
import { css } from "emotion";

const theme = {
  root: css`
    label: ControlItem;
    display: flex;
    flex-flow: row;
    align-items: left;
    justify-content: stretch;
    height: 36px;
    width: auto;

    background: #fff;
    border-bottom: 1px solid #58aa92;

    text-decoration: none;
  `,
  item_padding: css`
    padding: 8 8 8 16;
  `,

  item_text: css`
    font-size: 16px;
    font-weight: 200;
    color: #58aa92;
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
