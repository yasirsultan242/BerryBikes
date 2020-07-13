import React, { Component } from 'react';

export class index extends Component {
  render() {
    return (
      <header id='header'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-12'>
              <nav
                id='main-nav'
                class='hidden-xs headerr'
                style={{ backgroundColor: 'transparent' }}
              >
                <ul>
                  <li>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href='/parts'>Parts</a>
                  </li>
                  <li>
                    <a href='/promos'>Promos</a>
                  </li>
                  <li>
                    <a href='/contact'>Contact us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default index;
