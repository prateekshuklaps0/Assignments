// src/Calendar.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { addNote } from "../redux/actions";

const Calendar = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    if (selectedDate && title && body) {
      const timestamp = new Date();
      dispatch(addNote({ title, body, timestamp }));
      setTitle("");
      setBody("");
    }
  };

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        filterDate={(date) => date >= new Date()}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
      />
      {selectedDate && (
        <div className="note-entry">
          <h3>Note Entry</h3>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Body Content"
          ></textarea>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
