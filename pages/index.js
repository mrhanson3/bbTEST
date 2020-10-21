import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';

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

// eslint-disable-next-line react/prefer-stateless-function
class Index extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div style={{ padding: '10px 45px' }}>
        <Head>
          <title>Index</title>
          <meta name="description" content="List of purchased books." />
        </Head>
        <div>
             <img src="https://mrhanson3.github.io/img/weelogo.jpg" alt="Moonman Logo" />
        </div>
        <p>
          Email:&nbsp;
          {user.email}
        </p>
        <div>
          <h3>Your purchases</h3>
          <p>You have not purchased anything, yet.</p>
          <Link as={`books/dummy-1/introduction`} href={`books/dummy-1/introduction`}>
            <a>dummy-1</a>
          </Link>
        </div>
      </div>
    );
  }
}

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default withAuth(Index);
