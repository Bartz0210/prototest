import { AnyAction, Action } from "redux";
import { SceneData, SpotState } from "../renderer/Scene";

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
        Math.cos(angle) * distance
      ],
      radius: 2 + Math.random() * 3,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
      isOn: true,
      isAtLead0: false,
      isAtLead1: false,
      isAtLead2: false,
      isAtLead3: false,
      isAtLead4: false,
      isAtLead5: false
    });
  }

  return {
    cursor: {
      position: [0, 0, 0],
      radius: 2,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,

      isOn: true,

      isAtLead0: false,
      isAtLead1: false,
      isAtLead2: false,
      isAtLead3: false,
      isAtLead4: false,
      isAtLead5: false
    },
    spots
  };
}

export interface UpdateCursorPosition extends Action<"updateCursorPosition"> {
  x: number;
  y: number;
  z: number;
}

export interface UpdateCursorPositionY extends Action<"updateCursorPositionY"> {
  y: number;
}

export interface UpdateCursorRadius extends Action<"updateCursorRadius"> {
  radius: number;
}

export interface TransformCursorX extends Action<"transformCursorX"> {
  scaleX: number;
}

export interface ToggleElectrode extends Action<"toggleElectrode"> {
  isOn: boolean;
}

export default function scene(
  state: SceneData = createScene(),
  action?:
    | UpdateCursorPosition
    | UpdateCursorRadius
    | UpdateCursorPositionY
    | TransformCursorX
    | ToggleElectrode
): SceneData {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case "updateCursorPosition":
      return {
        ...state,
        cursor: {
          ...state.cursor,
          position: [action.x, action.y, action.z]
        }
      };

    case "updateCursorPositionY":
      return {
        ...state,
        cursor: {
          ...state.cursor,
          position: [
            state.cursor.position[0],
            action.y,
            state.cursor.position[2]
          ]
        }
      };

    case "updateCursorRadius":
      return {
        ...state,
        cursor: {
          ...state.cursor,
          radius: action.radius
        }
      };
    case "transformCursorX":
      return {
        ...state,
        cursor: {
          ...state.cursor,
          scaleX: action.scaleX
        }
      };

    case "toggleElectrode":
      return {
        ...state,
        cursor: {
          ...state.cursor,
          isOn: action.isOn
        }
      };
  }

  return state;
}
