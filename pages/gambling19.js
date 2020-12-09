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
          <title>Index</title>
          <meta name="description" content="List of purchased books." />
        </Head>
        <Link href="/">
          <a>Home /</a>
        </Link>
        <p>
          Email:&nbsp;
          {user.email}
        </p>
        <p>These charts are best viewed using at least an iPad-sized screen. It's hard to see a lot of data on a phone screen</p>

        <div>
        <p>Every so often I think that I can make money while gambling on the NFL, so now I'm going to see if that's true or if I would have been better off just putting my money into my savings account. I'm going to record all of my bets here and you can follow along to see how things go.</p>
        <iframe src="https://public.tableau.com/shared/GQBNBXSPG?:display_count=y&:origin=viz_share_link?:showVizHome=no&:embed=true"
    width="1000px" height="1050px"></iframe>
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
