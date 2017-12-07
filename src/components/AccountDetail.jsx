import React, { Component } from 'react';
import PurchaseHistory from './PurchaseHistory.jsx';
import '../styles/AccountDetail.css';

class AccountDetail extends Component {
  render() {
    return (
      <div className='accountDetails'>
        Account Details
        <br />You are logged in.
        <PurchaseHistory userId={this.props.userId} />
        <div>
        <button className='logoutBtn' onClick={this.props.logout}>Logout</button>
        </div>
      </div>
    );
  };
}
export default AccountDetail;
