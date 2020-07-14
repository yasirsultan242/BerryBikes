import React, { Component } from 'react';

export class index extends Component {
  render() {
    return (
      <header id='header'>
        <div class='container'>
          <nav> 
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
      </header>
    );
  }
}

export default index;
