import * as React from 'react';
import { css } from 'emotion';

const theme = {
  root: css`
    label: Filler;
    flex: 1;
  `,
};

export default function Filler() {
  return <div className={theme.root} />;
}
