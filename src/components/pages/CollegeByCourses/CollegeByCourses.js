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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const CollegeByStates = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(1);

  const fetchItems = async () => {
    const response = await axios.post(
      "https://shivam-oneshot-backend.herokuapp.com/getcollegebycourses"
    );
    setRows(response.data.data);
    setTotal(response.data.total);
  };

  useEffect(() => {
    fetchItems();
    console.log(rows);
  }, []);
  const history = useHistory();

  function handleRowClick(id) {
    console.log(id);
    history.push({
      pathname: "/OS_FE/completecollege",
      state: { course: id, url: "getcollegeofcourse" },
    });
  }

  return (
    <Box m={4}>
      <h1>College by courses</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Course</StyledTableCell>
              <StyledTableCell align="center">College Count</StyledTableCell>
              <StyledTableCell align="center">Percentage</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                hover
                role="checkbox"
                key={row.name}
                onClick={(event) => handleRowClick(row._id)}
              >
                <StyledTableCell align="center">{row._id}</StyledTableCell>
                <StyledTableCell align="center">{row.total}</StyledTableCell>
                <StyledTableCell align="center">
                  {`${Math.floor((row.total / total) * 100)}%`}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CollegeByStates;
