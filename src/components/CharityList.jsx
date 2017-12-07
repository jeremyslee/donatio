import React, { Component } from 'react';
import Charity from './Charity.jsx';
import '../styles/CharityList.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class CharityList extends Component {
  render() {
    const list = this.props.charityList
    .filter(c => !this.props.selectedCountry && !this.props.selectedCategory || c.country === this.props.selectedCountry || c.category === this.props.selectedCategory)
    .map(
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
        <h1 className='title'>Donate Money for Charity</h1>
        <h3 className='title2'>The money you donate is delivered directly to the charity you choose.</h3> <br/>
        <div className='selectDiv'>
        <h4 className='select'> Country </h4>
        <Select
          name="form-field-name"
          value={this.props.selectedCountry}
          onChange={this.props.handleChangeCountry}
          options={this.props.countries.map(
            (country) => {
              return {value: country.country, label: country.country}
            }
          )}
        />
         <h4 className='select'> Category </h4>
         <Select
          name="form-field-name"
          value={this.props.selectedCategory}
          onChange={this.props.handleChangeCategory}
          options={this.props.categories.map(
            (category, index) => {
              return {value: category.category, label: category.category}
            }
          )}
        />
        </div>
        <button className='showMore' type='button' onClick={this.props.showMore}>Show more</button>
        {list}
      </div>
    
    );
  };
}
export default CharityList;
