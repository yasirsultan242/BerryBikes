import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Grid } from '@material-ui/core';
import menu1 from '../../assets/images/img6.jpg';
import menu2 from '../../assets/images/img5.png';
import menu3 from '../../assets/images/img4.jpg';
import { Typography } from 'antd';

export class index extends Component {
  render() {
    return (
      <div id='site-wrapper'>
        <Header />

        <section id='content'>
          <div
            class='container'
            style={{ textAlign: 'center', verticalAlign: 'center' }}
          >
            <Grid
              style={{ marginTop: 30 }}
              container
              direction='row'
              justify='center'
              alignItems='flex-start'
              spacing={4}
            >
              <Grid item>
                <img alt='' src={menu1} style={{ maxWidth: 1000 }} />
              </Grid>
              <Grid item>
                <img alt='' src={menu2} style={{ maxWidth: 1000 }} />
              </Grid>
              <Grid item>
                <img alt='' src={menu3} style={{ maxWidth: 1000 }} />
              </Grid>
            </Grid>
          </div>
        </section>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default index;
