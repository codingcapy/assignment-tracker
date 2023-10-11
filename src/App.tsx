import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

const assignmentsArray: any[] = [];

function App() {
  const [assignmentList, setAssignmentList] = useState<any>(assignmentsArray);
  const [completedState, setCompletedState] = useState(false)
  const [completedAssignments, setCompletedAssignments] = useState(0)

  function deleteAssignment(assignmentId: number) {
    const newAssignmentList = assignmentList.filter((assignment: any) => assignment.assignmentId !== assignmentId)
    setAssignmentList(newAssignmentList)
  }
  function completeAssignment(assignmentId: number) {
    setAssignmentList(assignmentList.map((assignment: any) => {
      if (assignment.assignmentId === assignmentId) {
        return { ...assignment, completed: !completedState }
      }
      else {
        return assignment
      }
    }))
  }
  function updateCompleted() {
    const count = (assignmentList.filter((assignment: any) => assignment.completed)).length
    setCompletedAssignments(count)
  }

  return (
    <>
      <Header assignmentList={assignmentList} setAssignmentList={setAssignmentList} completedState={completedState} />
      <Assignments assignmentList={assignmentList} setAssignmentList={setAssignmentList} completedAssignments={completedAssignments} deleteAssignment={deleteAssignment} completeAssignment={completeAssignment} completedState={completedState} setCompletedState={setCompletedState} updateCompleted={updateCompleted} />
    </>
  );
}

export default App;
