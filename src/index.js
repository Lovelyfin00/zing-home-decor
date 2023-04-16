import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/about-us.css'
import './css/header.css'
import './css/hero.css'
import './css/products.css'
import './css/root-styles.css'
import './css/testimonial.css'

import { AboutUs } from './AboutUs';
import { Header } from './Header';
import { Hero } from './Hero';
import { Products } from './Products';
import { Testimonial } from './Testimonial';

const EcommerceStore = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <AboutUs />
      <Products />
      <Testimonial />
    </React.Fragment>
  )
}









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EcommerceStore />
  </React.StrictMode>
);
