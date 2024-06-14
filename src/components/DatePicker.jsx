import React, { useState } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/DateRangePicker/styles/index.css';

const DatePicker = ({ onChange }) => {
  const [dateRange, setDateRange] = useState([null, null]);

  const handleDateChange = (value) => {
    setDateRange(value);
    onChange(value);
  };

  return (
    <DateRangePicker
      value={dateRange}
      onChange={handleDateChange}
      showOneCalendar
    />
  );
};

export default DatePicker;
