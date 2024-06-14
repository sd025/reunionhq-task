
import { MRT_ExpandAllButton, MRT_ExpandButton, useMaterialReactTable } from 'material-react-table';
import React, { useEffect, useRef, useState } from 'react'
import TableHook from '../hooks/TableHook';

export default function useMaterialTableHook() {
  const { columns, items, error, isLoading } = TableHook();
  const [groupedColumnMode, setGroupedColumnMode] = useState('reorder');
  const [colHeaderGroup, setColHeaderGroup] = useState([])
  const [colGroup, setColGroup] = useState([])

  console.log('TH', colHeaderGroup);

  useEffect(() => {
    if (colHeaderGroup) {
      setColGroup(colHeaderGroup);
    }
  }, [colHeaderGroup]);

  const table = useMaterialReactTable({
    columns,
    data: items || [],
    enableColumnActions: false,
    enableFacetedValues: true,
    initialState: {
      showColumnFilters: false,
      showGlobalFilter: true,
      enableGlobalFilterModes: true,
      grouping:colHeaderGroup,
      expanded: true,
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
    groupedColumnMode,
    enableGrouping:true,
    enableColumnDragging: false,
  });
  return (
    { table, error, isLoading, setColHeaderGroup}
  )
}
