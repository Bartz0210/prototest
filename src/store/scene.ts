import { AnyAction, Action } from "redux";
import { SceneData, SpotState, LeadState } from "../renderer/Scene";

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
      isOn: true
      // isAtLead0: false,
      // isAtLead1: false,
      // isAtLead2: false,
      // isAtLead3: false,
      // isAtLead4: false,
      // isAtLead5: false
    });
  }

  return {
    cursor: {
      position: [0, 0, 0],
      radius: 2,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,

      isOn: true

      // isAtLead0: false,
      // isAtLead1: false,
      // isAtLead2: false,
      // isAtLead3: false,
      // isAtLead4: false,
      // isAtLead5: false
    },
    spots,
    leads: {
      leads: [false, true, true, true, true, false]
    }
  };
}

export interface UpdateCursorPosition extends Action<"updateCursorPosition"> {
  x: number;
  y: number;
  z: number;
}

export interface UpdateCursorPositionX extends Action<"updateCursorPositionX"> {
  x: number;
}

export interface UpdateCursorPositionY extends Action<"updateCursorPositionY"> {
  y: number;
}

export interface UpdateCursorPositionZ extends Action<"updateCursorPositionZ"> {
  z: number;
}

export interface UpdateCursorRadius extends Action<"updateCursorRadius"> {
  radius: number;
}

export interface TransformCursorX extends Action<"transformCursorX"> {
  scaleX: number;
}
export interface TransformCursorY extends Action<"transformCursorY"> {
  scaleY: number;
}
export interface TransformCursorZ extends Action<"transformCursorZ"> {
  scaleZ: number;
}

export interface ToggleElectrode extends Action<"toggleElectrode"> {
  isOn: boolean;
}
export interface ToggleLead5 extends Action<"toggleLead5"> {
  isAtLead5: boolean;
}
export interface ToggleLead4 extends Action<"toggleLead4"> {
  isAtLead4: boolean;
}
export interface ToggleLead3 extends Action<"toggleLead3"> {
  isAtLead3: boolean;
}
export interface ToggleLead2 extends Action<"toggleLead2"> {
  isAtLead2: boolean;
}
export interface ToggleLead1 extends Action<"toggleLead1"> {
  isAtLead1: boolean;
}
export interface ToggleLead0 extends Action<"toggleLead0"> {
  isAtLead0: boolean;
}

export default function scene(
  state: SceneData = createScene(),
  action?:
    | UpdateCursorPosition
    | UpdateCursorRadius
    | UpdateCursorPositionX
    | UpdateCursorPositionY
    | UpdateCursorPositionZ
    | TransformCursorX
    | TransformCursorY
    | TransformCursorZ
    | ToggleElectrode
    | ToggleLead5
    | ToggleLead4
    | ToggleLead3
    | ToggleLead2
    | ToggleLead1
    | ToggleLead0
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

    case "updateCursorPositionX":
      return {
        ...state,
        cursor: {
          ...state.cursor,
          position: [
            action.x,
            state.cursor.position[1],
            state.cursor.position[2]
          ]
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

    case "updateCursorPositionZ":
      return {
        ...state,
        cursor: {
          ...state.cursor,
          position: [
            state.cursor.position[0],
            state.cursor.position[1],
            action.z
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
    case "transformCursorY":
      return {
        ...state,
        cursor: {
          ...state.cursor,
          scaleY: action.scaleY
        }
      };
    case "transformCursorZ":
      return {
        ...state,
        cursor: {
          ...state.cursor,
          scaleZ: action.scaleZ
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
    // case "toggleLead5":
    //   return {
    //     ...state,
    //     cursor: {
    //       ...state.cursor,
    //       isAtLead5: action.isAtLead5
    //     }
    //   };
    // case "toggleLead4":
    //   return {
    //     ...state,
    //     cursor: {
    //       ...state.cursor,
    //       isAtLead4: action.isAtLead4
    //     }
    //   };
    // case "toggleLead3":
    //   return {
    //     ...state,
    //     cursor: {
    //       ...state.cursor,
    //       isAtLead3: action.isAtLead3
    //     }
    //   };
    // case "toggleLead2":
    //   return {
    //     ...state,
    //     cursor: {
    //       ...state.cursor,
    //       isAtLead2: action.isAtLead2
    //     }
    //   };
    // case "toggleLead1":
    //   return {
    //     ...state,
    //     cursor: {
    //       ...state.cursor,
    //       isAtLead1: action.isAtLead1
    //     }
    //   };
    // case "toggleLead0":
    //   return {
    //     ...state,
    //     cursor: {
    //       ...state.cursor,
    //       isAtLead0: action.isAtLead0
    //     }
    //   };
  }

  return state;
}
