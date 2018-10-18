import * as React from "react";
import { css } from "emotion";

const theme = {
  root: css`
    label: Widget;

    width: 320px;
    height: 284px;

    background: rgba(255, 255, 255, 0.6);
    border-radius: 4px;

    color: #2699fb;
    text-decoration: none;
  `,
  hl: css`
    /* Patient */

    position: relative;
    width: 244px;
    z-index: 1;

    left: 20px;
    top: 0;

    text-align: left;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 15px;

    color: #3d3d3d;
    opacity: 0.6;
  `
};

export interface Props {
  headline: string;
  children?: React.ReactNode;
}

export default function Widget({ headline, children }: Props) {
  return (
    <div className={theme.root}>
      <h2 className={theme.hl}>{headline}</h2>
      <div>{children}</div>
    </div>
  );
}
