import React, { Component } from 'react';
import '../styles/App.css';

class CharityList extends Component {
  render() {
    return (
      <div className='charity-item'>
        <div>
          <img className='charity-img' alt='photograph' src={this.props.charity.image} />
        </div>
        <div className='charity-text'>
        <h3>{this.props.charity.category.toUpperCase()} | {this.props.charity.country.toUpperCase()}</h3>
        <h4>Title: {this.props.charity.title}</h4>
        <p>By: {this.props.charity.organization}</p>
        <p>Summary: {this.props.charity.summary}</p>
        </div>
        <button className='add-to-cart-button' onClick={() => this.props.addToCart(this.props.charity.organization)}>Add to cart</button>
      </div>
    );
  };
}
export default CharityList;
