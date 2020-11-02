import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GamblingCard from './GamblingCard';

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

function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={3}>10/30/20<GamblingCard>
          </GamblingCard>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={3}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={3}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={3}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CenteredGrid;
