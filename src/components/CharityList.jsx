import React, { Component } from 'react';
import Charity from './Charity.jsx';

class CharityList extends Component {
  render() {
    const list = this.props.charityList.map(
      (charity, index) => {
        return <Charity
          key={index}
          addToCart={this.props.addToCart}
          charity={charity}
          />
      }
    )
    return (
      <div className='charity-list'>
        {list}
      </div>
    );
  };
}
export default CharityList;
