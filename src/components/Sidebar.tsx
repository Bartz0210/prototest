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

    background: #dadada;
  `,

  menu_header: css`
    border-bottom: 1px solid #f3f3f3;
  `,

  hdl: css`
    padding: 8 8 8 8;
    font-size: 16px;
    font-weight: bold;
    color: #2699fb;
  `
};

export interface Props {
  /* Menu is visible */
  visible: boolean;
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
          boxShadow: props.visible
            ? "0px 2px 2px 1px rgba(0, 0, 0, 0.2)"
            : "none",
          transition: "300ms ease-in"
        }}
      >
        <div className={theme.menu_header}>
          <h2 className={theme.hdl}>Programme</h2>
        </div>
        {props.children}
      </div>
    </div>
  );
}
