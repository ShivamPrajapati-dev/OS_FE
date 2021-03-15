import { React, useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import axios from "axios";
import moment from "moment";
import Chip from "@material-ui/core/Chip";
import { useHistory } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const SimilarCollege = (props) => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  const fetchItems = async () => {
    console.log(props.location.state.url);
    const response = await axios.post(
      `http://localhost:8000/${props.location.state.url}`,
      {
        state: props.location.state.detail,
        course: props.location.state.course,
        id: props.location.state.college_id,
      }
    );
    console.log(response.data);
    setRows(response.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Box m={4}>
      <h1>Similar Colleges</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Id</StyledTableCell>
              <StyledTableCell align="center">College Name </StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">State</StyledTableCell>
              <StyledTableCell align="center">Country</StyledTableCell>
              <StyledTableCell align="center">No. of Student</StyledTableCell>
              <StyledTableCell align="center">Year Founded</StyledTableCell>
              <StyledTableCell align="center">Courses</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow hover role="checkbox" key={row.name}>
                <StyledTableCell align="center">{row.id}</StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.city}</StyledTableCell>
                <StyledTableCell align="center">{row.state}</StyledTableCell>
                <StyledTableCell align="center">{row.country}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.student_count}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {moment(row.year_founded).format("DD-mm-yyyy")}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div component="ul" className={classes.root}>
                    {row.courses.map((data) => {
                      return (
                        <li key={data.key}>
                          <Chip
                            label={data}
                            className={classes.chip}
                            color="primary"
                            style={{ backgroundColor: "#276afb" }}
                          />
                        </li>
                      );
                    })}
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SimilarCollege;
