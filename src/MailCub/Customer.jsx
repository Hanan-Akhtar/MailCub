import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SearchBar from './CustomerSerach';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

const columns = [
  { id: '_id', label: 'ID', minWidth: 170 },
  { id: 'first_name', label: 'First Name', minWidth: 100 },
  { id: 'last_name', label: 'Last Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'industry_type', label: 'Industry Type', minWidth: 170 },
  { id: 'account_status', label: 'Account Status', minWidth: 170 },
  { id: 'customer_type', label: 'Customer Type', minWidth: 170 },
  { id: 'createdAt', label: 'Created At', minWidth: 170 },
];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'x-sh-auth': token,
      };

      const response = await axios.post(
        'http://146.190.164.174:4000/api/customer/get_customers',
        {},
        { headers: headers }
      );
      setCustomers(response.data.customer);
    } catch (error) {
      console.error('Error fetching customers:', error.response);
    }
  };

  const handleAddCustomer = async () => {
    try {
      // Navigate to the add customer page
      navigate('/addCustomer');
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  const handleDeleteCustomer = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'x-sh-auth': token,
      };
  
      const response = await axios.delete(
        `http://146.190.164.174:4000/api/customer/delete_customer/${userId}`,
        { headers: headers }
      );
  
      if (response.status === 200) {
        fetchCustomers();
      } else {
        console.error('Failed to delete customer:', response.data);
      }
    } catch (error) {
      console.error('Error deleting customer:', error.response);
    }
  };

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'end', marginBottom: '30px' }}>
        <Button
          onClick={handleAddCustomer}
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: '#00A95A',
            color: 'white',
            '&:hover': {
              backgroundColor: '#00753e',
            },
          }}
        >
          Add Customer
        </Button>
      </div>

      <div className="d-flex align-item-center justify-content-between" style={{ marginBottom: '30px' }}>
        <h1>Customer</h1>
        <SearchBar />
      </div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDeleteCustomer(row.user_id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={customers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
