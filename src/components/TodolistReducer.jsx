import { useReducer } from "react";
import Todolistcontext from "../store/Todolistcontext";
import "../App.css"
const todoitemsreducer = (curstate, action) => {
  let newstate = curstate;
  if (action.type === "ADD_ITEM") {
    newstate = [
      ...newstate,
      { name: action.payload.task, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newstate = newstate.filter((item) => item.name !== action.payload.task);
  }
  return newstate;
};

function TodolistReducer({ children }) {
  const [todolist, dispatchtodolist] = useReducer(todoitemsreducer, []);

  const handleaddtolist = (task, date) => {
    const newitem = {
      type: "ADD_ITEM",
      payload: {
        task,
        date,
      },
    };
    dispatchtodolist(newitem);
  };

  const handledeletebutton = (task) => {
    const newitem = {
      type: "DELETE_ITEM",
      payload: {
        task,
      },
    };
    dispatchtodolist(newitem);
  }
    return (
        <Todolistcontext.Provider
          value={{
            todolist: todolist,
            handledeletebutton: handledeletebutton,
            handleaddtolist: handleaddtolist,
          }} className="inner-container">
            {children}
        </Todolistcontext.Provider>
    );
  };


export default TodolistReducer;
