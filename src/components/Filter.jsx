import {
    Box,
    Drawer,
    Button,
    IconButton,
    TextField,
    MenuItem,
    Slider,
  } from "@mui/material";
  import RestartAltIcon from "@mui/icons-material/RestartAlt";
  import CancelIcon from "@mui/icons-material/Cancel";
  import MultiSelect from "./Select";
  import { useState } from "react";
  import DatePicker from "./DatePicker";
  
  const Filter = ({ open, table, setShowFilterSideBar }) => {
    const [textInput, setTextInput] = useState("");
    const [subcatInput, setSubCatInput] = useState("");
    const [created, setCreated] = useState([null, null]);
    const [updated, setUpdated] = useState([null, null]);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [salepriceRange, setSalePriceRange] = useState([0, 1000]);
  
    const applyFilters = () => {
      const filters = {
        textInput,
        subcatInput,
        created,
        updated,
        priceRange,
        salepriceRange,
      };
  
      table.setGlobalFilter(filters);
      setShowFilterSideBar();
    };
  
    return (
      <Drawer anchor="right" open={open}>
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
            <IconButton onClick={setShowFilterSideBar}>
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
                <IconButton onClick={() => setTextInput("")}>
                  <RestartAltIcon />
                </IconButton>
              </Box>
              <TextField
                size="small"
                sx={{ backgroundColor: "white" }}
                value={textInput}
                id="name"
                onChange={(e) => setTextInput(e.target.value)}
              />
            </Box>
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
                  <RestartAltIcon />
              </Box>
              <MultiSelect />
            </Box>
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
                <RestartAltIcon onClick={() => setSubCatInput("")} />
              </Box>
              <TextField
                select
                size="small"
                sx={{ backgroundColor: "white" }}
                id="name"
                placeholder="hello"
                value={subcatInput}
                onChange={(e) => setSubCatInput(e.target.value)}
              >
                <MenuItem value="Cat One">Cat One</MenuItem>
                <MenuItem value="Cat Two">Cat Two</MenuItem>
              </TextField>
            </Box>
          </Box>
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
              <IconButton onClick={() => setCreated([null, null])}>
                <RestartAltIcon />
              </IconButton>
            </Box>
            <DatePicker onChange={(value) => setCreated(value)} />
          </Box>
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
              <IconButton onClick={() => setUpdated([null, null])}>
                <RestartAltIcon />
              </IconButton>
            </Box>
            <DatePicker onChange={(value) => setUpdated(value)} />
          </Box>
  
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
              <IconButton onClick={() => setPriceRange([0, 1000])}>
                <RestartAltIcon />
              </IconButton>
            </Box>
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              step={10}
            />
            <span>${priceRange[0]} - ${priceRange[1]}</span>
          </Box>
  
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
              <IconButton onClick={() => setSalePriceRange([0, 1000])}>
                <RestartAltIcon />
              </IconButton>
            </Box>
            <Slider
              value={salepriceRange}
              onChange={(e, newValue) => setSalePriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              step={10}
            />
            <span>${salepriceRange[0]} - ${salepriceRange[1]}</span>
          </Box>
        </Box>
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
            onClick={() => {
              setTextInput("");
              setSubCatInput("");
              setCreated([null, null]);
              setUpdated([null, null]);
              setPriceRange([0, 1000]);
              setSalePriceRange([0, 1000]);
            }}
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
      </Drawer>
    );
  };
  
  export default Filter;
  