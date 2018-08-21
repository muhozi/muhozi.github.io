import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Menu Component
 */
const Menu = () => (
  <div className="btn-menu columns">
    <div className="column">
      <Link to="/" className="button is-fullwidth">
        About
      </Link>
    </div>
    <div className="column">
      <Link to="/bio" className="button is-fullwidth">
        Bio
      </Link>
    </div>
    <div className="column">
      <Link to="/build-with" className="button is-fullwidth">
        I build with
      </Link>
    </div>
  </div>
);

/**
 * Master Component: Menus & profile
 */
export default class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }
  toggleMenu = () => this.setState({ menu: !this.state.menu });
  render() {
    const props = this.props;
    const collapseMenu = this.state.menu ? 'is-active' : null;
    return (
      <section className="hero hero-wrapper">
        <nav id="navbar" className="navbar has-shadow is-spaced">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item brand-text" to="/">
                <h1 className="title">M. Emery</h1>
              </Link>
              <a
                role="button"
                className={`navbar-burger ${collapseMenu}`}
                aria-label="menu"
                aria-expanded="false"
                onClick={this.toggleMenu}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div
              className={`navbar-menu ${collapseMenu}`}
            >
              <div className="navbar-end is-hidden-desktop">
                <Menu />
              </div>
            </div>
          </div>
        </nav>
        <div className="hero-body wrap">
          <div className="columns body">
            <div className="column has-text-centered">
              <div className="profile">
                <img
                  src="https://avatars.githubusercontent.com/u/5815755"
                  className="profile-img"
                  alt="Emery Muhozi"
                />
                <div className="social-icons">
                  <a href="https://twitter.com/EmeryMuhozi" target="__blank">
                    <i className="icon ion-logo-twitter" />
                  </a>
                  <a href="https://github.com/muhozi" target="__blank">
                    <i className="icon ion-logo-github" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emerymuhozi"
                    target="__blank"
                  >
                    <i className="icon ion-logo-linkedin" />
                  </a>
                  <a href="https://instagram.com/marksman.me" target="__blank">
                    <i className="icon ion-logo-instagram" />
                  </a>
                </div>
                <span className="is-hidden-mobile">
                  <Menu />
                </span>
              </div>
            </div>
            <div className="column is-three-fifths">{props.children}</div>
          </div>
          <hr />
          <div className="columns">
            <div className="column has-text-weight-light has-text-centered bottom-footer">
              <i>
                Built by{' '}
                <a href="https://github.com/muhozi" target="__blank">
                  Emery
                </a>
                &nbsp; Check the source code&nbsp;
                <a
                  href="https://github.com/muhozi/muhozi.github.io"
                  target="__blank"
                >
                  here
                </a>
              </i>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
Master.propTypes = {
  children: PropTypes.node
};
