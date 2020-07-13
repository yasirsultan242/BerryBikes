import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import slide1 from '../../assets/images/biker1.jpg';
import slide2 from '../../assets/images/biker2.jpg';
import slide3 from '../../assets/images/biker3.jpg';

export class index extends Component {
  render() {
    return (
      <div id='site-wrapper'>
        <Header />
        <div id='content'>
          <div class='container'>
            <Carousel autoplay effect='fade'>
              <div>
                <img alt='' src={slide1} />
              </div>
              <div>
                <img alt='' src={slide2} />
              </div>
              <div>
                <img alt='' src={slide3} />
              </div>
            </Carousel>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default index;
