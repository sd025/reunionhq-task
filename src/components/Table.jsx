import {
  MaterialReactTable,
  useMaterialReactTable,
  createMRTColumnHelper,
} from "material-react-table";
import { Box, IconButton } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useMemo, useState } from "react";
import { DATA } from "../utils/Data"
import moment from "moment";

const Example = () => {
  const data = DATA;
  const columnHelper = createMRTColumnHelper();

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 100,
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 100,
      },
      {
        accessorKey: "subcategory",
        header: "Sub Category",
        size: 100,
      },
      columnHelper.accessor("createdAt", {
        header: "Created At",
        Cell: ({ cell }) => {
          // Manipulate the data before rendering
          const date = cell.getValue();
          const formattedDate = moment(date).format("DD-MMM-YYYY");
          return <div>{formattedDate}</div>;
        },
      }),
      columnHelper.accessor("updatedAt", {
        header: "Updated At",
        Cell: ({ cell }) => {
          // Manipulate the date before rendering
          const date = cell.getValue();
          const formattedDate = moment(date).format("DD-MMM-YYYY");
          return <div>{formattedDate}</div>;
        },
      }),
      {
        accessorKey: "price",
        header: "Price",
        size: 100,
      },
      {
        accessorKey: "sale_price",
        header: "Sale Price",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    renderToolbarInternalActions: ({ table }) => (
      <Box>
        <IconButton
          onClick={() => {
            setShowFilterSideBar(true);
          }}
        >
          <FilterListIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setShowSortSideBar(true);
          }}
        >
          <SwapVertIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setShowColumnSideBar(true);
          }}
        >
          <VisibilityIcon />
        </IconButton>
      </Box>
    ),
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <MaterialReactTable table={table} />
      {/* <SideBarColumnSelector
        open={showColumnSideBar}
        table={table}
        setShowColumnSideBar={() => setShowColumnSideBar(false)}
      />
      <SideBarSorting
        open={showSortSideBar}
        table={table}
        columns={columns}
        setShowSortSideBar={() => setShowSortSideBar(false)}
      />
      <SideBarFilter
        open={showFilterSideBar}
        table={table}
        columns={columns}
        setShowFilterSideBar={() => setShowFilterSideBar(false)}
      /> */}
    </div>
  );
};

export default Example;
