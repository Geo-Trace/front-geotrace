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

type Props = {
  itineraire: Itineraire;
};

const ItineraireInfos: React.FC = () => {
  return (
      <Grid container spacing={2} sx={{textAlign: 'center'}}>
        <Grid item xs={2}>
          <Card>
            <Typography color="text.secondary" gutterBottom>
              4/5
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card>
            <Typography color="text.secondary" gutterBottom>
            ↑ 3%
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card>
            <Typography color="text.secondary" gutterBottom>
              15 km
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          <Card>
            <Typography color="text.secondary" gutterBottom>
              2h30
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={2}>
          
        </Grid>

        <Grid item xs={2}>
          <Card>
            <Typography color="text.secondary" gutterBottom>
            ★★★✩✩
            </Typography>
          </Card>
        </Grid>
      </Grid>
  );
};

export default ItineraireInfos;
