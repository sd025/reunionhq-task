import { forwardRef, useEffect, useMemo, useState } from "react";
import {
  MRT_GlobalFilterTextField,
  MRT_ShowHideColumnsButton,
  MRT_TableContainer,
  MRT_ToggleFiltersButton,
  getAllLeafColumnDefs,
  useMaterialReactTable,
  MRT_TablePagination,
} from "material-react-table";

import { Box, Drawer, IconButton, Stack, Tooltip } from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import AnchorTemporaryDrawer from "../components/Drawer";
import useMaterialTableHook from "./useMaterialTableHook";
import FilterListIcon from "@mui/icons-material/FilterList";
import LayersIcon from "@mui/icons-material/Layers";

const DisplayTable = () => {
  const { table, isLoading, setColHeaderGroup } = useMaterialTableHook();
  const [openModal, setOpenModal] = useState(false);
  const [btnType, setBtnType] = useState();

  const handleShowHideCols = () => {
    setBtnType("showHideColsBtn");
    setOpenModal(true);
  };

  const handlesortColsBtn = () => {
    setBtnType("sortColsBtn");
    setOpenModal(true);
  };

  const handleFliterCols = () => {
    setBtnType("filterColsBtn");
    setOpenModal(true);
  };

  const handleCreateGroups = () => {
    setBtnType("createGroupsBtn");
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (isLoading) {
    return <div sx={{ color: "#000000", height: "100vh" }}>Loading</div>;
  }

  return (
    <>
      <Stack sx={{ m: "1rem 0" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "white",
            padding: "10px",
          }}
        >
          <MRT_GlobalFilterTextField table={table} />
          <Tooltip title="Hide/Show Columns">
            <IconButton onClick={handleShowHideCols}>
              <VisibilityOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Sort Columns">
            <IconButton onClick={handlesortColsBtn}>
              <SwapVertRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter Columns">
            <IconButton onClick={handleFliterCols}>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Create Groups">
            <IconButton onClick={handleCreateGroups}>
              <LayersIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <MRT_TableContainer table={table} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MRT_TablePagination table={table} />
        </Box>
      </Stack>

      <AnchorTemporaryDrawer
        isOpen={openModal}
        onClose={handleCloseModal}
        drawerContent={table}
        btnType={btnType}
        setColHeaderGroup={setColHeaderGroup}
      />
    </>
  );
};

export default DisplayTable;
