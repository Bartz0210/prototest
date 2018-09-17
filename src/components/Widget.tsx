import * as React from 'react';
import { css } from 'emotion';


const theme = {
  root: css`
    label: Widget;
    background-color: #fff;
    border-width: 5px;
    border-color:#BCE0FD;

    color: #2699FB;
    text-decoration: none;
  `,
  hl: css`
    font-size: 14px;
    font-weight: 200;
`,

};

export interface Props {
  headline: string;
  children?: React.ReactNode;
}

export default function Widget({
    headline,
    children
    
  }: Props) {
    return (
      <div className={theme.root}>
        <h2 className={theme.hl}>{headline}</h2>
        <div>{children}</div>
      </div>
    );
  }