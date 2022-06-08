import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// eslint-disable-next-line react/prefer-stateless-function
class Index extends React.Component {
  render() {
    return (

      <div style={{ padding: '10px 45px' }}>
        <Head>
          <title>Baseball 2022</title>
          <meta name="description" content="List of purchased books." />
        </Head>
        <Link href="/">
          <a>Home /</a>
        </Link>

        <div>
        <p>Hi. This is going to be the baseball 2022 gambling page. Last year, the worst of the losing teams, lost more than the best winning teams won, so I'm going to best on the losers and see if I can come out ahead. </p>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: '10px' }}><p style={{ backgroundColor: '#f2f2f2', borderStyle: 'solid', padding: '10px', borderWidth: '1px', textAlign: 'center' }}><b>Itinerary</b></p>



            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: '10px' }}><p style={{ backgroundColor: '#ffebe6', borderStyle: 'solid', padding: '10px', borderWidth: '1px', textAlign: 'center' }}><b>Places to Eat</b></p>

            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
          <Paper style={{ padding: '10px' }}><p style={{ backgroundColor: '#f7e6ff', borderStyle: 'solid', padding: '10px', borderWidth: '1px', textAlign: 'center' }}><b>Playgrounds</b></p>
              
          </Paper>
          </Grid>

        </Grid>

        </div>
      </div>
    );
  }
};


export default (Index);
