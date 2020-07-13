import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export class index extends Component {
  render() {
    return (
      <div id='site-wrapper'>
        <Header />
        <section id='content'>
          <div class='container'>
            <div class='row'>
              <div class='span8 offset2 page-content'>
                <h1>Welcome To the Gallery!</h1>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default index;
