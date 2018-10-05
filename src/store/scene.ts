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
      frequency: 0
    });
  }

  return {
    cursor: {
      position: [0, 0, 0],
      radius: 2,
      scaleX: 2,
      scaleY: 2,
      scaleZ: 1,
      color: [0, 0.5, 1.0],
      isOn: true,
      frequency: 60
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
export interface ToggleLead1234 extends Action<"toggleLead1234"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead012 extends Action<"toggleLead012"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead345 extends Action<"toggleLead345"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead124 extends Action<"toggleLead124"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead234 extends Action<"toggleLead234"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead134 extends Action<"toggleLead134"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead123 extends Action<"toggleLead123"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead12 extends Action<"toggleLead12"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead34 extends Action<"toggleLead34"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead01 extends Action<"toggleLead01"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead02 extends Action<"toggleLead02"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead35 extends Action<"toggleLead35"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead45 extends Action<"toggleLead45"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead13 extends Action<"toggleLead13"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
}
export interface ToggleLead14 extends Action<"toggleLead14"> {
  //leads: [boolean, boolean, boolean, boolean, boolean, boolean];
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
    | ToggleLead1234
    | ToggleLead012
    | ToggleLead345
    | ToggleLead124
    | ToggleLead234
    | ToggleLead134
    | ToggleLead123
    | ToggleLead12
    | ToggleLead34
    | ToggleLead01
    | ToggleLead02
    | ToggleLead35
    | ToggleLead45
    | ToggleLead13
    | ToggleLead14
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
    case "toggleLead5":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [0, -3.125, 0]
        // },
        leads: {
          ...state.leads,
          leads: [
            state.leads.leads["0"],
            state.leads.leads["1"],
            state.leads.leads["2"],
            state.leads.leads["3"],
            state.leads.leads["4"],
            action.isAtLead5
          ]
        }
      };
    case "toggleLead4":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [
        //     0.5 + state.cursor.radius * state.cursor.scaleX,
        //     -0.625,
        //     state.cursor.position["2"]
        //   ]
        // },
        leads: {
          ...state.leads,
          leads: [
            state.leads.leads["0"],
            state.leads.leads["1"],
            state.leads.leads["2"],
            state.leads.leads["3"],
            action.isAtLead4,
            state.leads.leads["5"]
          ]
        }
      };
    case "toggleLead3":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [
        //     -0.5 - state.cursor.radius * state.cursor.scaleX,
        //     -0.625,
        //     state.cursor.position["2"]
        //   ]
        // },
        leads: {
          ...state.leads,
          leads: [
            state.leads.leads["0"],
            state.leads.leads["1"],
            state.leads.leads["2"],
            action.isAtLead3,
            state.leads.leads["4"],
            state.leads.leads["5"]
          ]
        }
      };
    case "toggleLead2":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [
        //     0.5 + state.cursor.radius * state.cursor.scaleX,
        //     1.125,
        //     state.cursor.position["2"]
        //   ]
        // },
        leads: {
          ...state.leads,
          leads: [
            state.leads.leads["0"],
            state.leads.leads["1"],
            action.isAtLead2,
            state.leads.leads["3"],
            state.leads.leads["4"],
            state.leads.leads["5"]
          ]
        }
      };
    case "toggleLead1":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [
        //     -0.5 - state.cursor.radius * state.cursor.scaleX,
        //     1.125,
        //     state.cursor.position["2"]
        //   ]
        // },
        leads: {
          ...state.leads,
          leads: [
            state.leads.leads["0"],
            action.isAtLead1,
            state.leads.leads["2"],
            state.leads.leads["3"],
            state.leads.leads["4"],
            state.leads.leads["5"]
          ]
        }
      };

    case "toggleLead0":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [0, 4.625, 0]
        // },
        leads: {
          ...state.leads,
          leads: [
            action.isAtLead0,
            state.leads.leads["1"],
            state.leads.leads["2"],
            state.leads.leads["3"],
            state.leads.leads["4"],
            state.leads.leads["5"]
          ]
        }
      };
    //TODO

    case "toggleLead1234":
      return {
        ...state,
        //   cursor: {
        //     ...state.cursor,
        //     position: [0, 0.625, state.cursor.position["2"]],
        //     scaleY: 2
        //   },
        leads: {
          ...state.leads,
          leads: [false, true, true, true, true, false]
        }
      };

    case "toggleLead012":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [0, 3.125, state.cursor.position["2"]],
        //   scaleY: 2
        // },
        leads: {
          ...state.leads,
          leads: [true, true, true, false, false, false]
        }
      };

    case "toggleLead345":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [0, -4.625, state.cursor.position["2"]],
        //   scaleY: 2
        // },
        leads: {
          ...state.leads,
          leads: [false, false, false, true, true, true]
        }
      };

    case "toggleLead124":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [
        //     0.25 + state.cursor.radius * state.cursor.scaleX,
        //     1.25,
        //     state.cursor.position["2"]
        //   ],
        //   scaleY: 2
        // },
        leads: {
          ...state.leads,
          leads: [false, true, true, false, true, false]
        }
      };

    case "toggleLead234":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [
        //     0.25 + state.cursor.radius * state.cursor.scaleX,
        //     0,
        //     state.cursor.position["2"]
        //   ],
        //   scaleY: 2
        // },
        leads: {
          ...state.leads,
          leads: [false, false, true, true, true, false]
        }
      };

    case "toggleLead134":
      return {
        ...state,
        cursor: {
          ...state.cursor,
          position: [
            -0.25 - state.cursor.radius * state.cursor.scaleX,
            0,
            state.cursor.position["2"]
          ],
          scaleY: 2
        },
        leads: {
          ...state.leads,
          leads: [false, true, false, true, true, false]
        }
      };

    case "toggleLead123":
      return {
        ...state,
        cursor: {
          ...state.cursor,
          position: [
            -0.25 - state.cursor.radius * state.cursor.scaleX,
            1.25,
            state.cursor.position["2"]
          ],
          scaleY: 2
        },
        leads: {
          ...state.leads,
          leads: [false, true, true, true, false, false]
        }
      };

    case "toggleLead12":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [0, 1.875, state.cursor.position["2"]],
        //   scaleY: 2
        // },
        leads: {
          ...state.leads,
          leads: [false, true, true, false, false, false]
        }
      };

    case "toggleLead34":
      return {
        ...state,
        //   cursor: {
        //     ...state.cursor,
        //     position: [0, -1.875, state.cursor.position["2"]],
        //     scaleY: 2
        //   },
        leads: {
          ...state.leads,
          leads: [false, false, false, true, true, false]
        }
      };

    case "toggleLead01":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [
        //     -0.25 - state.cursor.radius * state.cursor.scaleX,
        //     3.125,
        //     state.cursor.position["2"]
        //   ],
        //   scaleY: 2
        // },
        leads: {
          ...state.leads,
          leads: [true, true, false, false, false, false]
        }
      };
    case "toggleLead02":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [
        //     0.25 + state.cursor.radius * state.cursor.scaleX,
        //     3.125,
        //     state.cursor.position["2"]
        //   ],
        //   scaleY: 2
        // },
        leads: {
          ...state.leads,
          leads: [true, false, true, false, false, false]
        }
      };
    case "toggleLead35":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [
        //     -0.25 - state.cursor.radius * state.cursor.scaleX,
        //     -1.875,
        //     state.cursor.position["2"]
        //   ],
        //   scaleY: 2
        // },
        leads: {
          ...state.leads,
          leads: [false, false, false, true, false, true]
        }
      };
    case "toggleLead45":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [
        //     0.25 + state.cursor.radius * state.cursor.scaleX,
        //     -1.875,
        //     state.cursor.position["2"]
        //   ],
        //   scaleY: 2
        // },
        leads: {
          ...state.leads,
          leads: [false, false, false, false, true, true]
        }
      };
    case "toggleLead13":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [
        //     0.5 + state.cursor.radius * state.cursor.scaleX,
        //     0.625,
        //     state.cursor.position["2"]
        //   ],
        //   scaleY: 2
        // },
        leads: {
          ...state.leads,
          leads: [false, true, false, true, false, false]
        }
      };
    case "toggleLead14":
      return {
        ...state,
        // cursor: {
        //   ...state.cursor,
        //   position: [
        //     -0.5 - state.cursor.radius * state.cursor.scaleX,
        //     0.625,
        //     state.cursor.position["2"]
        //   ],
        //   scaleY: 2
        // },
        leads: {
          ...state.leads,
          leads: [false, true, false, false, true, false]
        }
      };
  }
  return state;
}
