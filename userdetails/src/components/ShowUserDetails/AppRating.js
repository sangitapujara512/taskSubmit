import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useDispatch } from 'react-redux'
import {setRating} from '../../actions/userRatingAction'

export default function AppRating(props) {
  const {account,count}=props
   
  const [value, setValue] = React.useState(1);
  const dispatch = useDispatch()

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rate this App</Typography>
        <Rating
          name={count}
          value={value}
          onChange={(event, newValue) => {          
            setValue(newValue);
            dispatch(setRating(account,newValue))
          }}
        />
      </Box>
      
    </div>
  );
}
