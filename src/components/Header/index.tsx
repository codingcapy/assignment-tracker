/*
Author: Paul Kim A01273049
Date: October 18, 2023
Version: 1.0
Description: COMP 3013 Assignment Tracker Header Component
*/

import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { FiCalendar } from "react-icons/fi";
import { DayPickerProps } from "react-day-picker";

interface Props {
  btnStatus: boolean;
  newAssignmentName: string;
  updateAssignmentName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addAssignment: (e: React.FormEvent) => void;
  DayPicker: React.ComponentType<DayPickerProps>;
  selected: Date | undefined;
  clickedDate: boolean;
  setClickedDate: (clickedDate: boolean) => void;
  selectDate: (date: Date) => void;
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
          <props.DayPicker mode="single" selected={props.selected} onSelect={(date) => props.selectDate(date as Date)} />
        )}
        <button disabled={props.btnStatus}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
