import * as React from 'react';
import { css } from 'emotion';

const theme = {
  root: css`
    label: Footer;
    display: flex;
    flex-flow: row nowrap;
    aligm-items: center;
    justify-content: center;

    height: 85px;

    background: rgb(93, 153, 249);
  `,
};

export interface Props {
  children?: React.ReactNode;
}

export default function Footer({ children }: Props) {
  return <div className={theme.root}>{children}</div>;
}
