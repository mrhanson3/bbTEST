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
          <title>Alaska</title>
          <meta name="description" content="List of purchased books." />
        </Head>
        <Link href="/">
          <a>Home /</a>
        </Link>

        <div>
        <p>Hi. We're putting together a list of the places that we're going to go and some other cool things. You're free to join as many of the group outings on the agenda as you want, or to do your own thing at any time!</p><p> This isn't set in stone, so if you have questions about a place, please speak up.</p>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper style={{ padding: '10px' }}><p style={{ backgroundColor: '#f2f2f2', borderStyle: 'solid', padding: '10px', borderWidth: '1px', textAlign: 'center' }}><b>Itinerary</b></p>
            <p>Saturday, July 9 - Arrival day! Check in to the hotel and get acclimated. Optional office hours / happy hour at Fletcher's in the Captain Cook hotel.</p>

            <p>Sunday, July 10 - Free morning. Welcome party at the Villa house (home of Clayton's mom and stepdad) starting at 3:00 PM. </p>

            <p>Monday, July 11 - Road trip to Girdwood to visit <a href="https://www.alaskawildlife.org/tours-programs/">Alaska Wildlife Conservation Center</a>,  <a href="https://girdwoodbrewing.com/welcome/">Girdwood Brewing</a>, and have lunch. Stop at <a href="https://www.adfg.alaska.gov/index.cfm%3Fadfg%3Dviewinglocations.belugapoint">Beluga Point</a> for scenic vistas. All ages. </p><p>Option to add on visit to <a href="https://www.alyeskaresort.com/">Alyeska Resort</a> for hiking/tram ride if open. </p>

            <p>Tuesday, July 12 - Morning: <a href="https://www.anchoragemuseum.org/">Anchorage museum </a>(with Discovery Center for kids). All ages. Afternoon: Possible <a href="https://www.muni.org/departments/parks/pages/westpool.aspx">pool with water slide</a>. All ages.</p>

            <p>Wednesday, July 13 - Choose your adventure: Trip to Eagle River, perhaps the <a href="https://www.alaska.org/detail/eagle-river-nature-center">nature center</a>, and hike on <a href="https://www.tripadvisor.com/Attraction_Review-g30982-d4299711-Reviews-Mt_Baldy-Eagle_River_Anchorage_Alaska.html">Baldy</a>. Half-day. Best for adults. </p> <p>Or visit <a href=" https://www.alaskanative.net/">Alaska Native Heritage Center</a>. All ages. Half-day. Optional hike on <a href="https://www.alaska.org/detail/flattop-mountain">Flat Top.</a> Best for adults. Dinner at <a href="https://beartoothgrill.net/menu/">Bear Tooth Grill</a>.</p>

            <p>Thursday, July 14 - Departure day</p>


            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: '10px' }}><p style={{ backgroundColor: '#ffebe6', borderStyle: 'solid', padding: '10px', borderWidth: '1px', textAlign: 'center' }}><b>Places to Eat</b></p>
            <p><a href="https://www.snowcitycafe.com/">Snow City</a> - Most famously, it’s where President Obama and his entourage bought the <a href="https://www.eater.com/2015/9/2/9245763/obama-buys-cafes-entire-supply-cinnamon-rolls-alaska">entire stock of cinnamon rolls. </a></p>
            <p><a href="https://www.humpysalaska.com/">Humpy’s</a> - Try the Man vs Food Challenge! Or maybe <a href="https://www.humpysalaska.com/humpys-great-alaskan-alehouse-2">six of us can try it together.</a> (Scroll down a bit.)</p>
            <p><a href="https://www.49statebrewing.com/">49th State Brewing</a> - Some insight from Trip Advisor. <a href="https://www.tripadvisor.com/ShowUserReviews-g60880-d10024455-r829626665-49th_State_Brewing_Anchorage-Anchorage_Alaska.html"> Give Mitch a raise!!!</a></p>
            <p><a href="https://moosestooth.net/">Moose’s Tooth</a> - "This place is hella good" from <a href="https://www.yelp.com/biz/mooses-tooth-anchorage"> Daniel O. Pearl City, HI on Yelp.</a></p>
            <p><a href="https://rusticgoatak.com/">Rustic Goat</a> - 2.5 miles away. Lunch and dinner. "This place is hella good" from Clayton H. Charlotte, NC.</p>
            <p><a href="http://www.bernieslounge.com/home.html">Bernie's Bugalow</a> - A frequent sighting spot of <a href="https://www.adn.com/voices/article/recalling-alaskas-most-notorious-drunken-moose-street-smart-buzzwinkle/2013/09/10/">Buzzwinkle, the notorious drunken moose.</a></p>
            <p><a href="https://captaincook.com/dining/crows-nest/">Crow's Nest</a> - Inside the Hotel Captain Cook. Fine dining.</p>

            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
          <Paper style={{ padding: '10px' }}><p style={{ backgroundColor: '#f7e6ff', borderStyle: 'solid', padding: '10px', borderWidth: '1px', textAlign: 'center' }}><b>Playgrounds</b></p>
              <p><a href="https://www.alaska.org/detail/elderberry-park-anchorage">Elderberry Park</a> (small but closest to downtown, only 0.2 miles from hotel) 1297 W 5th Avenue, Anchorage, AK</p>
              <p><a href="https://www.alaska.org/detail/margaret-eagan-sullivan-park">Margaret Eagen Sullivan Park</a> (1.3 miles from hotel, bigger playground)</p>
              <p><a href="https://www.alaska.org/detail/valley-of-the-moon-park">Valley of the Moon Park</a> (1.4 miles from hotel, good structure for bigger kids and separate one for younger)</p>
              <p><a href="https://www.alaska.org/detail/lynn-ary-park">Lyn Ary Park</a> (Closer to Cathy’s house, on Tony Knowles Coastal Trail) 2009 Foraker Dr, Anchorage, AK 99517</p>
          </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
          <Paper style={{ padding: '10px' }}><p style={{ backgroundColor: '#f7e6ff', borderStyle: 'solid', padding: '10px', borderWidth: '1px', textAlign: 'center' }}><b>Some Tips</b></p>
              <p>What to pack - If you plan to hike, bring or plan to buy a water bottle, snacks, bear spray, bug repellant, and whistle.</p><p> Weather is usually in the 50s, 60s, and 70s. Like your mom always said, think layers. Casual and athleisure wear will be what you need every day. If you want to go to a nicer restaurant, jeans and a polo/non-t-shirt top will be fine. That's the fanciest you'll have to get. </p>
              <p>Bear spray isn't like bug spray, it isn't a repellant, so please don't spray yourself. Spray the bear.</p>
              <p>Speaking of wild animals, don't mess with them. Moose are extremely dangerous. <a href="https://www.dailymotion.com/video/x8bfrjf">Here's a LOUD video of a moose chasing off a bear.</a></p>
              <p>Lastly, Alaska Native or Natives is the term for the indigenous population. Native Alaskan is someone born in Alaska. I'm both. Really try not to say Eskimo. We can talk about it later if you would like.</p>


          </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
          <Paper style={{ padding: '10px' }}><p style={{ backgroundColor: '#F9A825', borderStyle: 'solid', padding: '10px', borderWidth: '1px', textAlign: 'center' }}><b>Things to Do</b></p>
              <p>Walk/Bike <a href="https://anchoragecoastaltrail.com">Tony Knowles Coastal Trail</a></p>
              <p>Play on the sand dunes at <a href="https://www.alaska.org/detail/kincaid-park">Kincaid Park</a></p>
              <p><a href="https://www.alaska.org/detail/the-bait-shack">Rent fishing equipment</a> and fish in the river</p>
              <p><a href="https://www.pablobicyclerentals.com/">Rent a bike</a></p>
              <p>Visit <a href="http://www.wavebooks.com/">Title Wave books</a> - one of the biggest used bookstores in the country and Alaska’s biggest bookstore</p>
              <p>Visit <a href="https://www.h2oasiswaterpark.com/plan-your-trip">Indoor water park H2Oasis.</a></p>
              <p>Visit <a href="https://skinnyraven.com/">Skinny Raven</a> - Awesome specialty running store</p>
              <p>Visit <a href="https://getairsports.com/anchorage/">Get Air trampoline park.</a></p>

          </Paper>
          </Grid>
          <Grid item xs={12} md={9}>
          <p>See the little arrow button on the top left next to my pic, click it. Then you can see the names of the places.</p>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1A8-uJV7JH727WK-0mVbBZaMpZyaRsHoP&ehbc=2E312F" width="80%" height="480"></iframe>
          </Grid>
        </Grid>

        </div>
      </div>
    );
  }
};


export default (Index);
