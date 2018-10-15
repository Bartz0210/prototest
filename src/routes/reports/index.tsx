import * as React from "react";
import { css } from "emotion";
import { Sidebar } from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";
import Icon from "../../components/Icon";
import ReportName from "../../components/ReportName";
import ReportElectrode from "../../components/ReportElectrode";
import ReportEffekte from "../../components/ReportEffekte";

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
    margin: 6 17 13 17;
    display: grid;
    grid-template-columns: 320 654;
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
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: span 3;
    justify-self: stretch;
  `,
  placeholder_long: css`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: span 6;
    justify-self: stretch;
  `,
  placeholder_upper: css`
    grid-column-start: 2;
    grid-column-end: span 2;
    grid-row-start: 1;
    grid-row-end: span 5;
    justify-self: stretch;
  `,
  placeholder_lower: css`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: span 5;
    justify-self: stretch;
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
          <SidebarItem label="Programm" even={false} />
          <SidebarItem label="Programm" even={true} />
          <SidebarItem label="Programm" even={false} />
          <SidebarItem label="Programm" even={true} />
          <SidebarItem label="Programm" even={false} />
          <SidebarItem label="Programm" even={true} />
          <SidebarItem label="Programm" even={false} />
          <SidebarItem label="Programm" even={true} />
          <SidebarItem label="Programm" even={false} />
          <SidebarItem label="Programm" even={true} />
          <SidebarItem label="Programm" even={false} />
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
          <div className={theme.placeholder_small}>
            <ReportName
              headline="Report"
              programm="Prog-01-Tremor"
              doctor="Dr. A. Schmidt"
              className={theme.placeholder_small}
            />
          </div>
          <div className={theme.placeholder_long}>
            <ReportEffekte
              headline="Effekte"
              programm="dddddddddd"
              doctor="jplkjlkj"
            />
          </div>
          <div className={theme.placeholder_upper}>
            <ReportElectrode
              className={theme.placeholder_upper}
              headline="Linke Elektrode"
              amplitude="3.0"
              pulsweite="1.5"
              frequenz="60"
              pCase={100}
              pLead0={0}
              pLead1={-25}
              pLead2={-25}
              pLead3={-25}
              pLead4={-25}
              pLead5={0}
              lead0={false}
              lead1={true}
              lead2={true}
              lead3={true}
              lead4={true}
              lead5={false}
            />
          </div>
          <div className={theme.placeholder_lower}>
            <ReportElectrode
              headline="Rechte Elektrode"
              amplitude="3.0"
              pulsweite="1.5"
              frequenz="60"
              pCase={100}
              pLead0={0}
              pLead1={-25}
              pLead2={-25}
              pLead3={-25}
              pLead4={-25}
              pLead5={0}
              lead0={false}
              lead1={true}
              lead2={true}
              lead3={true}
              lead4={true}
              lead5={false}
            />
          </div>
          {/* <div className={theme.placeholder_lower} /> */}
        </div>
      </div>
    );
  }
}
