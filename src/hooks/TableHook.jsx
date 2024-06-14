

import { useQuery } from '@tanstack/react-query';
import { createMRTColumnHelper } from 'material-react-table';
import moment from 'moment';
import { useMemo } from 'react';


const TableHook = () => {
  const columnHelper = createMRTColumnHelper();

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id', 
        header: 'ID',
        size: 50,
      },
      {
        accessorKey: 'name', 
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'category', 
        header: 'Category',
        size: 100,
      },
      {
        accessorKey: 'subcategory', 
        header: 'Subcategory',
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
        accessorKey: 'price',
        header: 'Price',
        size: 100,
      },
      {
        accessorKey: 'sale_price',
        header: 'Sale Price',
        size: 100,
      },
    ],
    [],
  );

  const {
    data: items,
    error, isLoading
  } = useQuery({
    queryFn: () => fetch('Data.jsx').then((res) => res.json()),
    queryKey: ['items']
  });

  if (error) {
    console.error('Error fetching data:', error);
  }

  return { columns,items, error, isLoading }
}

export default TableHook;