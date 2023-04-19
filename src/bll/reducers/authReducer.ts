// reducer

const initialState: AuthType = {};

export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
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
type AuthType = {};

type ActionsType = ReturnType<typeof anyAC>;
