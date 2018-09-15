import * as React from 'react';
import { css, cx } from 'emotion';

const theme = {
  root: css`
    label: Icon;
    display: inline-block;
    width: 24px;
    height: 24px;

    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;

    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    &.small {
      width: 18px;
      height: 18px;
      font-size: 18px;
    }

    &.large {
      width: 36px;
      height: 36px;
      font-size: 36px;
    }

    &.huge {
      width: 48px;
      height: 48px;
      font-size: 48px;
    }
  `,
};

export interface Props {
  className?: string;
  name: string;
  onClick?: () => void;
  size?: 'small' | 'large' | 'huge';
}

export default function Icon({ className, name, onClick, size }: Props) {
  return (
    <div className={cx(theme.root, className, size)} onClick={onClick}>
      {name}
    </div>
  );
}
