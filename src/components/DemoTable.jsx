import * as React from "react";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
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
      //   {
      //     round: "Round 2",
      //     createdOn: "2020-01-05",
      //     roundStatus: "Open",
      //     bidStatus: "closed",
      //     bidDeadline: "2020-01-05",
      //     bidSubmission: "2020-01-05",
      //   },
    ],
  };
}

const CustomTableCell = styled(TableCell)({
  color: "#FFFFFF",
  fontSize: "15px",
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

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
            }}
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ borderBottom: "none" }}>{row.airline}</TableCell>
        <TableCell sx={{ borderBottom: "none" }}>{row.rpf}</TableCell>
        <TableCell sx={{ borderBottom: "none" }}>{row.city}</TableCell>
        <TableCell sx={{ borderBottom: "none" }}>{row.airport}</TableCell>
        <TableCell sx={{ borderBottom: "none" }}>{row.updated}</TableCell>
        <TableCell sx={{ borderBottom: "none" }}>{row.room}</TableCell>
        <TableCell sx={{ borderBottom: "none" }}>{row.rfpStatus}</TableCell>
      </TableRow>
      <TableRow
        sx={{
          position: "relative",
        }}
      >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Paper
              variant="outlined"
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "88px",
                // width: "92%",
                marginRight: "20px",
              }}
            >
              {row.history.length > 0 &&
                row.history.map((historyRow, index) => (
                  <div
                    key={historyRow.round}
                    style={{
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
                      borderLeft: "1px solid #4E7691",
                      borderBottom: "1px solid #4E7691",
                      borderColor: "#4E7691",
                      borderLeftWidth: "1px",
                      borderBottomWidth: "1px",
                    }}
                  ></div>
                ))}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow
                    sx={{
                      background: "rgb(163,186,200)",
                    }}
                  >
                    <TableCell>RFP ROUNDS</TableCell>
                    <TableCell>CREATED ON</TableCell>
                    <TableCell>ROUND STATUS</TableCell>
                    <TableCell>BID STATUS</TableCell>
                    <TableCell>BID DEADLINE</TableCell>
                    <TableCell>BID SUBMISSION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.round}>
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

const rows = [
  createData(
    "Airline 1",
    "RFP Title 1",
    "City 1",
    "Airport 1",
    "Updated 1",
    "Room 1",
    "RFP Status 1"
  ),
  createData(
    "Airline 2",
    "RFP Title 1",
    "City 1",
    "Airport 1",
    "Updated 1",
    "Room 1",
    "RFP Status 1"
  ),
  createData(
    "Airline 3",
    "RFP Title 1",
    "City 1",
    "Airport 1",
    "Updated 1",
    "Room 1",
    "RFP Status 1"
  ),
  createData(
    "Airline 4",
    "RFP Title 1",
    "City 1",
    "Airport 1",
    "Updated 1",
    "Room 1",
    "RFP Status 1"
  ),
  createData(
    "Airline 5",
    "RFP Title 1",
    "City 1",
    "Airport 1",
    "Updated 1",
    "Room 1",
    "RFP Status 1"
  ),
  createData(
    "Airline 6",
    "RFP Title 1",
    "City 1",
    "Airport 1",
    "Updated 1",
    "Room 1",
    "RFP Status 1"
  ),
  createData(
    "Airline 7",
    "RFP Title 1",
    "City 1",
    "Airport 1",
    "Updated 1",
    "Room 1",
    "RFP Status 1"
  ),
];
const CustomTypography = styled(Typography)({
  fontSize: "16px",
  fontWeight: "lighter",
  color: "#000000",
  padding: "13px",
});
export default function DemoTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead
              sx={{
                borderRadius: "10px",
              }}
            >
              <TableRow
                sx={{
                  background: "rgb(71, 118, 145)",
                }}
              >
                <TableCell />
                <CustomTableCell
                //   sx={{
                //     display: "flex",
                //     flexDirection: "row",
                //     justifyContent: "space-between",
                //     alignItems: "center",
                //   }}
                >
                  AIRLINE
                  {/* <div style={{ display: "flex", flexDirection: "column" }}>
                    <ArrowDropUpIcon
                      sx={{
                        fontSize: "16px",
                        lineHeight: "0px",
                      }}
                    />
                    <ArrowDropDownIcon
                      sx={{
                        fontSize: "16px",
                        lineHeight: "0px",
                      }}
                    />
                  </div> */}
                </CustomTableCell>
                <CustomTableCell>RFP TITLE/VERSION</CustomTableCell>
                <CustomTableCell>CITY, COUNTRY</CustomTableCell>
                <CustomTableCell>AIRPORT</CustomTableCell>
                <CustomTableCell>UPDATED ON</CustomTableCell>
                <CustomTableCell>ROOMS NIGHTS / DAY</CustomTableCell>
                <CustomTableCell>RFP STATUS</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <Row key={row.name} row={row} />
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>
    </div>
  );
}
