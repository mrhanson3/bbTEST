import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GamblingCard from './GamblingCard';
import BreadCard from './BreadCard';

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
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={3}>Updated 11/2/20<GamblingCard>
          </GamblingCard>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={3}>Updated 11/11/20<BreadCard></BreadCard></Paper>
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
