import { Button, FormControl, InputLabel, MenuItem, NativeSelect, Select, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const CreateGroups = ({ table, setColHeaderGroup }) => {
  const [colHeaderName, setColHeaderName] = useState([]);

  const handleChange = (event) => {
    setColHeaderName(event.target.value);
  };

  const handleClearGrouping = () => {
    setColHeaderGroup(colHeaderName)
  }
  // const handleClearGrouping = () => {
  //   setColHeaderName('')
  // }

  return (
    <>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={colHeaderName}
          onChange={handleChange}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            headerGroup.headers.filter((header) => header.id === 'category' || header.id === 'subcategory')
            .map((header) => (
              <MenuItem onClick={header.column.getToggleGroupingHandler()} key={header.id} value={header.id}>
              {header.id}
              </MenuItem>
            ))
          ))}
          {/* <MenuItem value={'category'}>Category</MenuItem>
          <MenuItem value={'subcategory'}>Subcategory</MenuItem> */}
        </Select>
      </FormControl>

      <Stack paddingTop={12}>
        <Button sx={{ height: '45px' }} variant="outlined"
          onClick={handleClearGrouping}
        >Clear sort</Button>
      </Stack>
      <Stack paddingTop={2}>
        <Button sx={{ height: '45px' }} variant="contained"
        >Apply</Button>
      </Stack>
    </>
  );
};

export default CreateGroups;