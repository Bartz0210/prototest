import { combineReducers } from 'redux';

import scene from './scene';
import { SceneData } from '../renderer/Scene';

export interface RootState {
  scene: SceneData;
}

export default combineReducers<RootState>({ scene });
