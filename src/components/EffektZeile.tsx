import * as React from "react";
import { css } from "emotion";
import Switch from "./Switch";

const theme = {
  root: css`
    label: ControlItem;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-around;
    width: 260px;
    `,
  label: css`
    font-weight: 600;
    line-height: normal;
    font-size: 15px;
    flex-basis: 130px;
    
    color: #3D3D3D;
    `,
  value: css`
    font-weight: bold;
    line-height: normal;
    font-size: 15px;
    width: 15px;
    margin-right: 7px;

    color: #58AA92;


    `,
  balken: css`
    label: ControlItem;
    display: flex;
    flex-flow: row;
    align-items: center;
    width: 105px;
    `,
  
};

export interface Props {
  name: string;
  value: number;

}


export default function EffektZeile({ name, value }: Props) {
  return (
      <div className={theme.root}>
      <div className={theme.label}>{name}</div>
      <div className={theme.value}>{value}</div>
      <div className={theme.balken}>
          <div style={{
              marginRight:2,
              width: 20,
              height: 12,
              background: value < 1? "#A9D0C5" : "#58AA92",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10
          }}></div>
          <div style={{
              marginRight:2,
              width: 20,
              height: 12,
              background: value < 2? "#A9D0C5" : "#58AA92",
              
          }}></div>
          <div style={{
              marginRight:2,
              width: 20,
              height: 12,
              background: value < 3? "#A9D0C5" : "#58AA92",
              
          }}></div>
          <div style={{
              marginRight:2,
              width: 20,
              height: 12,
              background: value < 4? "#A9D0C5" : "#58AA92",
              
          }}></div>
          <div style={{
              marginRight:2,
              width: 20,
              height: 12,
              background: value < 5? "#A9D0C5" : "#58AA92",
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10
          }}></div>
      </div>
    </div>
  );
}
