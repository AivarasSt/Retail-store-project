import React, {
  ChangeEvent, useEffect, useState,
} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  alpha,
  styled, TableContainer, TablePagination, Typography,
} from '@mui/material';
import OrderService from 'services/order-service';
import Order from 'types/order';

const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
  color: theme.palette.common.white,
  '.MuiTablePagination-actions': {
    color: theme.palette.secondary.main,
  },
  '.MuiTablePagination-actions .Mui-disabled': {
    color: theme.palette.common.white,
  },
  '.MuiTablePagination-selectIcon': {
    color: theme.palette.secondary.main,
  },
}));

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [tablePage, setTablePage] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [tableOrder] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const data = await
    OrderService.getOrders(tablePage + 1, rowsPerPage, tableOrder);
    setOrders(data.fetchedOrders);
    setOrderCount(data.fetchedOrderCount);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [tablePage, rowsPerPage]);

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => {
    setTablePage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <>
      <Typography component="h2" variant="h6" sx={{ py: '1.5vw' }} gutterBottom>Recent Orders</Typography>
      {!loading
        ? (
          <>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Surname</TableCell>
                    <TableCell>Phone Num</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell align="right">Country</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.name}</TableCell>
                      <TableCell>{order.surname}</TableCell>
                      <TableCell>{order.phoneNumber}</TableCell>
                      <TableCell>{order.city}</TableCell>
                      <TableCell align="right">{order.country}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              component="div"
              count={orderCount}
              rowsPerPage={rowsPerPage}
              page={tablePage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Products per page:"
              SelectProps={{
                MenuProps: {
                  sx: (theme) => ({
                    '& .MuiList-root': {
                      backgroundColor: theme.palette.primary.main,
                      border: `1px solid ${alpha(theme.palette.secondary.main, 0.5)}`,
                    },
                    '& .MuiList-root .MuiMenuItem-root.Mui-selected': {
                      color: theme.palette.secondary.main,
                    },
                    '& .MuiList-root .MuiMenuItem-root:hover': {
                      color: theme.palette.secondary.main,
                    },
                  }),
                },
              }}
            />
          </>
        )
        : null}
    </>
  );
};

export default Orders;
