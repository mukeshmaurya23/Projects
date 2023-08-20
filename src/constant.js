import styled from "@emotion/styled";
import { TableCell, Typography } from "@mui/material";
import { useState } from "react";

export function createData(
  airline,
  rpf,
  city,
  airport,
  updated,
  room,
  rfpStatus
) {
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

// const rowss = [
//   createData(
//     "Nilesh Airline",
//     "Nilesh RFP Title",
//     "Nilesh City 1",
//     "Nilesh Airport 1",
//     "Nilesh Updated 1",
//     "Nilesh Room 1",
//     "Nilesh RFP Status 1"
//   ),
//   createData(
//     "Mukesh Airline",
//     "Mukesh RFP Title",
//     "Mukesh City 1",
//     "Mukesh Airport 1",
//     "Mukesh Updated 1",
//     "Mukesh Room 1",
//     "Mukesh RFP Status 1"
//   ),
//   createData(
//     "Abhay Airline",
//     "Abhay RFP Title 1",
//     "Abhay City 1",
//     "Abhay Airport 1",
//     "Abhay Updated 1",
//     "Abhay Room 1",
//     "Abhay RFP Status 1"
//   ),
//   createData(
//     "Bank Airline",
//     "Bank RFP Title 1",
//     "Bank City 1",
//     "Bank Airport 1",
//     "Bank Updated 1",
//     "Bank Room 1",
//     "Bank RFP Status 1"
//   ),
//   createData(
//     "Fake Airline",
//     "Fake RFP Title 1",
//     "Fake City 1",
//     "Fake Airport 1",
//     "Fake Updated 1",
//     "Fake Room 1",
//     "Fake RFP Status 1"
//   ),
//   createData(
//     "Dummy Airline",
//     "Dummy RFP Title 1",
//     "Dummy City 1",
//     "Dummy Airport 1",
//     "Dummy Updated 1",
//     "Dummy Room 1",
//     "Dummy RFP Status 1"
//   ),
//   createData(
//     "Zoho Airline",
//     "Zoho RFP Title 1",
//     "Zoho City 1",
//     "Zoho Airport 1",
//     "Zoho Updated 1",
//     "Zoho Room 1",
//     "Zoho RFP Status 1"
//   ),
// ];

// export const rows = [
//   {
//     airline: "Nilesh Airline",
//     rpf: "Nilesh RFP Title",
//     city: "Nilesh City 1",
//     airport: "Nilesh Airport 1",
//     updated: "Nilesh Updated 1",
//     room: "Nilesh Room 1",
//     rfpStatus: "Nilesh RFP Status 1",
//     history: [
//       {
//         round: "Round 1",
//         createdOn: "2020-01-05",
//         roundStatus: "Open",
//         bidStatus: "Submitted",
//         bidDeadline: "2020-01-05",
//         bidSubmission: "2020-01-05",
//       },
//       {
//         round: "Round 2 ",
//         createdOn: "2020-01-05",
//         roundStatus: "Open",
//         bidStatus: "closed",
//         bidDeadline: "2020-01-05",
//         bidSubmission: "2020-01-05",
//       },
//       {
//         round: "Round 3",
//         createdOn: "2020-01-05",
//         roundStatus: "Open",
//         bidStatus: "closed",
//         bidDeadline: "2020-01-05",
//         bidSubmission: "2020-01-05",
//       },
//     ],
//   },
//   {
//     airline: "Mukesh Airline",
//     rpf: "Mukesh RFP Title",
//     city: "Mukesh City 1",
//     airport: "Mukesh Airport 1",
//     updated: "Mukesh Updated 1",
//     room: "Mukesh Room 1",
//     rfpStatus: "Mukesh RFP Status 1",
//     history: [
//       {
//         round: "Round 1",
//         createdOn: "2020-01-05",
//         roundStatus: "Open",
//         bidStatus: "Submitted",
//         bidDeadline: "2020-01-05",
//         bidSubmission: "2020-01-05",
//       },
//       {
//         round: "Round 2 ",
//         createdOn: "2020-01-05",
//         roundStatus: "Open",
//         bidStatus: "closed",
//         bidDeadline: "2020-01-05",
//         bidSubmission: "2020-01-05",
//       },
//       {
//         round: "Round 3",
//         createdOn: "2020-01-05",
//         roundStatus: "Open",
//         bidStatus: "closed",
//         bidDeadline: "2020-01-05",
//         bidSubmission: "2020-01-05",
//       },
//     ],
//   },
//   {
//     airline: "Abhay Airline",
//     rpf: "Abhay RFP Title 1",
//     city: "Abhay City 1",
//     airport: "Abhay Airport 1",
//     updated: "Abhay Updated 1",
//     room: "Abhay Room 1",
//     rfpStatus: "Abhay RFP Status 1",
//     history: [
//       {
//         round: "Round 1",
//         createdOn: "2020-01-05",
//         roundStatus: "Open",
//         bidStatus: "Submitted",
//         bidDeadline: "2020-01-05",
//         bidSubmission: "2020-01-05",
//       },
//       {
//         round: "Round 2 ",
//         createdOn: "2020-01-05",
//         roundStatus: "Open",
//         bidStatus: "closed",
//         bidDeadline: "2020-01-05",
//         bidSubmission: "2020-01-05",
//       },
//       {
//         round: "Round 3",
//         createdOn: "2020-01-05",
//         roundStatus: "Open",
//         bidStatus: "closed",
//         bidDeadline: "2020-01-05",
//         bidSubmission: "2020-01-05",
//       },
//     ],
//   },
//   {
//     airline: "Zoho Airline",
//     rpf: "Zoho RFP Title 1",
//     city: "Zoho City 1",
//     airport: "Zoho Airport 1",
//     updated: "Zoho Updated 1",
//     room: "Zoho Room 1",
//     rfpStatus: "Zoho RFP Status 1",
//     history: [
//       {
//         round: "Round 1",
//         createdOn: "2020-01-05",
//         roundStatus: "Open",
//         bidStatus: "Submitted",
//         bidDeadline: "2020-01-05",
//         bidSubmission: "2020-01-05",
//       },
//       {
//         round: "Round 2 ",
//         createdOn: "2020-01-05",
//         roundStatus: "Open",
//         bidStatus: "closed",
//         bidDeadline: "2020-01-05",
//         bidSubmission: "2020-01-05",
//       },
//       {
//         round: "Round 3",
//         createdOn: "2020-01-05",
//         roundStatus: "Open",
//         bidStatus: "closed",
//         bidDeadline: "2020-01-05",
//         bidSubmission: "2020-01-05",
//       },
//     ],
//   },
// ];

// Now you can use the 'rows' array as needed

export function EditableTableCell({ value, onSave }) {
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

export const CustomTableCell = styled(TableCell)({
  color: "#FFFFFF",
  fontSize: "15px",
});

export const tableHeadData = [
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

export const CustomTypography = styled(Typography)({
  fontSize: "16px",
  fontWeight: "lighter",
  color: "#000000",
  padding: "13px",
});

export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
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
