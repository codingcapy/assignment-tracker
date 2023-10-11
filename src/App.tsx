import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

const assignmentsArray: any[] = [
  { assignmentId: 1, assignmentName: "First Assignment", completed: false }
];

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
    let count = 0
    assignmentList.forEach((assignment: any) => {
      if (assignment.completed) {
        count++
      }
    })
    setCompletedAssignments(count)
  }

  return (
    <>
      <Header assignmentList={assignmentList} setAssignmentList={setAssignmentList} />
      <Assignments assignmentList={assignmentList} setAssignmentList={setAssignmentList} completedAssignments={completedAssignments} deleteAssignment={deleteAssignment} completeAssignment={completeAssignment} completedState={completedState} updateCompleted={updateCompleted} />
    </>
  );
}

export default App;
