import React from "react";
import { Button, List, ListItem, Stack } from "@mui/material";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";

const SortColumn = ({ table }) => {
  return (
    <>
      {table.getAllLeafColumns().map((column) => {
        return (
          <Stack key={column.id}>
            <List
              sx={{ border: "1px solid #d9d9d9", margin: "2px" }}
              onClick={column.getToggleSortingHandler()}
            >
              <ListItem sx={{ height: "30px" }}>
                {column.id}
                <SwapVertRoundedIcon
                  sx={{ color: "#d9d9d9", marginLeft: "10px" }}
                />
              </ListItem>
            </List>
          </Stack>
        );
      })}
      <Stack paddingTop={1}>
        <Button
          sx={{ height: "45px" }}
          variant="outlined"
          onClick={() => table.resetSorting(true)}
        >
          Clear sort
        </Button>
      </Stack>
    </>
  );
};

export default SortColumn;
