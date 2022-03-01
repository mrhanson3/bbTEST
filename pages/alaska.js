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
          <title>Index</title>
          <meta name="description" content="List of purchased books." />
        </Head>
        <Link href="/">
          <a>Home /</a>
        </Link>

        <div>
        <p>Hi. We're putting together a list of the places that we're going to go and some other cool things.</p><p> This isn't set in stone, so if you have questions about a place, please speak up.</p>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper style={{ padding: '10px' }}><p style={{ backgroundColor: '#f2f2f2', borderStyle: 'solid', padding: '10px', borderWidth: '1px', textAlign: 'center' }}><b>Itinerary</b></p>
            <p>Saturday, July 9 - Arrival day!</p>

            <p>Sunday, July 10 - Free morning, welcome party at Cathy's house starting mid-afternoon</p>

            <p>Monday, July 11 - Trip to Girdwood to visit <a href="https://www.alaskawildlife.org/tours-programs/">Alaska Wildlife Conservation Center</a>,  <a href="https://girdwoodbrewing.com/welcome/">Girdwood Brewing</a>, stop at <a href="https://www.adfg.alaska.gov/index.cfm%3Fadfg%3Dviewinglocations.belugapoint">Beluga Point</a>, option to add on visit to <a href="https://www.alyeskaresort.com/">Alyeska Resort</a> for hiking/tram ride if open. </p>

            <p>Tuesday, July 12 - <a href="https://www.anchoragemuseum.org/">Anchorage museum </a>(with Discovery Center for kids). Possible pool with water slide, possible dinner at <a href="https://www.humpysalaska.com/">Humpy's.</a></p>

            <p>Wednesday, July 13 - EITHER trip to Eagle River, perhaps the <a href="https://www.alaska.org/detail/eagle-river-nature-center">nature center</a>, and hike on <a href="https://www.tripadvisor.com/Attraction_Review-g30982-d4299711-Reviews-Mt_Baldy-Eagle_River_Anchorage_Alaska.html">Baldy</a> OR Visit <a href=" https://www.alaskanative.net/">Alaska Native Heritage Center</a>. Optional hike on <a href="https://www.alaska.org/detail/flattop-mountain">Flat Top.</a></p>

            <p>Thursday, July 14 - Departure day</p>


            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: '10px' }}><p style={{ backgroundColor: '#ffebe6', borderStyle: 'solid', padding: '10px', borderWidth: '1px', textAlign: 'center' }}><b>Places to Eat</b></p>
            <p><a href="https://www.snowcitycafe.com/">Snow City</a> - Most famously, it’s where President Obama and his entourage bought the <a href="https://www.eater.com/2015/9/2/9245763/obama-buys-cafes-entire-supply-cinnamon-rolls-alaska">entire stock of cinnamon rolls. </a></p>
            <p><a href="https://www.humpysalaska.com/">Humpy’s</a> - Try the Man vs Food Challenge! Or maybe <a href="https://www.humpysalaska.com/humpys-great-alaskan-alehouse-2">six of us can try it together.</a> (Scroll down a bit.)</p>
            <p><a href="https://www.49statebrewing.com/">49th State Brewing</a> - Some insight from Trip Advisor. <a href="https://www.tripadvisor.com/ShowUserReviews-g60880-d10024455-r829626665-49th_State_Brewing_Anchorage-Anchorage_Alaska.html"> Give Mitch a raise!!!</a></p>
            <p><a href="https://moosestooth.net/">Moose’s Tooth</a> - "This place is hella good" from <a href="https://www.yelp.com/biz/mooses-tooth-anchorage"> Daniel O. Pearl City, HI on Yelp.</a></p>

            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
          <Paper style={{ padding: '10px' }}><p style={{ backgroundColor: '#f7e6ff', borderStyle: 'solid', padding: '10px', borderWidth: '1px', textAlign: 'center' }}><b>Playgrounds</b></p>
              <p><a href="https://www.alaska.org/detail/elderberry-park-anchorage">Elderberry Park</a> (small but closest to downtown, only 0.2 miles from hotel) 1297 W 5th Avenue, Anchorage, AK</p>
              <p><a href="https://www.alaska.org/detail/margaret-eagan-sullivan-park">Margaret Eagen Sullivan Park</a> (1.3 miles from hotel, bigger playground)</p>
              <p><a href="https://www.alaska.org/detail/valley-of-the-moon-park">Valley of the Moon Park</a> (1.4 miles from hotel, good structure for bigger kids and separate one for younger)</p>
              <p><a href="https://www.alaska.org/detail/lynn-ary-park">Lyn Ary Park</a> (Closer to Cathy’s house, on Tony Knowles Coastal Trail) 2009 Foraker Dr, Anchorage, AK 99517</p>
          </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
          <Paper style={{ padding: '10px' }}><p style={{ backgroundColor: '#ffffb3', borderStyle: 'solid', padding: '10px', borderWidth: '1px', textAlign: 'center' }}><b>Things to Do</b></p>
          <p>Walk/Bike <a href="https://anchoragecoastaltrail.com">Tony Knowles Coastal Trail</a></p>
          <p>Play on the sand dunes at <a href="https://www.alaska.org/detail/kincaid-park">Kincaid Park</a></p>
          </Paper>
          </Grid>
          <Grid item xs={12} md={10}>
          <p>See the little arrow button on the top left next to my pic, click it. Then you can see the names of the places.</p>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1A8-uJV7JH727WK-0mVbBZaMpZyaRsHoP&ehbc=2E312F" width="840" height="480"></iframe>
          </Grid>
        </Grid>

        </div>
      </div>
    );
  }
};


export default (Index);
