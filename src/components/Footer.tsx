import * as React from 'react';
import { css } from 'emotion';

const theme = {
  root: css`
    label: Footer;
    display: flex;
    flex-flow: row nowrap;
    align-items: bottom;
    justify-content: center;

    height: 72px;

    background: #72C0A8;
  `,
};

export interface Props {
  children?: React.ReactNode;
}

export default function Footer({ children }: Props) {
  return <div className={theme.root}>{children}</div>;
}
