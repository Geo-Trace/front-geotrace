import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ItineraireCard() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://media.istockphoto.com/photos/lighthouse-sea-and-beautiful-snow-covered-mountain-and-cloudy-blue-picture-id1358847994?b=1&k=20&m=1358847994&s=170667a&w=0&h=3VH1S3kDTz0OBxqLZSRjTRdlntfzRFJRYXH8vLN-248="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mon Itinéraire
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
