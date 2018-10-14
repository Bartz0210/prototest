import * as React from "react";
import { css } from "emotion";

const theme = {
  root: css`
    label: ControlItem;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    height: 56px;
    width: auto;

    text-decoration: none;
  `,
  item_padding: css`
    padding: 8 8 8 40;
  `,

  item_text: css`
    font-size: 15px;
    font-weight: normal;
    color: #3d3d3d;
  `
};

export interface Props {
  label: string;
  even: boolean;
}

export default function ControlItem(props: Props) {
  return (
    <div className={theme.root}
      style={{
        background: props.even? "#fff" : "none"
      }}>
      <div className={theme.item_padding}>
        <span className={theme.item_text}>{props.label}</span>
      </div>
    </div>
  );
}
