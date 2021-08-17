import { actionType } from "../actions/type";

const initialState = {
  courseList: [],
  courseDetail: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COURSES:
      state.courseList = action.payload;
      return { ...state };
    case actionType.SET_COURSE:
      state.courseDetail = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
