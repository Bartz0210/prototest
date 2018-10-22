import * as React from "react";
import { css } from "emotion";

const theme = {
  container: css`
    position: fixed;
    top: 56;
    left: 0;
    bottom: 0;
    z-index: 4;
    width: 300px;

    //outline: 1px solid red;
  `,

  menu: css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    display: flex;
    flex-direction: column;

    background: #f0f0f0;
  `,

  menu_header: css`
    background: #fff;
  `,

  hdl: css`
    padding: 8 8 8 40;
    font-size: 15px;
    font-weight: 600;
    color: #3d3d3d;
  `
};

export interface Props {
  /* Menu is visible */
  title: string;
  visible: boolean;
  onClick(visible: boolean): void;

  children?: React.ReactNode;
}

export function Sidebar(props: Props) {
  return (
    <div
      className={theme.container}
      style={{ pointerEvents: props.visible ? undefined : "none" }}
    >
      <div
        className={theme.menu}
        style={{
          transform: props.visible ? "translateX(0)" : "translateX(-100%)",
          boxShadow: props.visible ? "1px 4px 5px rgba(0, 0, 0, 0.16)" : "none",
          transition: "300ms ease-in"
        }}
        // onClick={() => props.onClick(props.visible)}
      >
        <div className={theme.menu_header}>
          <h2 className={theme.hdl}>{props.title}</h2>
        </div>
        {props.children}
      </div>
    </div>
  );
}
