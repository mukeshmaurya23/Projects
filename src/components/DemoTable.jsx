import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { TablePagination } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import styled from "@emotion/styled";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { setDropdown, toggleDropdown } from "../store/OpenDropdownSlice";
function createData(airline, rpf, city, airport, updated, room, rfpStatus) {
  return {
    airline,
    rpf,
    city,
    airport,
    updated,
    room,
    rfpStatus,
    history: [
      {
        round: "Round 1",
        createdOn: "2020-01-05",
        roundStatus: "Open",
        bidStatus: "Submitted",
        bidDeadline: "2020-01-05",
        bidSubmission: "2020-01-05",
      },
      {
        round: "Round 2 ",
        createdOn: "2020-01-05",
        roundStatus: "Open",
        bidStatus: "closed",
        bidDeadline: "2020-01-05",
        bidSubmission: "2020-01-05",
      },
      {
        round: "Round 3",
        createdOn: "2020-01-05",
        roundStatus: "Open",
        bidStatus: "closed",
        bidDeadline: "2020-01-05",
        bidSubmission: "2020-01-05",
      },
    ],
  };
}
const rows = [
  createData(
    "Nilesh Airline",
    "Nilesh RFP Title",
    "Nilesh City 1",
    "Nilesh Airport 1",
    "Nilesh Updated 1",
    "Nilesh Room 1",
    "Nilesh RFP Status 1"
  ),
  createData(
    "Mukesh Airline",
    "Mukesh RFP Title",
    "Mukesh City 1",
    "Mukesh Airport 1",
    "Mukesh Updated 1",
    "Mukesh Room 1",
    "Mukesh RFP Status 1"
  ),
  createData(
    "Abhay Airline",
    "Abhay RFP Title 1",
    "Abhay City 1",
    "Abhay Airport 1",
    "Abhay Updated 1",
    "Abhay Room 1",
    "Abhay RFP Status 1"
  ),
  createData(
    "Bank Airline",
    "Bank RFP Title 1",
    "Bank City 1",
    "Bank Airport 1",
    "Bank Updated 1",
    "Bank Room 1",
    "Bank RFP Status 1"
  ),
  createData(
    "Fake Airline",
    "Fake RFP Title 1",
    "Fake City 1",
    "Fake Airport 1",
    "Fake Updated 1",
    "Fake Room 1",
    "Fake RFP Status 1"
  ),
  createData(
    "Dummy Airline",
    "Dummy RFP Title 1",
    "Dummy City 1",
    "Dummy Airport 1",
    "Dummy Updated 1",
    "Dummy Room 1",
    "Dummy RFP Status 1"
  ),
  createData(
    "Zoho Airline",
    "Zoho RFP Title 1",
    "Zoho City 1",
    "Zoho Airport 1",
    "Zoho Updated 1",
    "Zoho Room 1",
    "Zoho RFP Status 1"
  ),
];

const CustomTableCell = styled(TableCell)({
  color: "#FFFFFF",
  fontSize: "15px",
});
function EditableTableCell({ value, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  const handleCellClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onSave(editedValue);
  };

  const handleChange = (event) => {
    setEditedValue(event.target.value);
  };

  return (
    <TableCell
      sx={{ borderBottom: "none", cursor: "pointer" }}
      onClick={handleCellClick}
      onBlur={handleBlur}
    >
      {isEditing ? (
        <input
          style={{
            border: "none",
            outline: "none",
          }}
          type="text"
          value={editedValue}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        value
      )}
    </TableCell>
  );
}

