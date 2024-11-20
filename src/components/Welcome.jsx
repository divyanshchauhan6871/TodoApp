import { useContext } from "react";
import Todolistcontext from "../store/Todolistcontext";
import "./Welcome.css";

function Welcome() {
  const { todolist } = useContext(Todolistcontext);
  return (
    <div>
      {todolist.length === 0 && <p className="nothing-todo">Nothing to do</p>}
    </div>
  );
}

export default Welcome;
