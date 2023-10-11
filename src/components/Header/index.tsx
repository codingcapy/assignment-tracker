import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

interface Props {
  assignmentList: any,
  setAssignmentList: any
}

export function Header(props: Props) {
  const [btnStatus, setBtnStatus] = useState(true);
  const [newAssignmentName, setNewAssignmentName] = useState("")

  function updateAssignmentName(event: React.ChangeEvent<HTMLInputElement>) {
    setNewAssignmentName(event.target.value)
    if (event.target.value !== "") {
      setBtnStatus(false)
    } else {
      setBtnStatus(true)
    }
  }
  function addAssignment(e: any) {
    const newAssignment = {
      assignmentId: props.assignmentList.length === 0 ? 1 : props.assignmentList[props.assignmentList.length - 1].assignmentId + 1,
      assignmentName: newAssignmentName,
      completed: false
    }
    const newAssignmentList = [...props.assignmentList, newAssignment]
    props.setAssignmentList(newAssignmentList)
    e.preventDefault()
    setNewAssignmentName("")
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={addAssignment}>
        <input placeholder="Add a new assignment" type="text" onChange={updateAssignmentName} value={newAssignmentName} />
        <button disabled={btnStatus} >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
