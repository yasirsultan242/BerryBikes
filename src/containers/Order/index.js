import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

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
                  <div class='row'>
                    <div class='col-md-3 icons'>
                      <i class='fa fa-phone  ml-2 mt-2'></i>
                      <i class='fa fa-envelope  ml-2 mt-2'></i>
                      <i class='fa fa-address-book-o ml-2 mt-3'></i>
                    </div>
                    <div class='col-md-9 texts'>
                      <label class='mt-2'>(333) 514-2005</label>
                      <label class='mt-2'>wolfberrry@gmail.com</label>
                      <label class='mt-2'>United States</label>
                    </div>
                  </div>
                </div>
                <div class='row pt-4'>
                  <div class='col-md-4 social-icons '>
                    <FaFacebook size='2rem' />
                  </div>
                  <div class='col-md-4 social-icons'>
                    <FaTwitter size='2rem' />
                  </div>
                  <div class='col-md-4 social-icons'>
                    <FaGithub size='2rem' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default index;
