import * as React from "react";
import Card from "@mui/material/Card";
import Itineraire from "../models/Itineraire";
import { Grid, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import { grey } from '@mui/material/colors';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import HeightIcon from '@mui/icons-material/Height';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';

const Grey = grey[50];

type Props = {
  itineraire: Itineraire;
};

const ItineraireInfos: React.FC = () => {
  return (
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Card sx={{padding: 1, bgcolor: Grey, textAlign:'center'}}>
            <Typography>
              <BatteryAlertIcon fontSize="small" sx={{alignItems: 'center'}}></BatteryAlertIcon>
              4/5
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card sx={{padding: 1,bgcolor: Grey, textAlign:'center'}}>
              <Typography>
                <HeightIcon fontSize="small"sx={{}}></HeightIcon>
                  3%
              </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card sx={{padding: 1, bgcolor: Grey, textAlign:'center'}}>
          <Typography>
              <SwapCallsIcon fontSize="small"></SwapCallsIcon>
              15 km
          </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card sx={{padding: 1, bgcolor: Grey, textAlign:'center'}}>
          <Typography>
              <AlarmOnIcon fontSize="small"></AlarmOnIcon> 
              2h30
          </Typography>
          </Card>
        </Grid>

        <Grid item xs={4} sx={{textAlign:'right'}}>
              <Rating name="popularité" defaultValue={2.5} precision={0.5} sx={{padding: 1}}/>
        </Grid>
      </Grid>
  );
};



export default ItineraireInfos;
