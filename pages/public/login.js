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
        <title>Log-in</title>
        <meta name="description" content="Login page for https://app.senselesslearning.com" />
      </Head>
      <br />
      <p style={{ margin: '45px auto', fontSize: '44px', fontWeight: '400' }}>Log-in to Senseless Learning</p>
      <p>You’ll be logged in for 14 days unless you log out manually.</p>
      <br />
      <Button
        variant="contained"
        style={styleLoginButton}
        href={`/auth/google?redirectUrl=${redirectUrl}`}
      >
        <img
          src=""
          alt="Log-in with Google"
          style={{ marginRight: '10px' }}
        />
      </Button>
      <h1> </h1>
      <h3 style={{ textAlign: 'left', margin: '50px 0px 10px 20px' }}><b>Updated December 8, 2020</b>: Privacy Policy - Unlike some places, I'm not going to make you hunt for the privacy policy. </h3>
      <ul>
      <li><p style={{ textAlign: 'left', margin: '0 20px' }}><b>Why is there a log-in?</b> I may post fairly personal stuff on my site and I want to know who is looking at my content.</p></li>
      <li><p style={{ textAlign: 'left', margin: '0 20px' }}><b>When I log-in using Google, what can you see about my account?</b> In this order, I can see the time and date you first logged-in, the email you used to log-in, the display name of the email, and the avatar that is associated with the email.</p></li>
      <li><p style={{ textAlign: 'left', margin: '0 20px' }}><b>What else are you tracking?</b> Vimeo will track which videos are being watched and for how long, but there's no connection between the user and who watches the videos. I'm not using Google Analytics on the site.</p></li>
      <li><p style={{ textAlign: 'left', margin: '0 20px' }}><b>Will you sell, rent, or lease my data?</b> Nope.</p></li>
      <li><p style={{ textAlign: 'left', margin: '0 20px' }}><b>This seems too simple, will you have to add it this?</b> Probably, and if so, I'll add a date to when it was added so that you can always know you're reading the newest version.</p></li>
      </ul>
    </div>
  );
}

Login.propTypes = propTypes;

export default withAuth(withRouter(Login), { logoutRequired: true });
