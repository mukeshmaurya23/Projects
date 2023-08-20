import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { TablePagination } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { setDropdown, toggleDropdown } from "../store/OpenDropdownSlice";

import {
  // rows,
  EditableTableCell,
  CustomTableCell,
  tableHeadData,
  stableSort,
  getComparator,
  CustomTypography,
} from "../constant";

function Row(props) {
  const { row, index } = props;
  console.log({ ...row }, "rowwwwwwwwwwwwwww");
  //const [open, setOpen] = useState(false);
  // const isOpen = useSelector((state) => state.openDropdown.isOpen);
  const isOpen = useSelector((state) => state.openDropdown.isOpenArray[index]);
  const [newRowValue, setNewRowValue] = useState(row);
  console.log(newRowValue, "newRowValue..............");
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
            {/* <TableCell
              sx={{
                position: "relative",
                background: "white",
                borderBottom: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",

                  top: "-20%",

                  left: "50%",
                  //transform: "translate(-50%, -50%)",
                  width: "1.2px",
                  height: `${
                    row.history.length * 100 
                  }%`,

                  background: "#4E7691", // Adjust line color as needed
                }}
              />
            </TableCell> */}
            <Paper
              variant="outlined"
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "15px",
                width: "92%",
                marginRight: "20px",
              }}
            >
              {/* {row.history.length > 0 &&
                row.history.map((historyRow, index) => (
                  <div
                    key={historyRow.round}
                    style={
                      //isOpen false then height 0 else height 55px
                      isOpen
                        ? {
                            position: "absolute",
                            height: `${
                              row.history.length * 55 - (index + 1) * 30
                            }px`,

                            width: "70px",

                            left: "30px",
                            top: "-5px",

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
                ))} */}

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow
                    sx={{
                      background: "rgb(163,186,200)",
                    }}
                  >
                    <TableCell
                      style={{
                        width: "30px",
                        position: "relative",
                        borderBottom: "none",
                        borderColor: "#4E7691",
                        padding: 0,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-50%",

                          transform: "translateX(-50%)",
                          width: "1.4px",
                          height: `${row.history.length * 45.9}px`, // Adjust line height
                          background: "#4E7691",
                        }}
                      />
                    </TableCell>

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
                          // borderLeft: "1px solid #4E7691",
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
                      <TableCell
                        sx={{
                          position: "relative",
                          borderBottom: "none",
                          padding: 0,
                        }}
                      >
                        {/* Horizontal Line within History Row */}
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "100%",
                            height: "2px",
                            background: "#4E7691",
                          }}
                        />
                      </TableCell>
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

const DemoTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  // const [rows, setRows] = useState([]);
  const dispatch = useDispatch();
  const { rows, status } = useSelector((state) => state.rowApi);

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
            {status === "loading" ? (
              <div>Loading...</div>
            ) : (
              stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <Row key={row.name} row={row} index={index} />
                ))
            )}
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
};

export default DemoTable;
