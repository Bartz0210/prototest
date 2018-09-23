import * as React from 'react';
import { css } from 'emotion';


const theme = {
  root: css`
    label: WidgetPic;
    position: relative;
    top: -12;
    left: 0;
    width: 320px;
    height: 300px;
    background-image: url("./Max_mustermann2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 70% 20%;
    color: #2699FB;
    text-decoration: none;

    border-radius: 4px;
    
    rgba(255, 255, 255, 0.23);
  `,
  
 

};

export interface Props {
  picture: string;
  }

export default function WidgetPic({
    picture
    
  }: Props) {
    return (
      <div className={theme.root}>
      
      </div>
    );
  }