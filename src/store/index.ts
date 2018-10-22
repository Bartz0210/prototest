import { combineReducers } from "redux";

import scene from "./scene";
import report, { ReportData } from "./report";
import { SceneData } from "../renderer/Scene";

export interface RootState {
  scene: SceneData;
  report: ReportData;
}

export default combineReducers<RootState>({ scene, report });
