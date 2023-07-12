import { NavLink } from "react-router-dom";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, description, brand, supplier, serialNo, dateOfAcquisition, status, location) {
  return { id, description, brand, supplier, serialNo, dateOfAcquisition, status, location };
}

const rows = [
  createData(1, "Smart TV", "Samsung", "SUPPLI3R", "DRG2343", "June 24, 2023", "status", "LB467"),
  createData(2, "Monitor", "Asus", "ASUS SUPPLIER", "GH232", "June 24, 2024", "status", "LB484"),
  createData(3, "Laptop", "HP", "HP Supplier", "HP9823", "July 12, 2023", "status", "LB789"),
  createData(4, "Smartphone", "Apple", "Apple Supplier", "APPL234", "August 5, 2023", "status", "LB632"),
  createData(5, "Headphones", "Sony", "Sony Supplier", "SNY543", "September 18, 2023", "status", "LB921"),
  createData(6, "Tablet", "Lenovo", "Lenovo Supplier", "LNV654", "October 3, 2023", "status", "LB123"),
  createData(7, "Camera", "Canon", "Canon Supplier", "CN6789", "November 21, 2023", "status", "LB456")
];

export default function ManageEquipment() {
  return (
    <>
      <div>
        <h2>Manage Equipment</h2>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Item Description</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Supplier</TableCell>
              <TableCell align="right">Serial No.</TableCell>
              <TableCell align="right">Date of Acquisition</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.brand}</TableCell>
                <TableCell align="right">{row.supplier}</TableCell>
                <TableCell align="right">{row.serialNo}</TableCell>
                <TableCell align="right">{row.dateOfAcquisition}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
