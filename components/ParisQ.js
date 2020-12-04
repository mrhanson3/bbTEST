import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  title: {
    fontSize: 14,
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function ParisQ() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} variant="outlined">
    <CardContent>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
     Food
    </Typography>
    <Typography variant="h5" component="h2">
      The best of food
    </Typography>
    <Typography variant="body2" component="p">
      Cafe de Flore, Paris, France
    </Typography>
    </CardContent>


      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          size="small"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>For my wife's first Mother's Day we went to Paris. It was a wonderful trip, although it ruined homemade quiche for me.
          </Typography>
          <Typography paragraph>
            I had made a fair amount of quiches using store-bought pie crust, some eggs, spinach, onion and Monterey Jack cheese and they were pretty good.
            </Typography>
          <Typography paragraph>
            Then I had the quiche of the day at <a href={`https://cafedeflore.fr/`}>Cafe de Flore</a> at the encouragement of the waiter who said it was the best quiche he had ever had.
          </Typography>
          <Typography>
            He was right. It was fluffy and perfect and it made my quiches seem like a Kraft single compared to Humbolt Fog. Fin.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ParisQ;
