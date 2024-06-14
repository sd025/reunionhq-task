import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/DateRangePicker/styles/index.css";

const DatePicker = ({ value, onChange }) => {
  return (
    <DateRangePicker
      startText="Start"
      endText="End"
      value={value}
      onChange={(newValue) => onChange(newValue)}
      renderInput={(startProps, endProps) => (
        <>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> to </Box>
          <TextField {...endProps} />
        </>
      )}
    />
  );
};

export default DatePicker;
