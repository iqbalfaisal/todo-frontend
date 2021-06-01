import { DELETE_ITEM, ADD_ITEM, SAVE_ITEMS } from "../types";

const INITIAL_STATE = { todo: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_ITEMS:
      return {
        ...state,
        todo: action.todo,
      };

    case ADD_ITEM:
      return {
        ...state,
        todo: [...state.todo, action.data],
      };

    case DELETE_ITEM:
      return {
        ...state,
        todo: state.todo.filter((item) => item._id != action._id),
      };

    default:
      return state;
  }
};
