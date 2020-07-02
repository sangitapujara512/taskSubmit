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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ShowUserDetails(props) {
    const {accounts,users}=props && props.userData
    //console.log("accounts",accounts);
    //console.log("users",users);
    const usersDetails = Object.entries(users);
    const userAccounts=Object.entries(accounts)

// console.log(usersDetails[0]);
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="right">Account</TableCell>
            {/* <TableCell align="right">Apps</TableCell> */}
            <TableCell align="right">Apps&nbsp;</TableCell>
            {/* <TableCell align="right">App Rated</TableCell> */}
            <TableCell align="right">App rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersDetails.map((entry,j) => (
            <TableRow key={entry[1].name}>
              <TableCell component="th" scope="row">
                {entry[1].name}
              </TableCell>
              <TableCell align="right">{entry[1].account}</TableCell>
              {/* <TableCell align="right"> */}
              
              {/* {userAccounts.map((account) => (
              <div>fd</div>
            ))} */}


              {/* {userAccounts.map((account)=>{console.log(account[1].apps)
              const mat = entry[1].account == account[0] ? account[1].apps : '';        
            const apps=Object.entries(mat && mat)         
           
                    apps.map((app, j) => (
                      <div key={j}> {app[1].title} </div>
                    ))
                  
            
            })}

            
           
          
           
           

              </TableCell> */}
              <TableCell align="right">
              <UserApps entry={entry} userAccounts ={userAccounts}/>
              </TableCell>
              {/* <TableCell align="right"><button>App rated</button></TableCell> */}
              <TableCell align="right"><AppRating account={entry[1].account} count={j}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

// return (
//     <div>
//         {entries.map((entry)=>{
//         console.log(entry[1].name)})}
//     </div>
// )
}
