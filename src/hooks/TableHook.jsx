

import { useQuery } from '@tanstack/react-query';
import { createMRTColumnHelper } from 'material-react-table';
import moment from 'moment';
import { useMemo } from 'react';


const TableHook = () => {
  const columnHelper = createMRTColumnHelper();
  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        header: 'ID',
        size: 50,
      }),
      columnHelper.accessor('name', {
        header: 'Name',
        size: 150,
      }),
      columnHelper.accessor('category', {
        header: 'Category',
        size: 100,
      }),
      columnHelper.accessor('subcategory', {
        header: 'Subcategory',
        size: 100,
      }),
      columnHelper.accessor('createdAt', {
        header: 'Created At',
        Cell: ({ cell }) => {
          const date = cell.getValue();
          const formattedDate = moment(date).format('DD-MMM-YYYY');
          return <div>{formattedDate}</div>;
        },
      }),
      columnHelper.accessor('updatedAt', {
        header: 'Updated At',
        Cell: ({ cell }) => {
          const date = cell.getValue();
          const formattedDate = moment(date).format('DD-MMM-YYYY');
          return <div>{formattedDate}</div>;
        },
      }),
      columnHelper.accessor('price', {
        header: 'Price',
        size: 100,
      }),
      columnHelper.accessor('sale_price', {
        header: 'Sale Price',
        size: 100,
      }),
    ],
    []
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

  return { columns, items, error, isLoading }
}

export default TableHook;