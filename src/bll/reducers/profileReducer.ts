// reducer

const initialState: ProfileType = {};

export const profileReducer = (state: ProfileType = initialState, action: ActionsType): ProfileType => {
  switch (action.type) {
    case "ANY-ACTION":
      return state;
    default:
      return state;
  }
};

// actions
export const anyAC = () => ({ type: "ANY-ACTION" } as const);

// thunks

// types
type ProfileType = {};

type ActionsType = ReturnType<typeof anyAC>;
