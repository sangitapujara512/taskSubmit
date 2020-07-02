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
    <>
    <p style={{textAlign:'center',color:'blue',fontWeight:'bold'}}>User Details</p>
    <TableContainer component={Paper} style={{padding:'20px'}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>        
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="center">Account</TableCell>
            <TableCell align="center">Apps&nbsp;</TableCell>
            <TableCell align="center">App rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersDetails.map((entry, j) => (
            <TableRow key={entry[1].name}>
              <TableCell component="th" scope="row">
                {entry[1].name}
              </TableCell>
              <TableCell align="center">{entry[1].account}</TableCell>
              <TableCell align="center">
                <UserApps entry={entry} userAccounts={userAccounts} />
              </TableCell>
              <TableCell align="center"><AppRating account={entry[1].account} count={j} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
