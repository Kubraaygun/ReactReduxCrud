import { ActionTypes } from "../actionTypes";

const initialState = {
    todos: [],
    category: [],
  };
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.ADD_TODO:
        return "";
      case ActionTypes.REMOVE_TODO:
        return "BOS";
      default:
        return state;
    }
  };
  
  
  export default userReducer;
  