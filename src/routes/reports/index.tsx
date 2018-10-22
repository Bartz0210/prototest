import * as React from "react";
import { css } from "emotion";
import { Sidebar } from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";
import Icon from "../../components/Icon";
import ReportName from "../../components/ReportName";
import ReportElectrode from "../../components/ReportElectrode";
import ReportEffekte from "../../components/ReportEffekte";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { ReportData, UpdateReport } from "../../store/report";
import { RootState } from "../../store";

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

interface OwnProps {}

interface StateProps {
  reports: ReportData;
}

interface DispatchProps {
  updateReport(
    progname: string,
    doctor: string,
    steifheit: number,
    tremor: number,
    bradykinese: number,
    gang: number,
    haltung: number,
    dystonie: number,
    gleichgewicht: number,
    stillstand: number,
    armschwingen: number,
    amplitudeL: number,
    pulsL: number,
    frequenzL: number,
    caseL: number,
    pLead0L: number,
    pLead1L: number,
    pLead2L: number,
    pLead3L: number,
    pLead4L: number,
    pLead5L: number,
    lead0L: boolean,
    lead1L: boolean,
    lead2L: boolean,
    lead3L: boolean,
    lead4L: boolean,
    lead5L: boolean,
    amplitudeR: number,
    pulsR: number,
    frequenzR: number,
    caseR: number,
    pLead0R: number,
    pLead1R: number,
    pLead2R: number,
    pLead3R: number,
    pLead4R: number,
    pLead5R: number,
    lead0R: boolean,
    lead1R: boolean,
    lead2R: boolean,
    lead3R: boolean,
    lead4R: boolean,
    lead5R: boolean
  ): void;
}

interface State {
  menuVisible: boolean;
}

export class Reports extends React.Component<
  OwnProps & StateProps & DispatchProps,
  State
