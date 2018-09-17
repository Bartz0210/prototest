import * as React from 'react';
import { css } from 'emotion';


const theme = {
  root: css`
    label: Widget;
    background-color: #f18973;
    color: #333;
    text-decoration: none;
  `,

};

export interface Props {
  headline: string;
}

export default function Widget({
    headline
    
  }: Props) {
    return (
      <div className={theme.root}>
        <h2>{headline}</h2> 
    </div>
    );
  }