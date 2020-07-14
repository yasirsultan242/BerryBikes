import React, { Component } from 'react';
import Header from '../Header';
import Part1 from '../../assets/images/part1.jpg';
import Part2 from '../../assets/images/part2.jpg';
import Part3 from '../../assets/images/part3.jpg';
import Part4 from '../../assets/images/part4.jpg';
import Part5 from '../../assets/images/part5.jpg';
import Part6 from '../../assets/images/part6.jpg';

export class index extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div class='responsiveother'>
          <div class='responsive mb-2'>
            <div class='gallery'>
              <img src={Part1} alt='Forest' width='600' height='300' />
              <div class='desc'>50% discount</div>
            </div>
          </div>

          <div class='responsive'>
            <div class='gallery'>
              <img src={Part2} alt='Northern Lights' width='600' height='300' />
              <div class='desc'>40% discount</div>
            </div>
          </div>

          <div class='responsive'>
            <div class='gallery'>
              <img src={Part3} alt='Mountains' width='600' height='300' />
              <div class='desc'>20% discount</div>
            </div>
          </div>

          <div class='clearfix'></div>

          <div class='responsive'>
            <div class='gallery'>
              <img src={Part4} alt='Cinque Terre' width='600' height='300' />
              <div class='desc'>30% discount</div>
            </div>
          </div>

          <div class='responsive'>
            <div class='gallery'>
              <img src={Part5} alt='Forest' width='600' height='300' />
              <div class='desc'>60% discount</div>
            </div>
          </div>

          <div class='responsive'>
            <div class='gallery'>
              <img src={Part6} alt='Mountains' width='600' height='300' />
              <div class='desc'>10% discount</div>
            </div>
          </div>

          <div class='clearfix'></div>
        </div>
      </div>
    );
  }
}

export default index;
