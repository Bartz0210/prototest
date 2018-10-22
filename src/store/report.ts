import { Action, bindActionCreators } from "redux";
//import { SceneData, SpotState } from "../renderer/Scene";
import { fail } from "assert";

export interface ReportData {
  progname: string;
  doctor: string;

  steifheit: number;
  tremor: number;
  bradykinese: number;
  gang: number;
  haltung: number;
  dystonie: number;
  gleichgewicht: number;
  stillstand: number;
  armschwingen: number;

  amplitudeL: number;
  pulsL: number;
  frequenzL: number;
  caseL: number;
  pLead0L: number;
  pLead1L: number;
  pLead2L: number;
  pLead3L: number;
  pLead4L: number;
  pLead5L: number;
  lead0L: boolean;
  lead1L: boolean;
  lead2L: boolean;
  lead3L: boolean;
  lead4L: boolean;
  lead5L: boolean;

  amplitudeR: number;
  pulsR: number;
  frequenzR: number;
  caseR: number;
  pLead0R: number;
  pLead1R: number;
  pLead2R: number;
  pLead3R: number;
  pLead4R: number;
  pLead5R: number;
  lead0R: boolean;
  lead1R: boolean;
  lead2R: boolean;
  lead3R: boolean;
  lead4R: boolean;
  lead5R: boolean;
}

function createReport(): ReportData {
  return {
    progname: "Programm 3 - Bradykinese",
    doctor: "Dr. H. Schmidt",

    steifheit: 1,
    tremor: 1,
    bradykinese: 1,
    gang: 1,
    haltung: 1,
    dystonie: 1,
    gleichgewicht: 1,
    stillstand: 1,
    armschwingen: 1,

    amplitudeL: 1.8,
    pulsL: 15.0,
    frequenzL: 60,
    caseL: 100,
    pLead0L: 0,
    pLead1L: -25,
    pLead2L: -25,
    pLead3L: -25,
    pLead4L: -25,
    pLead5L: 0,
    lead0L: false,
    lead1L: true,
    lead2L: true,
    lead3L: true,
    lead4L: true,
    lead5L: false,

    amplitudeR: 1.8,
    pulsR: 15.0,
    frequenzR: 60,
    caseR: 100,
    pLead0R: 0,
    pLead1R: -25,
    pLead2R: -25,
    pLead3R: -25,
    pLead4R: -25,
    pLead5R: 0,
    lead0R: false,
    lead1R: true,
    lead2R: true,
    lead3R: true,
    lead4R: true,
    lead5R: false
  };
}

export interface UpdateReport extends Action<"updateReport"> {
  progname: string;
  doctor: string;

  steifheit: number;
  tremor: number;
  bradykinese: number;
  gang: number;
  haltung: number;
  dystonie: number;
  gleichgewicht: number;
  stillstand: number;
  armschwingen: number;

  amplitudeL: number;
  pulsL: number;
  frequenzL: number;
  caseL: number;
  pLead0L: number;
  pLead1L: number;
  pLead2L: number;
  pLead3L: number;
  pLead4L: number;
  pLead5L: number;
  lead0L: boolean;
  lead1L: boolean;
  lead2L: boolean;
  lead3L: boolean;
  lead4L: boolean;
  lead5L: boolean;

  amplitudeR: number;
  pulsR: number;
  frequenzR: number;
  caseR: number;
  pLead0R: number;
  pLead1R: number;
  pLead2R: number;
  pLead3R: number;
  pLead4R: number;
  pLead5R: number;
  lead0R: boolean;
  lead1R: boolean;
  lead2R: boolean;
  lead3R: boolean;
  lead4R: boolean;
  lead5R: boolean;
}

export default function scene(
  state: ReportData = createReport(),
  action?: UpdateReport
): ReportData {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case "updateReport":
      return {
        ...state,
        progname: action.progname,
        doctor: action.doctor,
        steifheit: action.steifheit,
        tremor: action.tremor,
        bradykinese: action.bradykinese,
        gang: action.gang,
        haltung: action.haltung,
        dystonie: action.dystonie,
        gleichgewicht: action.gang,
        stillstand: action.stillstand,
        armschwingen: action.armschwingen,
        amplitudeL: action.amplitudeL,
        pulsL: action.pulsL,
        frequenzL: action.frequenzL,
        caseL: action.caseL,
        pLead0L: action.pLead0L,
        pLead1L: action.pLead1L,
        pLead2L: action.pLead2L,
        pLead3L: action.pLead3L,
        pLead4L: action.pLead4L,
        pLead5L: action.pLead5L,
        lead0L: action.lead0L,
        lead1L: action.lead1L,
        lead2L: action.lead2L,
        lead3L: action.lead3L,
        lead4L: action.lead4L,
        lead5L: action.lead5L,
        amplitudeR: action.amplitudeR,
        pulsR: action.pulsR,
        frequenzR: action.frequenzR,
        caseR: action.caseR,
        pLead0R: action.pLead0R,
        pLead1R: action.pLead1R,
        pLead2R: action.pLead2R,
        pLead3R: action.pLead3R,
        pLead4R: action.pLead4R,
        pLead5R: action.pLead5R,
        lead0R: action.lead0R,
        lead1R: action.lead1R,
        lead2R: action.lead2R,
        lead3R: action.lead3R,
        lead4R: action.lead4R,
        lead5R: action.lead5R
      };
  }
  return state;
}