> {
  state: State = {
    menuVisible: false
  };

  handleMenuToggle = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  render() {
    const props = this.props;

    return (
      <div className={theme.root}>
        <Sidebar
          title="Reports"
          visible={this.state.menuVisible}
          onClick={this.handleMenuToggle}
        >
          <SidebarItem
            label="Report 22.09.2018"
            even={false}
            menuVisible={this.state.menuVisible}
            //onClick={this.handleMenuToggle}
            onClick={() => {
              this.handleMenuToggle();
              props.updateReport(
                "Programm 1 - Dystonie",
                "Dr. A. Müller",
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                2.2,
                1.3,
                60,
                100,
                0,
                -25,
                -25,
                -25,
                -25,
                0,
                false,
                true,
                true,
                true,
                true,
                false,
                2.2,
                1.3,
                120,
                100,
                0,
                -25,
                -25,
                -25,
                -25,
                0,
                false,
                true,
                true,
                true,
                true,
                false
              );
            }}
          />
          <SidebarItem
            label="Report 15.09.2018"
            even={true}
            menuVisible={this.state.menuVisible}
            // onClick={this.handleMenuToggle}
            onClick={() => {
              this.handleMenuToggle();
              props.updateReport(
                "Programm 2 - Tremor",
                "Dr. A. Müller",
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                2.2,
                1.3,
                60,
                100,
                0,
                -25,
                -25,
                -25,
                -25,
                0,
                false,
                true,
                true,
                true,
                true,
                false,
                2.8,
                1.9,
                135,
                100,
                -33,
                -33,
                -33,
                -0,
                -0,
                0,

                true,
                true,
                true,

                false,
                false,
                false
              );
            }}
          />
          <SidebarItem
            label="Report 01.09.2018"
            even={false}
            menuVisible={this.state.menuVisible}
            // onClick={this.handleMenuToggle}
            onClick={() => {
              this.handleMenuToggle();
              props.updateReport(
                "Programm 2 - Tremor",
                "Dr. A. Müller",
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                2.8,
                1.9,
                135,
                100,
                -33,
                -33,
                -33,
                -0,
                -0,
                0,

                true,
                true,
                true,

                false,
                false,
                false,
                2.2,
                1.3,
                60,
                100,
                0,
                -25,
                -25,
                -25,
                -25,
                0,
                false,
                true,
                true,
                true,
                true,
                false
              );
            }}
          />
          <SidebarItem
            label="Report 15.08.2018"
            even={true}
            menuVisible={this.state.menuVisible}
            // onClick={this.handleMenuToggle}
            onClick={() => {
              this.handleMenuToggle();
              props.updateReport(
                "Programm 2 - Tremor",
                "Dr. A. Müller",
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                0.0,
                0.0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                false,
                false,
                false,
                false,
                false,
                false,
                2.8,
                1.9,
                135,
                100,
                -33,
                -33,
                -33,
                -0,
                -0,
                0,

                true,
                true,
                true,

                false,
                false,
                false
              );
            }}
          />
          <SidebarItem
            label="Report 14.08.2018"
            even={false}
            menuVisible={this.state.menuVisible}
            // onClick={this.handleMenuToggle}
            onClick={() => {
              this.handleMenuToggle();
              props.updateReport(
                "Programm 1 - Dystonie",
                "Dr. A. Müller",
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                3.4,
                1.0,
                180,
                100,
                0,
                -25,
                -25,
                -25,
                -25,
                0,
                false,
                true,
                true,
                true,
                true,
                false,
                2.8,
                1.9,
                135,
                100,
                -33,
                -33,
                -33,
                -0,
                -0,
                0,

                true,
                true,
                true,

                false,
                false,
                false
              );
            }}
          />
          <SidebarItem
            label="Report 01.08.2018"
            even={true}
            menuVisible={this.state.menuVisible}
            // onClick={this.handleMenuToggle}
            onClick={() => {
              this.handleMenuToggle();
              props.updateReport(
                "Programm 1 - Dystonie",
                "Dr. A. Müller",
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                3.4,
                1.0,
                180,
                100,
                0,
                0,
                0,
                -33,
                -33,
                -33,
                false,
                false,
                false,
                true,
                true,
                true,
                2.8,
                1.9,
                135,
                100,
                -33,
                -33,
                -33,
                -0,
                -0,
                0,

                true,
                true,
                true,

                false,
                false,
                false
              );
            }}
          />
          <SidebarItem
            label="Report 14.07.2018"
            even={false}
            menuVisible={this.state.menuVisible}
            // onClick={this.handleMenuToggle}
            onClick={() => {
              this.handleMenuToggle();
              props.updateReport(
                "Programm 1 - Dystonie",
                "Dr. A. Müller",
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                3.4,
                1.0,
                180,
                100,
                0,
                0,
                0,
                -33,
                -33,
                -33,
                false,
                false,
                false,
                true,
                true,
                true,
                2.8,
                1.9,
                135,
                100,
                -33,
                -33,
                -33,
                -0,
                -0,
                0,

                true,
                true,
                true,

                false,
                false,
                false
              );
            }}
          />
          <SidebarItem
            label="Report 01.07.2018"
            even={true}
            menuVisible={this.state.menuVisible}
            // onClick={this.handleMenuToggle}
            onClick={() => {
              this.handleMenuToggle();
              props.updateReport(
                "Programm 1 - Dystonie",
                "Dr. A. Müller",
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                3.4,
                1.0,
                180,
                100,
                0,
                0,
                0,
                -33,
                -33,
                -33,
                false,
                false,
                false,
                true,
                true,
                true,
                2.8,
                1.9,
                135,
                100,
                -33,
                -33,
                -33,
                -0,
                -0,
                0,

                true,
                true,
                true,

                false,
                false,
                false
              );
            }}
          />
          <SidebarItem
            label="Report 14.06.2018"
            even={false}
            menuVisible={this.state.menuVisible}
            // onClick={this.handleMenuToggle}
            onClick={() => {
              this.handleMenuToggle();
              props.updateReport(
                "Programm 1 - Dystonie",
                "Dr. A. Müller",
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                3.4,
                1.0,
                180,
                100,
                0,
                0,
                0,
                -33,
                -33,
                -33,
                false,
                false,
                false,
                true,
                true,
                true,
                2.8,
                1.9,
                135,
                100,
                -33,
                -33,
                -33,
                -0,
                -0,
                0,

                true,
                true,
                true,

                false,
                false,
                false
              );
            }}
          />
          <SidebarItem
            label="Report 01.06.2018"
            even={true}
            menuVisible={this.state.menuVisible}
            // onClick={this.handleMenuToggle}
            onClick={() => {
              this.handleMenuToggle();
              props.updateReport(
                "Programm 1 - Dystonie",
                "Dr. A. Müller",
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                Math.floor(Math.random() * 5) + 1,
                3.4,
                1.0,
                180,
                100,
                0,
                0,
                0,
                -33,
                -33,
                -33,
                false,
                false,
                false,
                true,
                true,
                true,
                2.8,
                1.9,
                135,
                100,
                -33,
                -33,
                -33,
                -0,
                -0,
                0,

                true,
                true,
                true,

                false,
                false,
                false
              );
            }}
          />
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
              programm={props.reports.progname}
              doctor={props.reports.doctor}
              className={theme.placeholder_small}
            />
          </div>
          <div className={theme.placeholder_long}>
            <ReportEffekte
              headline="Effekte"
              steifheit={props.reports.steifheit}
              tremor={props.reports.tremor}
              bradykinese={props.reports.bradykinese}
              gang={props.reports.gang}
              haltung={props.reports.haltung}
              dystonie={props.reports.dystonie}
              gleichgewicht={props.reports.gleichgewicht}
              stillstand={props.reports.stillstand}
              armschwingen={props.reports.armschwingen}
            />
          </div>
          <div className={theme.placeholder_upper}>
            <ReportElectrode
              className={theme.placeholder_upper}
              headline="Linke Elektrode"
              amplitude={props.reports.amplitudeL}
              pulsweite={props.reports.pulsL}
              frequenz={props.reports.frequenzL}
              pCase={props.reports.caseL}
              pLead0={props.reports.pLead0L}
              pLead1={props.reports.pLead1L}
              pLead2={props.reports.pLead2L}
              pLead3={props.reports.pLead3L}
              pLead4={props.reports.pLead4L}
              pLead5={props.reports.pLead5L}
              lead0={props.reports.lead0L}
              lead1={props.reports.lead1L}
              lead2={props.reports.lead2L}
              lead3={props.reports.lead3L}
              lead4={props.reports.lead4L}
              lead5={props.reports.lead5L}
            />
          </div>
          <div className={theme.placeholder_lower}>
            <ReportElectrode
              headline="Rechte Elektrode"
              amplitude={props.reports.amplitudeR}
              pulsweite={props.reports.pulsR}
              frequenz={props.reports.frequenzR}
              pCase={props.reports.caseR}
              pLead0={props.reports.pLead0R}
              pLead1={props.reports.pLead1R}
              pLead2={props.reports.pLead2R}
              pLead3={props.reports.pLead3R}
              pLead4={props.reports.pLead4R}
              pLead5={props.reports.pLead5R}
              lead0={props.reports.lead0R}
              lead1={props.reports.lead1R}
              lead2={props.reports.lead2R}
              lead3={props.reports.lead3R}
              lead4={props.reports.lead4R}
              lead5={props.reports.lead5R}
            />
          </div>
          {/* <div className={theme.placeholder_lower} /> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  RootState
> = state => {
  return {
    reports: state.report
  };
};

function updateReport(
  progname: string,
  doctor: string,
  steifheit: number,
  tremor: number,
  bradykinese: number,
  gang: number,
  haltung: number,
  dystonie: number,
  gleichgewicht: number,
  stillstand: number,
  armschwingen: number,
  amplitudeL: number,
  pulsL: number,
  frequenzL: number,
  caseL: number,
  pLead0L: number,
  pLead1L: number,
  pLead2L: number,
  pLead3L: number,
  pLead4L: number,
  pLead5L: number,
  lead0L: boolean,
  lead1L: boolean,
  lead2L: boolean,
  lead3L: boolean,
  lead4L: boolean,
  lead5L: boolean,
  amplitudeR: number,
  pulsR: number,
  frequenzR: number,
  caseR: number,
  pLead0R: number,
  pLead1R: number,
  pLead2R: number,
  pLead3R: number,
  pLead4R: number,
  pLead5R: number,
  lead0R: boolean,
  lead1R: boolean,
  lead2R: boolean,
  lead3R: boolean,
  lead4R: boolean,
  lead5R: boolean
): UpdateReport {
  return {
    type: "updateReport",
    progname,
    doctor,
    steifheit,
    tremor,
    bradykinese,
    gang,
    haltung,
    dystonie,
    gleichgewicht,
    stillstand,
    armschwingen,
    amplitudeL,
    pulsL,
    frequenzL,
    caseL,
    pLead0L,
    pLead1L,
    pLead2L,
    pLead3L,
    pLead4L,
    pLead5L,
    lead0L,
    lead1L,
    lead2L,
    lead3L,
    lead4L,
    lead5L,
    amplitudeR,
    pulsR,
    frequenzR,
    caseR,
    pLead0R,
    pLead1R,
    pLead2R,
    pLead3R,
    pLead4R,
    pLead5R,
    lead0R,
    lead1R,
    lead2R,
    lead3R,
    lead4R,
    lead5R
  };
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  updateReport
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reports);
