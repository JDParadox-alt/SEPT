import React, { Fragment, Component } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';
import BusinessList from './BusinessList';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        {/* <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-primary">New</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div> */}
        <BusinessList />
        <HomeContent />
      </Fragment>
    )
  }
}
