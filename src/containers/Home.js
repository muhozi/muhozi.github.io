import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Master from './Master';

/**
 * Home component: About me
 */
class Home extends Component {
  render() {
    return (
      <Master>
        <Helmet>
          <title>About - Emery Muhozi</title>
        </Helmet>
        <div className="content bg">
          <h1 className="has-text-weight-light">Hello,</h1>
          <h2 className="has-text-weight-light">My name is Emery Muhozi</h2>
          <p>
            I{"'"}m a software developer at{' '}
            <a target="__blank" href="https://andela.com">
              Andela
            </a>
            , based in Nairobi Kenya.
            <br /> I believe in inspired self-taught learning and human
            potential.
            <br />I{"'"}m a tech enthusiast and love Open-source.
            <br />
            <br />I preach programming and build cool things using codes.
            <br />
            <br />
            <b>
              <br />
              Check out some of my projects on{' '}
              <a target="__blank" href="https://github.com/muhozi">
                Github
              </a>{' '}
              and what I build with <Link to="/build-with">here</Link>
            </b>
            <br />
            <br />
            <i>
              Nice to meet with you. Thanks for checking this out.
              <br />
              You
              {"'"}
              re welcome to share some ideas on anything.
            </i>
          </p>
        </div>
      </Master>
    );
  }
}

export default Home;
