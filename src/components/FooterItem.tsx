import * as React from 'react';
import { css } from 'emotion';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

const theme = {
  root: css`
    label: FooterItem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    width: 150px;

    color: #fff;
    text-decoration: none;
  `,
  active: css`
    background: rgba(0, 0, 0, 0.1);
  `,
  caption: css`
    padding-top: 5px;
  `,
};

export interface Props {
  caption: string;
  exact?: boolean;
  icon: string;
  strict?: boolean;
  to: string;
}

export default function FooterItem({
  caption,
  exact,
  icon,
  strict,
  to,
}: Props) {
  return (
    <NavLink
      activeClassName={theme.active}
      className={theme.root}
      exact={exact}
      strict={strict}
      to={to}
    >
      <Icon name={icon} size="large" />
      <div className={theme.caption}>{caption}</div>
    </NavLink>
  );
}
