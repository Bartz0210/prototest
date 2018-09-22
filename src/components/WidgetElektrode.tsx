import * as React from 'react';
import { css } from 'emotion';
import Elektrode from "./Elektrode";

const theme = {
  root: css`
    label: something;
         

    position: relative;
    top: 0;

    width: 320px;
    height: 300px;
   

    color: #64AA95;
    text-decoration: none;
  `,

  illu: css`
    width:35px;
    margin-right: 26px;

  `,
  txt: css`
    float: right;
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
  
  float: right;
  color: #3d3d3d;
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
      <div className={theme.root}>
       {/* <Elektrode className={theme.illu}/>*/}
        <div className={theme.txt}>
            <span className={theme.lbl}>Total Amplitude </span><span className={theme.val}>{id}</span><br/>
            <span className={theme.lbl}>Pulsweite(μs) </span><span className={theme.val}>{birthday}</span><br/>
            <span className={theme.lbl}>Frequenz (Hz) </span><span className={theme.val}>{implantSince}</span><br/>
            <button>Programmierung</button>
        </div>
        
    </div>

      
      
    );
  }