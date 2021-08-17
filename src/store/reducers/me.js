import { actionType } from "../actions/type";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_ME:
      state = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
