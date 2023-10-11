import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Props {
  assignmentList: any,
  setAssignmentList: any
  updateCompleted: any
  completedAssignments: any
  deleteAssignment: any
  completeAssignment:any
  completedState:any
}

export function Assignments(props: Props) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{props.assignmentList.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{props.completedAssignments} of {props.assignmentList.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {props.assignmentList.map((assignment: any) => <Assignment key={assignment.assignmentId} assignmentId={assignment.assignmentId} assignmentName={assignment.assignmentName} completed={assignment.completed} deleteAssignment={props.deleteAssignment} completeAssignment={props.completeAssignment} completedState={props.completedState} updateCompleted={props.updateCompleted} />)}
      </div>
    </section>
  );
}
