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
  const currentDate = new Date()
  const dueDate = props.dueDate ? new Date(props.dueDate) : null
  let dueDateString = ''
  let daysDiff = 0
  if (dueDate) {
    const timeDiff = dueDate?.getTime() - currentDate.getTime()
    daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    if (daysDiff > 1) {
      dueDateString = `${daysDiff} days`
    }
    else if (daysDiff === 1){
      dueDateString = `${daysDiff} day`
    }
    else if (daysDiff === 0){
      dueDateString = `Today`
    }
    else {
      dueDateString = 'Past Due'
    }
  }
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
      <div className={daysDiff > 1 ? styles.dueDate: styles.urgentDue}>Due: {dueDateString}</div>
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
