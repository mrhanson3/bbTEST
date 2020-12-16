import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IndexGrid from '../components/IndexGrid';


import withAuth from '../lib/withAuth';

const propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  user: null,
};

class Index extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div style={{ padding: '10px 45px' }}>
        <Head>
          <title>COVID Per 100k</title>
          <meta name="description" content="Total Confirmed Coronavirus per 100k people, Mecklenburg County, North Carolina" />
        </Head>
        <Link href="/">
          <a>Home /</a>
        </Link>
        <p>
          Email:&nbsp;
          {user.email}
        </p>
        <p>I'm frequently asked about what I do, and this is one of the things. I get numbers from a data scientist and then I have to turn them into something that people can easily digest.</p>

        <div>
        <p>I can admit that when we started building these graphs, I didn't think I would be updating them weekly for this long. I think I had a hard time grasping how long getting past the pandemic would take.</p>
        <p>You may have to scroll left to right to see the whole graph, which is unfortunate for the UX and the world.</p>
        <iframe src="https://public.tableau.com/views/CoronavirusCasesbyCountythrough41920/Cumulative67?:display_count=y&:origin=viz_share_link?:showVizHome=no&:embed=true"
    width="100%" height="800px"></iframe>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default withAuth(Index);
