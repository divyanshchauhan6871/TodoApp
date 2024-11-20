import { useContext } from 'react'
import Todoitem from './Todoitem'
import Todolistcontext from '../store/Todolistcontext'

function Todoitems() {
  const {todolist,handledeletebutton}=useContext(Todolistcontext)
  return (
    <>
      {
        todolist.map((item,i)=>(
        <Todoitem key={i} task={item.name} date={item.date} ondeletebutton={handledeletebutton}></Todoitem>))
      }
    </>
  )
}

export default Todoitems
