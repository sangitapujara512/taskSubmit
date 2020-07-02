import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function AppRating(props) {
    console.log("rating",props.count);
    const count=props.count;
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rate this App</Typography>
        <Rating
          name={count}
          value={value}
          onChange={(event, newValue) => {
              console.log("event",event,value);
              console.log("event",event,value);
            setValue(newValue);
          }}
        />
      </Box>
      
    </div>
  );
}
