import * as React from "react";

export interface Props {
  className?: string;
  isOn: boolean;
  onChange(isOn: boolean): void;
}

export default function Toggle({ className, isOn, onChange }: Props) {
  return (
    <div
      style={{
        //position: "absolute",
        height: 24,
        width: 24,
        border: "2px solid #3d3d3d",
        borderRadius: 4,
        background: isOn ? "#58AA92" : "#fff",
        transition: "100ms ease-in"
      }}
     
    >
      <input
        className={className}
        style={{
          opacity: 0,
          position: "relative",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          width: "auto",
          height:"auto"

        }}
        type="checkbox"
        onClick={event => onChange(Boolean(event.currentTarget.checked))}
        checked={isOn}
      />
    </div>
  );
}
