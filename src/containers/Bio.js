import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Master from './Master';

/**
 * Bio component: My Biography
 */
class Home extends Component {
  render() {
    return (
      <Master>
        <Helmet>
          <title>Bio - Emery Muhozi</title>
        </Helmet>
        <div className="content">
          <h1>Bio</h1>
          <p>
            I{"'"}m a software developer, based in Nairobi Kenya <br />
            Tech enthusiast who believes in human potential and its great impact
            on the world. I{"'"}m into inspired self-taught learning. I like
            Open-source culture
            <br />
            <br />
            Currently, I{"'"}m working at Andela Kenya. Before moving to Kenya,
            I worked with different companies including T-IT Africa and
            Datasystems as a full-stack developer.
            <br />
            <br />I never finished university, I dropped from Computer
            Engineering at the University of Rwanda. I started practicing
            computer programming for the first time when I was doing
            computer-electronics in high school. After high school, I joined
            University in Electronics-telecommunication Engineering and after
            one year I switched to Computer Engineering.
            <br />
            <br />
          </p>
        </div>
      </Master>
    );
  }
}

export default Home;
