import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GamblingCard from './GamblingCard';
import MISunrise from './MISunrise';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function IndexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>11/2/20<GamblingCard>
          </GamblingCard>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper} elevation={3}><p>11/12/20</p> A rainy sunrise at Crystal Lake, Michigan<MISunrise></MISunrise>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={3}>xs=3</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper} elevation={3}>xs=2</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default IndexGrid;
