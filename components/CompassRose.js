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
      Compass Rose, Washington, DC
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
          <Typography paragraph>There's a place off of 13th and T in DC called <a href={`https://www.compassrosedc.com/`}>Compass Rose</a>.
          </Typography>
          <Typography paragraph>
             If I remember correctly, it's in an old row house so it goes back a ways, but not very wide and this is where I had khachapuri for the first time, and just thinking about it makes me happy.
            </Typography>
          <Typography paragraph>
            Khachapuri is a cheese-filled bread dish from Georgia, the country, that comes with an egg on top. You rip off the crust and dip it in the egg yolk and bread. It's the best.
          </Typography>
          <Typography>
            The egg dish is so famous in Georgia that the International School of Economics at Tbilisi State University uses the <a href={`https://www.iset-pi.ge/index.php/en/khachapuri-index`}>"khachapuri index"</a> to measure the different rates of inflation in Georgian cities.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ParisQ;
