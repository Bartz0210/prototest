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
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
    padding: 8 8 8 40;
  `,
  active: css`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
    width: 300px;
    height: 40px;
    padding: 8 8 8 40;
    background: #58AA92;
  `,
  item_text_active: css`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
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
  active?: boolean;
}

export default function ControlItem(props: Props) {
  return (
    <div className={theme.root}
      style={{
        background: props.even? "#fff" : "none",
      }}>
      <div className={props.active? theme.active : theme.item_padding }>
        <span className={props.active? theme.item_text_active: theme.item_text}>{props.label}</span>
      </div>
    </div>
  );
}
