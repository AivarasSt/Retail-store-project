import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled, TableContainer } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Watch from 'types/watch';
import ProductService from 'services/product-service';
import Button from '@mui/material/Button';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  width: '100%',
  color: theme.palette.secondary.main,
  ':hover': {
    color: theme.palette.secondary.light,
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: '3vw',
  padding: '2vw',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5vw',
    padding: '1vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1vw',
    padding: '0.5vw',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '0.8vw',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  borderRadius: 0,
  ':hover': {
    boxShadow: `0px 1px ${theme.palette.secondary.main}`,
  },
}));

const Products: React.FC = () => {
  const [reload, setReload] = useState<boolean>(false);
  const [fetchedProducts, setFetchedProducts] = useState<Watch[]>([]);

  const fetchProducts = async () => {
    const products = await ProductService.getProducts();
    if (products) {
      setFetchedProducts(products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [reload]);

  const handleProductDelete = async (id: string) => {
    await ProductService.deleteProduct(id);
    setReload(!reload);
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }} />
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Brand</StyledTableCell>
            <StyledTableCell>Collection</StyledTableCell>
            <StyledTableCell>Sex</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell />
            <StyledTableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {fetchedProducts.map((product) => (
            (

              <TableRow key={product.id}>
                <StyledTableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
                  <img alt={product.title} src={product.images[0]} height="auto" width="50px" />
                </StyledTableCell>
                <StyledTableCell>{product.title}</StyledTableCell>
                <StyledTableCell>{product.brand.title}</StyledTableCell>
                <StyledTableCell>{product.collectionName.title}</StyledTableCell>
                <StyledTableCell>{product.sex}</StyledTableCell>
                <StyledTableCell>{`€${product.price}`}</StyledTableCell>
                <StyledTableCell align="right">
                  <StyledNavLink to={`/admin/editproduct/${product.id}`}>
                    Edit
                  </StyledNavLink>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <StyledButton onClick={() => handleProductDelete(product.id)}>
                    Delete
                  </StyledButton>
                </StyledTableCell>
              </TableRow>
            )
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Products;
