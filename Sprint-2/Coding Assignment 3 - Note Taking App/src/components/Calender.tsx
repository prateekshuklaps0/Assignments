// src/Calendar.js
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
      />
      {selectedDate && (
        <div className="note-entry">
          <h3>Note Entry</h3>
          <input type="text" placeholder="Title" />
          <textarea placeholder="Body Content"></textarea>
          <button>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
