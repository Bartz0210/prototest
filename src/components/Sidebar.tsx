import * as React from "react";
import { css } from "emotion";

const theme = {
  container: css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;

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

    background: #fff;
    outline: 1px solid #f3f3f3;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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
          transform: props.visible ? "translateX(0)" : "translateX(-105%)",
          transition: "300ms"
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
