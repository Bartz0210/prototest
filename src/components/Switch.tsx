import * as React from "react";
import { css } from "emotion";

export interface Props {
  className?: string;
  isOn: boolean;
  onChange(isOn: boolean): void;
}

export default function Switch({ className, isOn, onChange }: Props) {
  return (
    <div
      style={{
        height: 31,
        width: 56,
        borderRadius: 30,
        background: isOn ? "#72C0A8" : "#fff",
        border: "2px solid #72C0A8",
        transition: "100ms ease-in-out"
      }}
    >
      <div
        style={{
          position: "relative",
          top: 0,
          left: isOn ? 26 : 0,
          height: 27,
          width: 27,
          border: isOn ? "2px solid #72c0a8" : "2px solid #fff",
          borderRadius: 30,
          background: isOn ? "#fff" : "#72C0A8",
          transition: "100ms ease-in-out"
        }}
      >
        <input
          className={className}
          style={{
            position: "relative",
            left: -15,
            opacity: 0,
            height: 30,
            width: 30
          }}
          type="checkbox"
          onClick={event => onChange(Boolean(event.currentTarget.checked))}
          checked={isOn}
        />
      </div>
    </div>
  );
}