function Row(props) {
  const { row, index } = props;
  //const [open, setOpen] = useState(false);
  // const isOpen = useSelector((state) => state.openDropdown.isOpen);
  const isOpen = useSelector((state) => state.openDropdown.isOpenArray[index]);
  const [newRowValue, setNewRowValue] = useState(row);
  console.log(newRowValue, "newRowValue");
  const dispatch = useDispatch();
  useEffect(() => {
    setNewRowValue(row);
  }, [row]);
  const handleAirLineSave = (newValue) => {
    console.log(newValue);
    setNewRowValue((prev) => ({
      ...prev,
      airline: newValue,
    }));
  };
  const handleRfpSave = (newValue) => {
    setNewRowValue((prev) => ({
      ...prev,
      rpf: newValue,
    }));
  };
  const handleCitySave = (newValue) => {
    setNewRowValue((prev) => ({
      ...prev,
      city: newValue,
    }));
  };
  const handleAirportSave = (newValue) => {
    setNewRowValue((prev) => ({
      ...prev,
      airport: newValue,
    }));
  };
  const handleUpdatedSave = (newValue) => {
    setNewRowValue((prev) => ({
      ...prev,
      updated: newValue,
    }));
  };
  const handleRoomSave = (newValue) => {
    setNewRowValue((prev) => ({
      ...prev,
      room: newValue,
    }));
  };
  const handleRfpStatusSave = (newValue) => {
    setNewRowValue((prev) => ({
      ...prev,
      rfpStatus: newValue,
    }));
  };

  console.log(newRowValue, "newRowValue2222");
  return (
    <>
      <TableRow>
        <TableCell sx={{ borderBottom: "none" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            style={{
              backgroundColor: "#4E7691",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => dispatch(toggleDropdown(index))}
          >
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <EditableTableCell
          value={newRowValue.airline}
          onSave={handleAirLineSave}
          sx={{ borderBottom: "none" }}
        ></EditableTableCell>
        <EditableTableCell
          value={newRowValue.rpf}
          onSave={handleRfpSave}
          sx={{ borderBottom: "none" }}
        ></EditableTableCell>
        <EditableTableCell
          value={newRowValue.city}
          onSave={handleCitySave}
          sx={{ borderBottom: "none" }}
        ></EditableTableCell>
        <EditableTableCell
          value={newRowValue.airport}
          onSave={handleAirportSave}
          sx={{ borderBottom: "none" }}
        ></EditableTableCell>
        <EditableTableCell
          value={newRowValue.updated}
          onSave={handleUpdatedSave}
          sx={{ borderBottom: "none" }}
        ></EditableTableCell>
        <EditableTableCell
          value={newRowValue.room}
          onSave={handleRoomSave}
          sx={{ borderBottom: "none" }}
        ></EditableTableCell>
        <EditableTableCell
          value={newRowValue.rfpStatus}
          onSave={handleRfpStatusSave}
          sx={{ borderBottom: "none" }}
        ></EditableTableCell>
      </TableRow>
      <TableRow
        sx={{
          position: "relative",
        }}
      >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Paper
              variant="outlined"
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "88px",
                width: "92%",
                marginRight: "20px",
              }}
            >
              {row.history.length > 0 &&
                row.history.map((historyRow, index) => (
                  <div
                    key={historyRow.round}
                    style={
                      //isOpen false then height 0 else height 55px
                      isOpen
                        ? {
                            position: "absolute",
                            height: "55px",
                            //   height: `${row.history.length * 55 - (index + 1) * 30}px`,
                            // height: `${
                            //   row.history.length * 40 - (index + 1) * 40
                            // }px`,
                            width: "70px",
                            // width: `${index * 45}px`,
                            left: "30px",
                            top: `${index * 45}px`,
                            borderLeft: "2px solid #4E7691",
                            borderBottom: "2px solid #4E7691",
                            borderColor: "#4E7691",
                            borderLeftWidth: "2px",
                            borderBottomWidth: "2px",
                          }
                        : {
                            display: "none",
                          }
                    }
                  ></div>
                ))}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow
                    sx={{
                      background: "rgb(163,186,200)",
                    }}
                  >
                    {/* <TableCell
                      sx={{
                        position: "relative",
                        background: "white",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-20%",

                          left: "50%",
                          //transform: "translate(-50%, -50%)",
                          width: "1px",
                          height: "100%",
                          background: "#4E7691", // Adjust line color as needed
                        }}
                      />
                    </TableCell> */}

                    <TableCell>RFP ROUNDS</TableCell>
                    <TableCell>CREATED ON</TableCell>
                    <TableCell>ROUND STATUS</TableCell>
                    <TableCell>BID STATUS</TableCell>
                    <TableCell>BID DEADLINE</TableCell>
                    <TableCell>BID SUBMISSION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow, index) => (
                    <TableRow key={historyRow.round}>
                      {/* <TableCell
                        sx={{
                          position: "relative",
                          width: "30px",
                          marginBottom: "10px",
                          borderBottom: "none",
                          borderColor: "#4E7691",
                          borderLeft: "1px solid #4E7691",
                          //transform: "translate(-50%, -50%)",
                          // borderBottomWidth: "1px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            // transform: "translate(-50%, -50%)",
                            width: "90%",
                            height: "1px",
                            background: "#4E7691", // Adjust line color as needed
                          }}
                        />
                      </TableCell> */}
                      <TableCell component="th" scope="row">
                        {historyRow.round}
                      </TableCell>
                      <TableCell>{historyRow.createdOn}</TableCell>
                      <TableCell>{historyRow.roundStatus}</TableCell>
                      <TableCell>{historyRow.bidStatus}</TableCell>
                      <TableCell>{historyRow.bidDeadline}</TableCell>
                      <TableCell>{historyRow.bidSubmission}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const CustomTypography = styled(Typography)({
  fontSize: "16px",
  fontWeight: "lighter",
  color: "#000000",
  padding: "13px",
});

const tableHeadData = [
  {
    name: "AIRLINE",
    sortName: "airline",
  },
  {
    name: "RFP TITLE",
    sortName: "rpf",
  },
  {
    name: "CITY, COUNTRY",
    sortName: "city",
  },
  {
    name: "AIRPORT",
    sortName: "airport",
  },
  {
    name: "UPDATED",
    sortName: "updated",
  },
  {
    name: "ROOMS NIGHTS / DAY",
    sortName: "room",
  },
  {
    name: "RFP STATUS",
    sortName: "rfpStatus",
  },
];
export default function DemoTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const dispatch = useDispatch();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setOrder("asc");
    setOrderBy("");
    dispatch(setDropdown(false));
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setOrder("asc");
    setOrderBy("");
  };
  const handleRequestSort = (property, value) => {
    if (value === "asc") {
      setOrder("desc");
    } else if (value === "desc") {
      setOrder("asc");
    } else {
      return;
    }

    setOrderBy(property);
  };
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

        <Table aria-label="collapsible table">
          <TableHead
            sx={{
              borderRadius: "10px",
            }}
          >
            <TableRow
              sx={{
                background: "rgb(71, 118, 145)",
                borderRadius: "10px",
                borderBottom: "none",
              }}
            >
              <TableCell />

              {tableHeadData.map((item, index) => (
                <CustomTableCell
                  sx={{
                    borderBottom: "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "#FFFFFF" }}>{item.name}</span>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <ArrowDropUpIcon
                        sx={{
                          fontSize: "16px",
                        }}
                        onClick={() => handleRequestSort(item.sortName, "asc")}
                      />
                      <ArrowDropDownIcon
                        sx={{
                          fontSize: "16px",
                        }}
                        onClick={() => handleRequestSort(item.sortName, "desc")}
                      />
                    </div>
                  </div>
                </CustomTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <Row key={row.name} row={row} index={index} />
              ))}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { value: -1, label: "All" }]}
          component="div"
          count={rows.length}
          showFirstButton={true}
          showLastButton={true}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
