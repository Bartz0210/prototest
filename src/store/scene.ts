import { AnyAction, Action } from 'redux';
import { SceneData, SpotState } from '../renderer/Scene';

function createScene(): SceneData {
  const spots: Array<SpotState> = [];
  for (let index = 0; index < 3; index++) {
    const distance = 2 + Math.random() * 5;
    const angle = Math.random() * Math.PI * 2;

    spots.push({
      color: [Math.random(), Math.random(), Math.random()],
      position: [
        Math.sin(angle) * distance,
        -5 + Math.random() * 10,
        Math.cos(angle) * distance,
      ],
      radius: 2 + Math.random() * 3,
    });
  }

  return {
    cursor: {
      position: [0, 0, 0],
      radius: 2,
    },
    spots,
  };
}

export interface UpdateCursorPosition extends Action<'updateCursorPosition'> {
  x: number;
  y: number;
  z: number;
}

export interface UpdateCursorRadius extends Action<'updateCursorRadius'> {
  radius: number;
}

export default function scene(
  state: SceneData = createScene(),
  action?: UpdateCursorPosition | UpdateCursorRadius
): SceneData {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case 'updateCursorPosition':
      return {
        ...state,
        cursor: {
          ...state.cursor,
          position: [action.x, action.y, action.z],
        },
      };
    case 'updateCursorRadius':
      return {
        ...state,
        cursor: {
          ...state.cursor,
          radius: action.radius,
        },
      };
  }

  return state;
}
