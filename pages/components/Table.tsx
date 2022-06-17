import * as React from 'react';
import Paper from '@mui/material/Paper';
import MaterialTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ActionMenu from './ActionMenu';

interface TableProps {
  handleActionMenuItemOnClick: (index: number) => void;
  render: (row: {}, col: {}) => JSX.Element;
  tableData: object[];
  tableHeader: object[];
}

export default function Table(props: TableProps) {
  const rows = props.tableData;
  const columns = props.tableHeader;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ borderRadius: '20px', width: '100%', overflow: 'hidden', marginBottom: "100px" }}>
      <TableContainer sx={{ maxHeight: "100%" }}>
        <MaterialTable aria-label="sticky table">
          <TableHead sx={{ backgroundColor: 'darkgrey' }}>
            <TableRow>
              {columns.map((column: any) => {
                if (column.show)
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontWeight: 'bold', color: 'white' }}
                    >
                      {column.label}
                    </TableCell>
                  )
              })}
              <TableCell style={{ fontWeight: 'bold', color: 'white' }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any, i: number) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column: any) => {
                      const renderRow = props.render(column, row);
                      if (column.show === true) {
                        return (
                          <TableCell sx={{ borderRight:'1px solid rgb(224, 224, 224)', fontWeight: 'bold' }} key={column.id} align={column.align}>
                            { renderRow }
                          </TableCell>
                        );
                      }
                    })}
                    <TableCell>
                      <ActionMenu actionMenuItemOnClick={ () => props.handleActionMenuItemOnClick(i) } />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </MaterialTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
