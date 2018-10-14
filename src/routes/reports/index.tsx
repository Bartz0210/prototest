import * as React from "react";
import { css } from "emotion";
import { Sidebar } from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";
import Icon from "../../components/Icon";

const theme = {
  root: css`
 

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    font-size: 32px;
  `,
  grid: css`
  margin: 14 17 13 17;
    display: grid;
    grid-template-columns: 320 320 320;
    grid-template-rows: 63 63 63 63 63 63 63 63;
    grid-gap: 15px;
    align-items: stretch;
    justify-content: stretch;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`,
placeholder_small: css`
  background: #757575;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  justify-self: stretch;
`,
placeholder_long: css`
  background: #757575;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 3;
  grid-row-end: 9;
  justify-self: stretch;
`,
placeholder_upper: css`
  background: #757575;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 5;
  justify-self: stretch;
`,
placeholder_lower: css`
  background: #757575;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 9;
  justify-self: stretch;
`,

};

interface State {
  menuVisible: boolean;
}

export default class Reports extends React.Component<State> {
  state: State = {
    menuVisible: false
  };

  handleMenuToggle = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  render() {
    return (
      <div className={theme.root}>
        <Sidebar visible={this.state.menuVisible}>
          <SidebarItem label="Programm" even={false}/>
          <SidebarItem label="Programm" even={true}/>
          <SidebarItem label="Programm" even={false}/>
          <SidebarItem label="Programm" even={true}/>
          <SidebarItem label="Programm" even={false}/>
          <SidebarItem label="Programm" even={true}/>
          <SidebarItem label="Programm" even={false}/>
          <SidebarItem label="Programm" even={true}/>
          <SidebarItem label="Programm" even={false}/>
          <SidebarItem label="Programm" even={true}/>
          <SidebarItem label="Programm" even={false}/>
        </Sidebar>
        <button
          style={{
            zIndex: 3,
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
            border: "none",
            background: "#72C0A8",
            width: "56px",
            height: "56px",
            position: "fixed",
            top: 0,
            left: 0,
            // boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.2)",
            // transform: this.state.menuVisible
            //   ? "translateX(300px)"
            //   : "translateX(0)",
            // transition: "300ms ease-in"
            color: "#fff"
          }}
          onClick={this.handleMenuToggle}
        >
          <Icon
            name={this.state.menuVisible ? "close" : "menu"}
            size={"medium"}
          />
        </button>
        <div className={theme.grid}>
          <div className={theme.placeholder_small}></div>
          <div className={theme.placeholder_long}></div>
          <div className={theme.placeholder_upper}></div>
          <div className={theme.placeholder_lower}></div>
        </div>
      </div>
    );
  }
}
