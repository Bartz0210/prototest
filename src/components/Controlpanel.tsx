import * as React from "react";
import { css } from "emotion";

const theme = {
  root: css`
    label: Controlpanel;
    left: 0;
    display: grid;
    grid-gap: 0;
    align-items: left;
    font-size: 16px;
   
    
    background: #f0f0f0;
    width: 390;
    height: 641;
  `
};

export interface Props {
  children?: React.ReactNode;
}

export default function Controlpanel({ children }: Props) {
  return <div className={theme.root}>{children}</div>;
}
