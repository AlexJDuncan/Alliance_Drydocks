import React from 'react';
import Ships from './SampleShips';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//* * Func/Render * *//

const Ship = (props) => {
  return(
    <Box sx={{ margin: 25 }}>
      <Card sx={{ width: 600 + "px", height: 350 + "px" }}>
        <CardContent>
          <img src={Ships[0].photo} alt="" style={{ width: "-webkit-fill-available"}} />
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>{Ships[0].name} T{Ships[0].tier}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Ship;
