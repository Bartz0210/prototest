import * as React from "react";
import { css } from "emotion";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const theme = {
  root: css`
    label: FooterItem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    background: #8cd2bd;

    width: auto;

    margin: 16 16 0 16;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    color: #fff;
    text-decoration: none;
  `,
  active: css`
    background: #58aa92;
    transition: 150ms ease-in-out;
  `,
  caption: css`
    font-size: 15px;
    font-weight: normal;
    margin: 0 16 0 0;
  `,

  icn: css`
    margin: 0 16 0 16;
  `
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
  to
}: Props) {
  return (
    <NavLink
      activeClassName={theme.active}
      className={theme.root}
      exact={exact}
      strict={strict}
      to={to}
    >
      <Icon className={theme.icn} name={icon} size="large" />
      <div className={theme.caption}>{caption}</div>
    </NavLink>
  );
}
