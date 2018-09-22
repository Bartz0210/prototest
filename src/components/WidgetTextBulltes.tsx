import * as React from 'react';
import { css } from 'emotion';


const theme = {
  root: css`
    label: WidgetText;
    
    position: relative;
    top: -12;

    width: 320px;
    height: 300px;
    vertical-align: top;

    color: #64AA95;
    text-decoration: none;
  `,

  patient: css`
  margin: 38 0 0 20;
  padding-right: 8px;
  width: auto;
  color: #64AA95;


  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  
  font-size: 18px;

`,


  txt: css`
    margin-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    width: auto;

  `,
  lbl: css`
    font-style: normal;
    font-weight: 600;
    
    font-size: 15px;
  
    color: #000000;
    opacity: 0.5;

    line-height: 2; 
  `,
  val: css`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 2;
  font-size: 15px;
  text-align: right;
  
  
  color: #3d3d3d;
  `,
  cont: css`
  vertical-align: top;  
`,
 

};

export interface Props {
  name?: string;
  id?: string;
  birthday?: string;
  implantSince?: string;
  modelNo?: string;
  serialNo?: string;
  firmware?: string;
  }

export default function WidgetTextBulltes({
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
      <div className={theme.root}>
        <span className={theme.patient}>{name}</span><br/>
        <div className={theme.txt}>
        <span className={theme.val}>{id}</span><br/>
        <span className={theme.val}>{birthday}</span><br/>
        <span className={theme.val}>{implantSince}</span><br/>
        <span className={theme.val}>{modelNo}</span><br/>
        <span className={theme.val}>{serialNo}</span><br/>
        <span className={theme.val}>{firmware}</span><br/>
        </div>
      </div>
      </div>
    );
  }