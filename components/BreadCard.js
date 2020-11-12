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
    maxWidth: 345,
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
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function BreadCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Banana Bread"
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image="https://mrhanson3.github.io/img/1.JPG"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          I made some average banana bread.
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
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          As a web developer I get a little worn out from working on stuff that only appears on a screen and every so often I want to make something by hand. Clearly, this is banana bread. Maybe that isn't so clear.
          </Typography>
          <Typography paragraph>
          The receipe came from Thug Kitchen: The Official Cookbook: Eat Like You Give a F*ck. It's a pretty amusing book, if you're into seeing the word fuck next to a description of what makes a good vanilla extract. I had to make a few changes because the cookbook is for vegans and I didn't want to buy extra ingredients just for one receipe.
          </Typography>
          <Typography paragraph>
          It turned out quite dense and a little dry, but we managed to eat it all because we're soldiers like that. Also, the line between moist and gross is pretty thin with bread, so I would always lean towards dry instead of wet dough.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default BreadCard;
