import * as React from 'react';
import { css } from 'emotion';

const theme = {
  root: css`
    label: Controlpanel;
    display: flex;
    

    font-size: 16px;
    flex: 1 auto;
  `,
};

export interface Props {
    children?: React.ReactNode;
}

export default function Controlpanel({ children }: Props) {
    return <div className={theme.root}>{children}</div>;
}  