import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { FiCalendar } from "react-icons/fi";

interface Props {
  btnStatus: boolean
  newAssignmentName: string
  updateAssignmentName: (event: React.ChangeEvent<HTMLInputElement>) => void
  addAssignment: (e: React.FormEvent) => void
  DayPicker: any
  format: any
  selected: any
  setSelected: any
  clickedDate: boolean
  setClickedDate: (clickedDate: boolean) => void
}

export function Header(props: Props) {
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={props.addAssignment}>
        <input
          placeholder="Add a new assignment"
          type="text"
          onChange={props.updateAssignmentName}
          value={props.newAssignmentName}
        />
        <div
          className={styles.calendar}
          onClick={() => props.setClickedDate(!props.clickedDate)}
        >
          <FiCalendar size={25} />
        </div>
        {props.clickedDate && (
          <props.DayPicker mode="single" selected={props.selected} onSelect={props.setSelected} />
        )}
        <button disabled={props.btnStatus}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
