import {
  MaterialReactTable,
  useMaterialReactTable,
  createMRTColumnHelper,
} from "material-react-table";
import { Box, IconButton } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FilterListIcon from "@mui/icons-material/FilterList";
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import { useMemo, useState } from "react";
import { DATA } from "../../public/Data";
import moment from "moment";
import Selector from "./Hide";
import Sorting from "./Sorting";

const Table = () => {
  const data = DATA;
  const columnHelper = createMRTColumnHelper();

  const [showSelector, setShowSelector] = useState(false);
  const [showSort, setShowSort] = useState(false);

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
    enableFacetedValues: true,
    initialState: {
      showColumnFilters: false,
      showGlobalFilter: true,
    },
    enablePagination: true,
    muiPaginationProps: {
      color: "standard",
      shape: "rounded",
      showRowsPerPage: false,
      variant: "outlined",
    },
    paginationDisplayMode: "pages",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    renderToolbarInternalActions: ( table ) => (
      <Box>
        <IconButton
          onClick={() => {
            setShowSelector(true);
          }}
        >
          <VisibilityOutlinedIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setShowSort(true);
          }}
        >
          <SwapVertIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setShowFilter(true);
          }}
        >
          <FilterListIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setShowOrder(true);
          }}
        >
          <LayersOutlinedIcon />
        </IconButton>
      </Box>
    ),
  });

  console.log('Table Columns:', columns); // Log columns to verify data


  return (
    <div style={{ height: 400, width: "100%" }}>
      <MaterialReactTable table={table} />
      <Sorting
        open={showSort}
        table={table}
        setShowSort={() => setShowSort(false)}
      />
      <Selector
        open={showSelector}
        table={table}
        setShowSelector={() => setShowSelector(false)}
      />
    </div>
  );
};

export default Table;
