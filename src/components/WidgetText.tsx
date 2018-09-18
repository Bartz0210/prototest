import * as React from 'react';
import { css } from 'emotion';


const theme = {
  root: css`
    label: WidgetPic;
    background-color: #333;
    border-width: 5px;
    border-color:#333;
    width: 314px;
    height: 210px;

    color: #2699FB;
    text-decoration: none;
  `,
  txt: css`
    padding-left: 8px;
    padding-right: 8px;
    width: 157px;  
  `,
  lbl: css`
    font-size: 14px;
    font-weight: 200;
    text-align: left; 
  `,
  val: css`
    font-size: 14px;
    text-align: right; 
    font-weight: 500; 
`,
 

};

export interface Props {
  name: string;
  id: string;
  birthday: string;
  implantSince: string;
  modelNo: string;
  serialNo: string;
  firmware: string;
  }

export default function WidgetText({
  name,
  id,
  birthday,
  implantSince,
  modelNo,
  serialNo,
  firmware
    
  }: Props) {
    return (
    <div>
      <div className={theme.txt}>
        <span className={theme.lbl}>Patient </span><span className={theme.val}>{name}</span><br/>
        <span className={theme.lbl}>ID </span><span className={theme.val}>{id}</span><br/>
        <span className={theme.lbl}>Geburtstag </span><span className={theme.val}>{birthday}</span><br/>
        <span className={theme.lbl}>Implantat seit </span><span className={theme.val}>{implantSince}</span><br/>
        <span className={theme.lbl}>Model-Nr. </span><span className={theme.val}>{modelNo}</span><br/>
        <span className={theme.lbl}>Serial-Nr. </span><span className={theme.val}>{serialNo}</span><br/>
        <span className={theme.lbl}>Firmware </span><span className={theme.val}>{firmware}</span><br/>
      </div>
    </div>  
    );
  }