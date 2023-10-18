import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const assignmentsArray: Assignment[] = [];

interface Assignment {
  assignmentId: number;
  assignmentName: string;
  completed: boolean;
  dueDate: number | Date | undefined;
}

function App() {
  const [btnStatus, setBtnStatus] = useState(true);
  const [newAssignmentName, setNewAssignmentName] = useState("");
  const [assignmentList, setAssignmentList] = useState(assignmentsArray);
  const [selected, setSelected] = useState<Date>();
  const [clickedDate, setClickedDate] = useState(false);

  function updateAssignmentName(event: React.ChangeEvent<HTMLInputElement>) {
    setNewAssignmentName(event.target.value);
    if (selected !== undefined) {
      setBtnStatus(false);
    } else {
      setBtnStatus(true);
    }
  }
  function addAssignment(e: React.FormEvent) {
    const newAssignment = {
      assignmentId:
        assignmentList.length === 0
          ? 1
          : assignmentList[assignmentList.length - 1].assignmentId +
          1,
      assignmentName: newAssignmentName,
      completed: false,
      dueDate: selected,
    };
    const newAssignmentList = [...assignmentList, newAssignment];
    setAssignmentList(newAssignmentList);
    e.preventDefault();
    setNewAssignmentName("");
    setBtnStatus(true);
    setClickedDate(false);
    setSelected(undefined);
  }
  function deleteAssignment(assignmentId: number) {
    const newAssignmentList = assignmentList.filter(
      (assignment: Assignment) => assignment.assignmentId !== assignmentId
    );
    setAssignmentList(newAssignmentList);
  }
  function completeAssignment(assignmentId: number) {
    setAssignmentList(
      assignmentList.map((assignment: Assignment) => {
        if (assignment.assignmentId === assignmentId && !assignment.completed) {
          return { ...assignment, completed: true };
        } else if (
          assignment.assignmentId === assignmentId &&
          assignment.completed
        ) {
          return { ...assignment, completed: false };
        } else {
          return assignment;
        }
      })
    );
  }
  function selectDate(date: Date){
    setSelected(date);
    if (newAssignmentName !== "") {
      setBtnStatus(false);
    } else {
      setBtnStatus(true);
    }
  }

  return (
    <>
      <Header
        btnStatus={btnStatus}
        newAssignmentName={newAssignmentName}
        updateAssignmentName={updateAssignmentName}
        addAssignment={addAssignment}
        DayPicker={DayPicker}
        format={format}
        selected={selected}
        setSelected={setSelected}
        clickedDate={clickedDate}
        setClickedDate={setClickedDate}
        selectDate={selectDate}
      />
      <Assignments
        assignmentList={assignmentList}
        setAssignmentList={setAssignmentList}
        deleteAssignment={deleteAssignment}
        completeAssignment={completeAssignment}
        format={format}
      />
    </>
  );
}

export default App;
