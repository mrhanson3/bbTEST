import Head from 'next/head';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import withAuth from '../../lib/withAuth';
import { styleLoginButton } from '../../components/SharedStyles';

const propTypes = {
  router: PropTypes.shape({
    query: PropTypes.shape({
      redirectUrl: PropTypes.string,
    }),
  }).isRequired,
};

function Login({ router }) {
  const redirectUrl = (router && router.query && router.query.redirectUrl) || '';

  return (
    <div style={{ textAlign: 'center', margin: '0 20px' }}>
      <Head>
        <title>Log in to Clayton Does Things</title>
        <meta name="description" content="Login page for https://claytondoesthings.herokuapp.com" />
      </Head>
      <br />
      <p style={{ margin: '45px auto', fontSize: '44px', fontWeight: '400' }}>Log-in to Clayton Does Things</p>
      <p>You’ll be logged in for 14 days unless you log out manually.</p>
      <br />
      <Button
        variant="contained"
        style={styleLoginButton}
        href={`/auth/google?redirectUrl=${redirectUrl}`}
      >
        <img
          src="http://moonshot.industries/assets/img/moonman.jpg"
          alt="Log in with Google"
          style={{ marginRight: '10px' }}
        />
        Log in with Google
      </Button>
    </div>
  );
}

Login.propTypes = propTypes;

export default withAuth(withRouter(Login), { logoutRequired: true });
