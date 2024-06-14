import {
  Box,
  Button,
  IconButton,
  TextField,
  MenuItem,
  Slider,
  Stack,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import MultiSelect from "./Select";
import { useState } from "react";
import DatePicker from "./DatePicker";

const Filter = ({ table }) => {
  const [filters, setFilters] = useState({
    name: "",
    category: [],
    subcategory: "",
    createdAt: [null, null],
    updatedAt: [null, null],
    price: [0, 1000],
    sale_price: [0, 1000],
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      name: "",
      category: [],
      subcategory: "",
      createdAt: [null, null],
      updatedAt: [null, null],
      price: [0, 1000],
      sale_price: [0, 1000],
    });
  };

  const applyFilters = () => {
    table.setAllFilters([
      { id: 'name', value: filters.name },
      { id: 'category', value: filters.category },
      { id: 'subcategory', value: filters.subcategory },
      { id: 'createdAt', value: filters.createdAt },
      { id: 'updatedAt', value: filters.updatedAt },
      { id: 'price', value: filters.price },
      { id: 'sale_price', value: filters.sale_price },
    ]);
  };

  return (
    <Stack>
      <Box sx={{ width: "25vw" }} p={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <h2>Filtering Options</h2>
          <IconButton>
            <CancelIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: "auto",
            height: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Name Filter */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "#e5e4e2",
              my: 1,
              p: 1,
              borderRadius: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1>Name</h1>
              <IconButton onClick={() => handleFilterChange("name", "")}>
                <RestartAltIcon />
              </IconButton>
            </Box>
            <TextField
              size="small"
              sx={{ backgroundColor: "white" }}
              id="name"
              value={filters.name}
              onChange={(e) => handleFilterChange("name", e.target.value)}
            />
          </Box>
          
          {/* Category Filter */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "#e5e4e2",
              my: 1,
              p: 1,
              borderRadius: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1>Category</h1>
              <RestartAltIcon onClick={() => handleFilterChange("category", [])} />
            </Box>
            <MultiSelect
              value={filters.category}
              onChange={(value) => handleFilterChange("category", value)}
            />
          </Box>
          
          {/* Subcategory Filter */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "#e5e4e2",
              my: 1,
              p: 1,
              borderRadius: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1>Subcategory</h1>
              <RestartAltIcon onClick={() => handleFilterChange("subcategory", "")} />
            </Box>
            <TextField
              select
              size="small"
              sx={{ backgroundColor: "white" }}
              id="subcategory"
              value={filters.subcategory}
              onChange={(e) => handleFilterChange("subcategory", e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              {/* Add your subcategory options here */}
            </TextField>
          </Box>
          
          {/* Created At Filter */}
          <Box
            sx={{ backgroundColor: "#e5e4e2", my: 1, p: 1, borderRadius: "5px" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1>Created At</h1>
              <IconButton onClick={() => handleFilterChange("createdAt", [null, null])}>
                <RestartAltIcon />
              </IconButton>
            </Box>
            <DatePicker
              value={filters.createdAt}
              onChange={(value) => handleFilterChange("createdAt", value)}
            />
          </Box>
          
          {/* Updated At Filter */}
          <Box
            sx={{ backgroundColor: "#e5e4e2", my: 1, p: 1, borderRadius: "5px" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1>Updated At</h1>
              <IconButton onClick={() => handleFilterChange("updatedAt", [null, null])}>
                <RestartAltIcon />
              </IconButton>
            </Box>
            <DatePicker
              value={filters.updatedAt}
              onChange={(value) => handleFilterChange("updatedAt", value)}
            />
          </Box>
          
          {/* Price Filter */}
          <Box
            sx={{ backgroundColor: "#e5e4e2", my: 1, p: 1, borderRadius: "5px" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1>Price</h1>
              <IconButton onClick={() => handleFilterChange("price", [0, 1000])}>
                <RestartAltIcon />
              </IconButton>
            </Box>
            <Slider
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              step={10}
              value={filters.price}
              onChange={(e, value) => handleFilterChange("price", value)}
            />
            <span>
              ${filters.price[0]} - ${filters.price[1]}
            </span>
          </Box>
          
          {/* Sale Price Filter */}
          <Box
            sx={{ backgroundColor: "#e5e4e2", my: 1, p: 1, borderRadius: "5px" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1>Sale Price</h1>
              <IconButton onClick={() => handleFilterChange("sale_price", [0, 1000])}>
                <RestartAltIcon />
              </IconButton>
            </Box>
            <Slider
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              step={10}
              value={filters.sale_price}
              onChange={(e, value) => handleFilterChange("sale_price", value)}
            />
            <span>
              ${filters.sale_price[0]} - ${filters.sale_price[1]}
            </span>
          </Box>
        </Box>
        
        {/* Buttons to Clear and Apply Filters */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              width: "100%",
              backgroundColor: "white",
              color: "black",
              border: "1px solid blue",
              marginBottom: 1,
              marginTop: 4,
            }}
            onClick={clearFilters}
          >
            Clear Filters
          </Button>
          <Button
            sx={{
              width: "100%",
              backgroundColor: "blue",
              color: "black",
              border: "1px solid blue",
              marginBottom: 1,
              marginTop: 1,
            }}
            onClick={applyFilters}
          >
            Apply Filters
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Filter;
// import React, { useState } from 'react';
// import { Button, List, ListItem, Stack, TextField } from '@mui/material';
// import RestartAltIcon from '@mui/icons-material/RestartAlt';

// const FilterColumn = ({ table }) => {
//   const [filters, setFilters] = useState({});

//   const handleFilterChange = (columnId, value) => {
//     setFilters((prev) => ({ ...prev, [columnId]: value }));
//     table.setColumnFilters([{ id: columnId, value }]);
//   };

//   const clearFilters = () => {
//     setFilters({});
//     table.resetColumnFilters();
//   };

//   return (
//     <>
//       {table.getAllLeafColumns().map((column) => (
//         <Stack key={column.id} direction="row" alignItems="center">
//           <List sx={{ border: '1px solid #d9d9d9', margin: '2px', flex: 1 }}>
//             <ListItem sx={{ height: '30px' }}>
//               {column.id}
//               <TextField
//                 size="small"
//                 variant="outlined"
//                 value={filters[column.id] || ''}
//                 onChange={(e) => handleFilterChange(column.id, e.target.value)}
//                 sx={{ marginLeft: '10px', flex: 1 }}
//               />
//             </ListItem>
//           </List>
//         </Stack>
//       ))}
//       <Stack paddingTop={1}>
//         <Button
//           sx={{ height: '45px' }}
//           variant="outlined"
//           onClick={clearFilters}
//         >
//           Clear Filters
//         </Button>
//       </Stack>
//     </>
//   );
// };

// export default FilterColumn;
