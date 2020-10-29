import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  user: null,
};


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Team records" {...a11yProps(0)} />
          <Tab label="Over/Under" {...a11yProps(1)} />
          <Tab label="Gambling by team" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <p>Click on a team on the left to see how I'm doing this year and how teams are doing against the spread.</p>
      <iframe src="https://public.tableau.com/views/NFL2020/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link?:showVizHome=no&:embed=true"
  width="1000px" height="650px"></iframe>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <p>Over/Under bets are bets on the total score of the game. It's always seems like a random guessing game, but it's fun to watch.</p>
      <iframe src="https://public.tableau.com/views/NFL2020/OUResults?:language=en&:display_count=y&:origin=viz_share_link?:showVizHome=no&:embed=true"
  width="1000px" height="830px"></iframe>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <p>Yes, I clearly bet on the good teams, but only a clown would put money on a losing team. For an example of my clownsmenship, take a look at how much the Bengals have cost me. </p>
      <iframe src="https://public.tableau.com/views/NFL2020/ByTeam?:language=en&:display_count=y&:origin=viz_share_link?:showVizHome=no&:embed=true"
  width="1000px" height="630px"></iframe>
      </TabPanel>
    </div>
  );
}

export default SimpleTabs;
