import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '76.25%', // 16:9
  },
}));

export default function CardMenu(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.image1}
        title='Paella dish'
      />
      <CardContent>
        <Typography variant='h5' color='#000'>
          Noodles
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          Lorem ipsum dolor sit amet, consectetur adipisicing...
        </Typography>
        <Typography variant='body2'>$13</Typography>
      </CardContent>
    </Card>
  );
}
