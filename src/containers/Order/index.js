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
                <h1>Contact Info</h1>

                <div class='contact-info'>
                  <i class='fa fa-phone fa-3x'></i>
                  <span>(333) 514-2005</span>
                  <br />
                  <i class='fa fa-envelope fa-2x'></i>
                  <span>wolfberry@domain.com</span>
                </div>
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
