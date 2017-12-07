import React, { Component } from 'react';
import '../styles/Charity.css';

class Charity extends Component {
  render() {
    const {
      image,
      category,
      country,
      title,
      organization,
      summary
    } = this.props.charity
    return (
      <div className='charity-item'>
        <div className='image-container'>
          <img className='charity-img' alt='photograph' src={image} />
        </div>
        <div className='charity-text'>
        <h3>{category.toUpperCase()} | {country.toUpperCase()}</h3>
        <h4>Title: {title}</h4>
        <p>By: {organization}</p>
        <p>Summary: {summary}</p>
        </div>
        <button className='add-to-cart-button' onClick={() => this.props.addToCart(organization)}>Add to cart</button>
      </div>
    );
  };
}
export default Charity;
