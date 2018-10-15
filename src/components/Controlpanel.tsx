import * as React from "react";
import { css } from "emotion";

const theme = {
  root: css`
    label: Controlpanel;
    left: 0;
    display: grid;
    grid-gap: 16px;
    align-items: left;
    font-size: 16px;

    background: #f0f0f0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 390px;
  `
};

export interface Props {
  children?: React.ReactNode;
}

export default function Controlpanel({ children }: Props) {
  return <div className={theme.root}>{children}</div>;
}
