import * as React from "react";
import { css } from "emotion";
import Icon from "./Icon";
import IncrementalInput from "./IncrementalInput";

const theme = {
  root: css`
    label: ControlItem;
    display: flex;
    flex-direction: row no-wrap;
    align-items: center;
    justify-content: space-between;  
    height: 52px;
    width: 337px;

    padding: 0 12 0 41;
    
   
   
  `,
  children: css`
    
    
    float: left;


    font-weight: bold;
    
    font-size: 15px;
    color: #3D3D3D;
  `,
  inp: css`
    
    float: right;  
  `

};

export interface Props {
  className?: string;
  label: string;
  
  value: number;
  increment: number;
  onChange(value: number): void;
}

export interface State {
  value: number;
}

export default function ControlItem({
  className,
  label,
  value,
  increment,
  onChange
}: Props) {
  return (
    <div className={theme.root}>
      
      <p className={theme.children} >
        {label}
      </p>
      <IncrementalInput
        className={theme.inp}
        onChange={onChange}
        value={value}
        increment={increment}
      />
    </div>
  );
}
