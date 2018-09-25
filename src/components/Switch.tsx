import * as React from "react";
import { css } from "emotion";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import { bool } from "prop-types";

const theme = {
  root: css`
    label: switch;
    border: none;
  `,
 
};

export interface Props {
  className?: string;
  isOn: boolean;
  onChange(isOn: boolean): void;
}

export default function Switch({ className, isOn, onChange }: Props) {
  return (
    <div style={{
        height: 30,
        width: 56,
        borderRadius: 30,
        background: isOn? "#72C0A8" : "#fff",
        border: "2px solid #72C0A8",
        transition: "100ms ease-in-out",
    }}>
        <div style = {{
        position: "relative",
        top:-1,
        left: isOn? 26 : -1,
        height : 29,
        width: 29,
        border: "2px solid #72C0A8",
        borderRadius: 30,
        background: isOn? "#fff" : "#72C0A8",
        transition: "100ms ease-in-out",
        }}>
            <input
            className={className}
            style={{
                opacity: 0,
                height:30,
                width:30,
            }}
            type="checkbox"
            onClick={event => onChange(Boolean(event.currentTarget.checked))}
            checked={isOn}
            />
        </div>
    </div>    
  );
}

