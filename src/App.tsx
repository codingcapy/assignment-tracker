import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

const assignmentsArray: Assignment[] = [];

interface Assignment {
  assignmentId: number
  assignmentName: string,
  completed: boolean
}

function App() {
  const [assignmentList, setAssignmentList] = useState(assignmentsArray);

  function deleteAssignment(assignmentId: number) {
    const newAssignmentList = assignmentList.filter((assignment: Assignment) => assignment.assignmentId !== assignmentId)
    setAssignmentList(newAssignmentList)
  }
  function completeAssignment(assignmentId: number) {
    setAssignmentList(assignmentList.map((assignment: Assignment) => {
      if (assignment.assignmentId === assignmentId && !assignment.completed) {
        return { ...assignment, completed: true }
      }
      else if (assignment.assignmentId === assignmentId && assignment.completed) {
        return { ...assignment, completed: false }
      }
      else {
        return assignment
      }
    }))
  }

  return (
    <>
      <Header assignmentList={assignmentList} setAssignmentList={setAssignmentList} />
      <Assignments assignmentList={assignmentList} setAssignmentList={setAssignmentList} deleteAssignment={deleteAssignment} completeAssignment={completeAssignment} />
    </>
  );
}

export default App;
