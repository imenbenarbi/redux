import { useDispatch } from "react-redux";
import { deleteTodo } from "./actions";
import { isComplete } from "./actions";
import { EditTodo } from "./EditTodo";




const Task = ({ el }) => {
  const dispatch = useDispatch();
  const change = () => {
    dispatch(isComplete(el.id));
  };

  const dynamicStyle = {
    color: el.isDone && "green",
  };
  return (
    <div>
      <h1 style={dynamicStyle}>{el.text}</h1>

      <button
        onClick={() => {
          dispatch(deleteTodo(el.id));
        }}
      >
        remove
      </button>
      <button onClick={change}>isDone</button>
      <EditTodo  el={el} />
    </div>
  );
};
export default Task;