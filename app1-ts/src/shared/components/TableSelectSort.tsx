/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
  TableSelectAll,
  TableSelectRow,
} from 'carbon-components-react';

const TableSelectSort = ({ rows, headers }): JSX.Element => {
  return (
    <DataTable
      isSortable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
        getSelectionProps
      }) => (
        <TableContainer
          title="Data table"
          description="With selection">
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableSelectAll {...getSelectionProps()} />
                {headers.map(header => (
                  <TableHeader  {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow  {...getRowProps({ row })}>
                  <TableSelectRow {...getSelectionProps({ row })} />
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default TableSelectSort;