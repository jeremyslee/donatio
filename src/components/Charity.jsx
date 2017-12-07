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
        <h5>{category.toUpperCase()} | {country.toUpperCase()}</h5>
        <h4>{title}</h4>
        <h6>by: {organization}</h6>
        <p>{summary}</p>
        <button className='add-to-cart-button' onClick={() => this.props.addToCart(organization)}>DONATE</button>
        </div>
      </div>
    );
  };
}
export default Charity;
