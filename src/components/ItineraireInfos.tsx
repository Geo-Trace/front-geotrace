import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Itineraire from "../models/Itineraire";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Container, Grid } from "@mui/material";
import { PassThrough } from "stream";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

type Props = {
  itineraire: Itineraire;
};

const ItineraireInfos: React.FC = () => {
  return (
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Card>
            <Typography>
              dif 4/5
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card>
            <Typography>
            ↑↓ 3%
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card>
            <Typography>
              15 km
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card>
            <Typography>
              2h30
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={1}>
          
        </Grid>

        <Grid item xs={3}>
          <Card>
            <Stack>
              <Rating name="note" defaultValue={2.5} precision={0.5} />
            </Stack>
          </Card>
        </Grid>
      </Grid>
  );
};



export default ItineraireInfos;
