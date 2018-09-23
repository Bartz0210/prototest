import * as React from "react";
import { css } from "emotion";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import { bool } from "prop-types";

const theme = {
  root: css`
    label: Toggle;
    border: none;
  `,
 
};

export interface Props {
  className?: string;
  isOn: boolean;
  onChange(isOn: boolean): void;
}

export default function Toggle({ className, isOn, onChange }: Props) {
  return (
   <div style = {{
     height : 24,
     width: 24,
     border: "2px solid #3d3d3d",
     borderRadius:4,
     background: isOn? "#58AA92" : "#fff",
     transition: "100ms ease-in"
   }}>
      <input
      className={className}
      style={{
        opacity: 0
      }}
      type="checkbox"
      onClick={event => onChange(Boolean(event.currentTarget.checked))}
      checked={isOn}
    />
    </div>
  );
}
