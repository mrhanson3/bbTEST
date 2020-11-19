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

function GamblingTabs() {
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
          <Tab label="Winnings by team" {...a11yProps(2)} />
          <Tab label="Losses by team" {...a11yProps(3)} />
          <Tab label="All the bets" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <p>Last year, I put $300 down to bet on NFL games and made $63.49, so this year I'm going to put down $1,000 for bets. Yes, I do realize this is a horrible idea. Don't bet on anything. I'm serious.</p>
      <p>And like last year, I do realize that there are a lot of major corporations who make a ton of money on people betting on the NFL. I'm sure they use huge databases and measure a ton of variables that I don't know about, so that should be interesting.</p>
      <p>Along with the moneyline and spread bets, I have made some over/under bets, which is where there's a set number of points that the teams will combine to score, like 48.5 and you bet on whether the combined score will be under or over 48.5. Oddsmakers use the half point so that there isn't a chance of a tie.</p>
      <p>Click on a team on the left to see how I'm doing this year and how teams are doing against the spread.</p>
      <iframe src="https://public.tableau.com/views/NFL2020_16007684542270/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link?:showVizHome=no&:embed=true"
  width="1000px" height="650px"></iframe>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <p>Over/Under bets are bets on the total score of the game. It's always seems like a random guessing game, but it's fun to watch.</p>
      <iframe src="https://public.tableau.com/views/NFL2020/OUResults?:language=en&:display_count=y&:origin=viz_share_link?:showVizHome=no&:embed=true"
  width="1000px" height="900px"></iframe>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <p>Yes, I clearly bet on the good teams, but only a clown would put money on a losing team. For an example of my clownsmenship, take a look at how much the Bengals have cost me. </p>
      <iframe src="https://public.tableau.com/views/NFL2020/ByTeam?:language=en&:display_count=y&:origin=viz_share_link?:showVizHome=no&:embed=true"
  width="1000px" height="630px"></iframe>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <p>I clearly bet against bad teams, but some teams just kill me. I've lost money on the Colts when I've bet against them and when I've bet them to win, so I'm done with them this year.</p>
      <iframe src="https://public.tableau.com/views/NFL2020/Teamsbetagainst?:language=en&:display_count=y&publish=yes&:origin=viz_share_link?:showVizHome=no&:embed=true"
  width="1000px" height="730px"></iframe>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <p>Here are all the bets I have made. At the bottom you can see the tabs, that include the Futures bets, the bets on Over/Under and how I'm tracking teams by week.</p>
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS7k2BtQ67e5TKMEmKBUza0pqEodKNVBejXni5J0v7jLM0S5yQBadxMKe2t_KoUEqkEMux6dNY2vbEe/pubhtml?widget=true&amp;headers=false"
      width="1000px" height="730px"></iframe>
      </TabPanel>
    </div>
  );
}

export default GamblingTabs;
