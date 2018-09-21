import * as React from "react";
import { css } from "emotion";

const theme = {
  root: css`
    label: Controlpanel;
    display: grid;
    align-items: left;
    font-size: 16px;
    flex: 1 auto;
    padding: 8 8 8 8;
    background: #f6f6f6;
  `
};

export interface Props {
  children?: React.ReactNode;
}

export default function Controlpanel({ children }: Props) {
  return <div className={theme.root}>{children}</div>;
}
