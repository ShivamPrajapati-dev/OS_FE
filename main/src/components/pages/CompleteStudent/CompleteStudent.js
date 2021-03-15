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
import Chip from "@material-ui/core/Chip";

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

const CompleteStudent = (props) => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  const fetchItems = async () => {
    console.log(props.location);
    const response = await axios.post(
      `http://localhost:8000/${props.location.state.url_student}`,
      {
        state: props.location.state.detail,
        course: props.location.state.course,
        college_id: props.location.state.college_id,
      }
    );
    setRows(response.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Box m={4}>
      <h1>Students</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Id</StyledTableCell>
              <StyledTableCell align="center">Name </StyledTableCell>
              <StyledTableCell align="center">College_Id</StyledTableCell>
              <StyledTableCell align="center">Skills</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow hover role="checkbox" key={row.name}>
                <StyledTableCell align="center">{row.id}</StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.college_id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div component="ul" className={classes.root}>
                    {row.skills.map((data) => {
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

export default CompleteStudent;
