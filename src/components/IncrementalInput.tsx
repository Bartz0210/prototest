import * as React from 'react';
import { css } from 'emotion';


const theme = {
  root: css`
    label: IncrementalInput;
    display: flex;
    flex-flow: row;
    align-items: center;
    
  `,
};

export interface Props {
  placeholder: number;
  
}

export default function IncrementalInput({
  placeholder
}: Props) {
  return (
        <div className={theme.root}>
            <button>-</button>
            <input id='field' type="number" value={placeholder}></input>
            <button>+</button>
        </div>
  );
}
