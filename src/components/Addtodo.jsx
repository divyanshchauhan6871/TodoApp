import { useContext, useRef } from "react";
import { IoBagAddOutline } from "react-icons/io5";
import Todolistcontext from "../store/Todolistcontext";

function Addtodo() {
  const {handleaddtolist} =useContext(Todolistcontext);
  let todoname = useRef("");
  let duedate = useRef("");

  const handleclick = (event) => {
    event.preventDefault();
    handleaddtolist(todoname.current.value, duedate.current.value);
    todoname.current.value=""
    duedate.current.value=""
  };
  return (
    <>
      <form onSubmit={handleclick} style={{width:"100%"}}>
        <div className="row p-2 text-center">
          <div className="col-5">
            <input ref={todoname} type="text" placeholder="Enter the todo here" />
          </div>
          <div className="col-5">
            <input ref={duedate} type="date" />
          </div>
          <div className="col-2">
            <button className="btn btn-success">
              <IoBagAddOutline />
            </button>
          </div>
        </div>
      </form>
      <div>{todoname.current.value}</div>
    </>
  );
}

export default Addtodo;
