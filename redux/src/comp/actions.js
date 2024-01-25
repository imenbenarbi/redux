import { ADD_TODO, DELETE_TODO, IS_COMPLETE ,EDIT_TODO} from "./actiontypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const isComplete = (payload) => {
  return {
    type: IS_COMPLETE,
    payload,
  };
};
export const EditTask =(payload) => {
return {
    type: EDIT_TODO,
    payload

};


};