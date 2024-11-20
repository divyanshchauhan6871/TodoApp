import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import Welcome from "./components/Welcome";
import TodolistReducer from "./components/TodolistReducer";
import "./App.css";

function App() {
  return (
    <TodolistReducer>
      <div className="Outer-container">
        <div className="main-container">
          <h1>TODO APP</h1>
          <Addtodo></Addtodo>
          <Welcome></Welcome>
          <Todoitems></Todoitems>
        </div>
      </div>
    </TodolistReducer>
  );
}
export default App;
