import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UserApps from './UserApps'
import AppRating from './AppRating'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function ShowUserDetails(props) {
  const { accounts, users } = props && props.userData
  const usersDetails = Object.entries(users);
  const userAccounts = Object.entries(accounts)
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="right">Account</TableCell>
            <TableCell align="right">Apps&nbsp;</TableCell>
            <TableCell align="right">App rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersDetails.map((entry, j) => (
            <TableRow key={entry[1].name}>
              <TableCell component="th" scope="row">
                {entry[1].name}
              </TableCell>
              <TableCell align="right">{entry[1].account}</TableCell>
              <TableCell align="right">
                <UserApps entry={entry} userAccounts={userAccounts} />
              </TableCell>
              <TableCell align="right"><AppRating account={entry[1].account} count={j} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
