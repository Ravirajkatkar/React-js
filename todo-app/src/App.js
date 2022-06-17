import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, ml:'30%' , mt: '10%'}} > 
      <CardMedia
        component="img"
        height="140"
        sx={{
          border:2,
          bordercolor: 'black',
          transform: "rotateZ(0deg)",
          borderRadius: '50px 50px 50px 50px',
          // borderBottomLeftRadius: '100%',
          // borderBottomRightRadius: '100%'
        }}
        image="https://1.bp.blogspot.com/-DrGLche_VrE/UkG3vlNqwvI/AAAAAAAACSc/HFmY02ooCbI/s1600/green+lizard+7.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
