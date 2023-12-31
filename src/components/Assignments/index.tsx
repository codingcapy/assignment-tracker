/*
Author: Paul Kim A01273049
Date: October 18, 2023
Version: 1.0
Description: COMP 3013 Assignment Tracker Assignments Component
*/

import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Assignment {
  assignmentId: number;
  assignmentName: string;
  completed: boolean;
  dueDate: number | Date | undefined;
}

interface Props {
  assignmentList: Assignment[];
  deleteAssignment: (assignmentId: number) => void;
  completeAssignment: (assignmentId: number) => void;
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
          <span>
            {
              props.assignmentList.filter((assignment) => assignment.completed)
                .length
            }{" "}
            of {props.assignmentList.length}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {props.assignmentList.map((assignment) => (
          <Assignment
            key={assignment.assignmentId}
            assignmentId={assignment.assignmentId}
            assignmentName={assignment.assignmentName}
            completed={assignment.completed}
            deleteAssignment={props.deleteAssignment}
            completeAssignment={props.completeAssignment}
            dueDate={assignment.dueDate}
          />
        ))}
      </div>
    </section>
  );
}
