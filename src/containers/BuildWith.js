import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Video from '../components/VideoPlayer';
import Master from './Master';
import { Helmet } from "react-helmet";

/**
 * BuildWith Component: Languages, Frameworks I use
 */
export default class BuildWith extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initPlayer: false
    };
  }
  componentDidMount() {
    this.setState({ initPlayer: true });
  }
  playVideo = () => this.setState({ initPlayer: true });

  render = () => (
    <Master>
      <Helmet>
        <title>I build with - Emery Muhozi</title>
      </Helmet>
      <div className="content">
        <h1>I build with</h1>
        <p>
          I wrote the codes for the first time when I was in High school in 2013
          the primary coding practices were web related like using languages
          like PHP and Javascript accompanied with HTML and CSS. After high
          school, I started to work on real-world projects, particularly related
          to web development. I released the first used web application in May
          2015. For now, I primarily use Javascript, Python, and PHP.
        </p>
        <h2>Javascript</h2>
        <p>
          For me, Javascript is Sexier than others, despite{' '}
          <a
            target="__blank"
            href="https://sdtimes.com/softwaredev/is-the-javascript-fatigue-real/"
          >
            its fatigue
          </a>
          ! I have been using Javascript on numerous projects with different
          frameworks for both backend and front-end.
        </p>
        <b>UI JS Frameworks I build with:</b>
        <ul>
          <li>
            React / React-native{' '}
            <span role="img" aria-label="em">
              💖
            </span>{' '}
            (Others related: Redux, NextJS)
          </li>
          <li>JQuery</li>
        </ul>
        <b>NodeJS Frameworks I build with:</b>
        <ul>
          <li>ExpressJS(Mostly)</li>
          <li>HapiJS</li>
        </ul>
        <h2>Python</h2>
        <p>
          I started using Python in 2017, I started using for job qualification.
          Currently, I use python frequently: I build with <b>Django</b> and{' '}
          <b>Flask</b> Frameworks.
        </p>
        <h2>PHP</h2>
        <p>
          I have been using PHP(Hardcoded) since high school. After finishing
          high started using a framework which was <b>Laravel</b>. I started
          using Laravel in 2016 (It was Version 5.2). At the moment I don
          {"'"}t use it Laravel/PHP frequently except for quick and small
          projects(like Hackathons)
        </p>
        <h2>HTML/CSS</h2>I build using HTML,CSS, and SASS. I mostly use
        Bootstrap as a Framework
        <h2>Others</h2>
        Due to working in full-stack web development made me build with the
        followings:
        <li>REST APIs design</li>
        <li>Third-party API integrations</li>
        <li>Web Sockets(Socket.io)</li>
        <li>Firebase</li>
        <li>
          Linux web server configurations(Currently using Digital ocean
          droplets)
        </li>
        <li>SQL Databases(MySQL, PostgreSQL, SQLite)</li>
        <li>NoSQL databases(MongoDB & RethinkDB)</li>
        <hr />
        <h1>Projects</h1>
        <p>
          The projects I{"'"}
          ve worked/working on are proprietary but I{"'"}
          ve put some open projects on{' '}
          <a target="__blank" href="https://github.com/muhozi">
            Github
          </a>{' '}
          Mostly of them are hackathons projects {'->'} Unfinished
          <span role="img" aria-label="em">
            &nbsp;🙃
          </span>
        </p>
        <hr />
        <h1>
          Some projects demo videos
          <span role="img" aria-label="em">
            &nbsp;🎬
          </span>
        </h1>
        <Video
          videoId={this.state.src}
          init={this.state.initPlayer}
          onPlay={() => this.playVideo()}
        />
        <h1>IMO</h1>
        <hr />
        Programming language or Framework doesn
        {"'"}t matter, what matters is what you
        {"'"}
        re building.
      </div>
    </Master>
  );
}

BuildWith.propTypes = {
  children: PropTypes.node
};
