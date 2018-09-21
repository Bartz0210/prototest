import * as React from "react";
import { css } from "emotion";

const theme = {
  root: css`
    label: Widget;
    background-color: #eee;
    outline: 1px solid red;

    width: 314px;

    color: #2699fb;
    text-decoration: none;
  `,
  hl: css`
    font-size: 14px;
    font-weight: 200;
    width: 314px;
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
