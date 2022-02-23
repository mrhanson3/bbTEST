import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const useStyles = makeStyles({
  root: {
    minWidth: "",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

});

function GamblingCard19() {
  const classes = useStyles();

  return (
    <Link href={`/gambling19`}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Gambling
        </Typography>
        <Typography variant="h5" component="h2">
          2019 NFL gambling
        </Typography>
        <Typography variant="body2" component="p">
          Last year I put down $300.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Link>
  );
}

export default GamblingCard19;
