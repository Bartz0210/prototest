import * as React from 'react';
import { css } from 'emotion';


const theme = {
  root: css`
    label: WidgetPic;
    background-color: #333;
    border-width: 5px;
    border-color:#333;
    width: 314px;

    color: #2699FB;
    text-decoration: none;
  `,
  pic: css`
    width: 314px;  
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
        <img className={theme.pic} src={picture} />
      </div>
    );
  }