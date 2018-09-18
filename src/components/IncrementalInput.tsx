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
    value: number;
    onChange(value: number): void;
  
}

export interface State {
    rawValue?: string;
}


 export default function IncrementalInput({
   value,
    onChange
 }: Props) {
    
   return (
         <div className={theme.root}>
             <button onClick={() => onChange(value-1) } >-</button>
             <input type="number" onChange={event => onChange(Number(event.currentTarget.value))} value={String(value)}></input>
             <button  onClick={() => onChange(value+1) }>+</button>
         </div>
   );
 }