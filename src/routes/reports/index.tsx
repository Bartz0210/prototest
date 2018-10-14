import * as React from "react";
import { css } from "emotion";
import { Sidebar } from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";
import Icon from "../../components/Icon";

const theme = {
  root: css`
    label: Programm;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    font-size: 32px;
  `
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
      </div>
    );
  }
}
