import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

function MISunrise() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
           Video
          </Typography>
          <Typography variant="h5" component="h2">
            A rainy sunrise at Crystal Lake, MI
          </Typography>
          <Typography variant="body2" component="p">
          </Typography>
        </CardContent>
        <div>
          <ReactPlayer
            url="https://vimeo.com/454145135"
            controls={true}
            width={`100%`}
            height={`260px`}
          />
        </div>
      </Card>

  )
}

export default MISunrise;
