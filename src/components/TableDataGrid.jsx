import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import InfoIcon from "@mui/icons-material/Info";
import "./styles.css";
import {
  Box,
  Collapse,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
const TableDataGrid = () => {
  const [openRowId, setOpenRowId] = useState(null);

  const renderCellWithDropdown = (params) => (
    <div
      style={{
        backgroundColor: "#4E7691",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      onClick={() =>
        setOpenRowId((prevId) =>
          prevId === params.row.id ? null : params.row.id
        )
      }
    >
      {openRowId === params.row.id ? (
        <KeyboardArrowUp />
      ) : (
        <KeyboardArrowDown />
      )}
      {params.value}
    </div>
  );

  const columns = [
    {
      sortable: false,
      renderCell: renderCellWithDropdown,
    },
    {
      field: "airline",
      headerName: "AIRLINE",
      width: 180,
      sortable: false,
    },
    {
      field: "rfp",
      headerName: "RFP TITLE/VERSION",
      width: 200,
      sortable: false,
    },
    {
      field: "city",
      headerName: "CITY, COUNTRY",
      width: 200,
      sortable: false,
    },
    {
      field: "airport",
      headerName: "AIRPORT",
      width: 150,
      sortable: false,
    },
    {
      field: "updated",
      headerName: "UPDATED ON",
      width: 180,
      sortable: false,
    },
    {
      field: "room",
      headerName: "ROOMS NIGHTS / DAY",
      width: 180,
      sortable: false,
    },
    {
      field: "rfpStatus",
      headerName: "RFP STATUS",
      width: 125,
      sortable: false,
    },
  ];
  const rows = [
    {
      id: 1,
      airline: "Airline 1",
      rfp: "RFP Title 1",
      city: "City 1",
      airport: "Airport 1",
      updated: "Updated 1",
      room: "Room 1",
      rfpStatus: "RFP Status 1",
    },
    {
      id: 2,
      airline: "Airline 2",
      rfp: "RFP Title 1",
      city: "City 1",
      airport: "Airport 1",
      updated: "Updated 1",
      room: "Room 1",
      rfpStatus: "RFP Status 1",
    },

    {
      id: 3,
      airline: "Airline 3",
      rfp: "RFP Title 1",
      city: "City 1",
      airport: "Airport 1",
      updated: "Updated 1",
      room: "Room 1",
      rfpStatus: "RFP Status 1",
    },
    {
      id: 4,
      airline: "Airline 4",
      rfp: "RFP Title 1",
      city: "City 1",
      airport: "Airport 1",
      updated: "Updated 1",
      room: "Room 1",
      rfpStatus: "RFP Status 1",
    },
    {
      id: 5,
      airline: "Airline 5",
      rfp: "RFP Title 1",
      city: "City 1",
      airport: "Airport 1",
      updated: "Updated 1",
      room: "Room 1",
      rfpStatus: "RFP Status 1",
    },
    {
      id: 6,
      airline: "Airline 6",
      rfp: "RFP Title 1",
      city: "City 1",
      airport: "Airport 1",
      updated: "Updated 1",
      room: "Room 1",
      rfpStatus: "RFP Status 1",
    },
    {
      id: 7,
      airline: "Airline 7",
      rfp: "RFP Title 1",
      city: "City 1",
      airport: "Airport 1",
      updated: "Updated 1",
      room: "Room 1",
      rfpStatus: "RFP Status 1",
    },
    {
      id: 8,
      airline: "Airline 8",
      rfp: "RFP Title 1",
      city: "City 1",
      airport: "Airport 1",
      updated: "Updated 1",
      room: "Room 1",
      rfpStatus: "RFP Status 1",
    },
    {
      id: 9,
      airline: "Airline 9",
      rfp: "RFP Title 1",
      city: "City 1",
      airport: "Airport 1",
      updated: "Updated 1",
      room: "Room 1",
      rfpStatus: "RFP Status 1",
    },
    {
      id: 10,
      airline: "Airline 10",
      rfp: "RFP Title 1",
      city: "City 1",
      airport: "Airport 1",
      updated: "Updated 1",
      room: "Room 1",
      rfpStatus: "RFP Status 1",
    },
  ];

  const CustomTypography = styled(Typography)({
    fontSize: "16px",
    fontWeight: "lighter",
    color: "#000000",
    padding: "13px",
  });

  return (
    <div
      style={{
        margin: "auto",
        padding: "60px",
      }}
    >
      <Paper variant="outlined" sx={{ borderRadius: "10px" }}>
        <CustomTypography>
          Closed RFPs{" "}
          <InfoIcon
            sx={{
              verticalAlign: "middle",
              marginLeft: "5px",
            }}
          />
        </CustomTypography>
        <DataGrid
          rows={rows}
          columns={columns}
          disableSelectionOnClick={true}
          disableColumnMenu={true}
          disableColumnSelector={true}
          disableColumnFilter={true}
          sx={{
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none !important",
              border: "none !important",
            },
            ".MuiDataGrid-columnSeparator": {
              display: "none",
              outline: "none !important",
            },
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Paper>
    </div>
  );
};

export default TableDataGrid;
