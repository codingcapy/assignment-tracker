import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface Props {
  assignmentId: number;
  assignmentName: string;
  completed: boolean;
  deleteAssignment: (assignmentId: number) => void;
  completeAssignment: (assignmentId: number) => void;
  dueDate: number | Date | undefined
  format: any
}

export function Assignment(props: Props) {
  return (
    <div className={styles.assignment}>
      <button
        className={styles.checkContainer}
        onClick={() => {
          props.completeAssignment(props.assignmentId);
        }}
      >
        <div>{props.completed && <BsFillCheckCircleFill />}</div>
      </button>
      <p className={props.completed ? styles.textCompleted : ""}>
        {props.assignmentName}
      </p>
      <div className={styles.dueDate}>Due: {props.format(props.dueDate, 'PP')}</div>
      <button
        className={styles.deleteButton}
        onClick={() => {
          props.deleteAssignment(props.assignmentId);
        }}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
