import React from 'react';

export default function Hero() {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          {/* <img className="bg-hero-img" src={require('./assets/img/bg-masthead.jpg')} /> */}
          <img className="bg-hero-img" src="bg-masthead.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}
