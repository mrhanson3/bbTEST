import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GamblingCard from './GamblingCard';
import GamblingCard19 from './GamblingCard19';
import MISunrise from './MISunrise';
import MIBoatRide from './MIBoatRide';
import ParisQ from './ParisQ';
import CompassRose from './CompassRose';
import CovidCard from './CovidCard';
import KiawahRiver from './KiawahRiver';

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
          <Paper className={classes.paper} elevation={3}>Updated 12/14/20<GamblingCard></GamblingCard>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>Updated 12/12/20<CovidCard></CovidCard>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>Posted 12/10/20<CompassRose></CompassRose>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={3}>Posted 12/2/20<ParisQ></ParisQ>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper} elevation={3}>Posted 11/18/20<MISunrise></MISunrise>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>Posted 11/20/20<GamblingCard19></GamblingCard19>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={3}>Posted 11/16/20<MIBoatRide></MIBoatRide>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={3}>Posted 11/10/20<KiawahRiver></KiawahRiver>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default IndexGrid;
