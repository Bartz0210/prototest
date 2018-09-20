import * as React from "react";
import { css } from "emotion";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import { bool } from "prop-types";

const theme = {
  root: css`
    label: Toggle;
  `,
  active: css`
    background: rgba(0, 0, 0, 0.1);
  `,
  caption: css`
    padding-top: 5px;
  `
};

export interface Props {
  isOn: boolean;
  onChange(isOn: boolean): void;
}

export default function Toggle({ isOn, onChange }: Props) {
  return (
    <input
      type="checkbox"
      onClick={event => onChange(Boolean(event.currentTarget.checked))}
      checked={isOn}
    />
  );
}
