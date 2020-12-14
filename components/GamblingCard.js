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
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    title: {
      fontSize: 14,
    },
  });

function GamblingCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Link href={`/gambling`}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Gambling
        </Typography>
        <Typography variant="h5" component="h2">
          2020 NFL gambling
        </Typography>
        <Typography variant="body2" component="p">
          This year I put down $1,000.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Link>
  );
}

export default GamblingCard;
