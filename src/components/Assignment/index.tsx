import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs"

interface Props {
  assignmentId: number
  assignmentName: string,
  completed: boolean
  deleteAssignment: any
  completeAssignment: any
  completedState: any
  setCompletedState: any
  updateCompleted: any
}

export function Assignment(props: Props) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={() => {
        props.completeAssignment(props.assignmentId)
        props.updateCompleted()
      }}>
        <div>{props.completed && <BsFillCheckCircleFill />}</div>
      </button>

      <p className={props.completed ? styles.textCompleted : ""}>{props.assignmentName}</p>

      <button className={styles.deleteButton} onClick={() => {
        props.deleteAssignment(props.assignmentId)
        props.updateCompleted()
      }}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
