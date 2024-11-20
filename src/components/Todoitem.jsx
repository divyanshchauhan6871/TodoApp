import React from 'react';
import { MdDelete } from "react-icons/md";

function Todoitem({task,date,ondeletebutton}) {
  const handledelete=()=>{
    ondeletebutton(task);
  }
  return (
    <div className="w-100 text-center row p-3">
      <div className="col-5">
          {task}
        </div>
        <div className="col-5">
            {date}
        </div>
        <div className="col-2">
          <button className="btn btn-danger" onClick={handledelete}><MdDelete/></button>
        </div>
    </div>
  )
}

export default Todoitem
