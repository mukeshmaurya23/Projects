import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const TableComponent = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: 650,
        margin: "auto",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>John</TableCell>
            <TableCell>20</TableCell>
            <TableCell>USA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>John</TableCell>
            <TableCell>20</TableCell>
            <TableCell>USA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>John</TableCell>
            <TableCell>20</TableCell>
            <TableCell>USA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>John</TableCell>
            <TableCell>20</TableCell>
            <TableCell>USA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5</TableCell>
            <TableCell>John</TableCell>
            <TableCell>20</TableCell>
            <TableCell>USA</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
