import * as React from 'react';
import { css } from 'emotion';


const theme = {
  root: css`
    
    position: relative;
    top: 30;
    left: 30;
    width: 33px;
    height: 224px;
    border: 1px solid #3D3D3D;
    border-radius: 16px;
    margin-right: 26px; 
    
   `,
};

export interface Props {
    className?: string;
    picture?: string;
  }

export default function WidgetPic({
    className,
    picture
    
  }: Props) {
    return (
      <div className={theme.root}>
      </div>
    );
  }