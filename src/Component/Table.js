import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper, Button, Box, Typography } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Link from "@mui/material/Link";


import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";

// #0966c2

function createData(
  jobId,
  name,
  position,
  firstLevel,
  secondLevel,
  thirdLevel,
  fourthLevel,
  totalMarks,
  status
) {
  return {
    jobId,
    name,
    position,
    firstLevel,
    secondLevel,
    thirdLevel,
    fourthLevel,
    totalMarks,
    status,
  };
}

const rows = [
  createData("121", "Abhishek", "Developer", 100, 100, 100, 100, 300, "Active"),
  createData("121", "Abhishek", "Developer", 100, 100, 100, 100, 300, "Hired"),
  createData("121", "Abhishek", "Developer", 100, 100, 100, 100, 300, "Reject"),
  createData("121", "Abhishek", "Developer", 100, 100, 100, 100, 300, "Active"),
  createData("121", "Abhishek", "Developer", 100, 100, 100, 100, 300, "Hired"),
];

export default function BasicTable() {
  return (
    <Paper elevation={3} sx={{pl:2.5, pr:2.5, pb:2.5,pt:1}}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pt:1.5,mb:2 }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6">Candidate Status</Typography>
          <Box sx={{ ml: 2 }}>
            <Link href="#" variant="h6">
              View All
            </Link>
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <Paper
            component="form"
            sx={{
              p: "1px 2px",
              display: "flex",
              alignItems: "center",
              width: 300,
              mr: 2,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          <Paper
            component="form"
            sx={{
              p: "1px 2px",
              display: "flex",
              alignItems: "center",
              width: 120,
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <FilterListIcon color="primary" />
            </IconButton>
            <Typography variant="h5">Filter</Typography>
          </Paper>
        </Box>
      </Box>

      <TableContainer component={Box}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead
            style={{ borderBottom: "2px solid", backgroundColor: "#f5f5f5" }}
          >
            <TableRow>
              <TableCell>Job ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">1st Level</TableCell>
              <TableCell align="right">2nd Level</TableCell>
              <TableCell align="right">3rd Level</TableCell>
              <TableCell align="right">4th Level</TableCell>
              <TableCell align="right">Total Marks</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.jobId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.jobId}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.position}</TableCell>
                <TableCell align="right">{row.firstLevel}</TableCell>
                <TableCell align="right">{row.secondLevel}</TableCell>
                <TableCell align="right">{row.thirdLevel}</TableCell>
                <TableCell align="right">{row.fourthLevel}</TableCell>
                <TableCell align="right">{row.totalMarks}</TableCell>
                <TableCell align="right">
                  {row?.status === "Hired" && (
                    <Button size="small" variant="outlined" color="success">
                      {" "}
                      Hired{" "}
                    </Button>
                  )}
                  {row?.status === "Active" && (
                    <Button size="small" variant="outlined" color="warning">
                      {" "}
                      Active{" "}
                    </Button>
                  )}
                  {row?.status === "Reject" && (
                    <Button size="small" variant="outlined" color="error">
                      {" "}
                      Reject{" "}
                    </Button>
                  )}
                </TableCell>
                <TableCell align="right">
                  <RemoveRedEyeOutlinedIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
