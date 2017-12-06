import React, { Component } from 'react';
import PurchaseHistory from './PurchaseHistory.jsx';

class AccountDetail extends Component {
  render() {
    return (
      <div>
        Account Details
        <br />You are logged in.
        <PurchaseHistory />
        <div>
        <button onClick={this.props.logout}>logout</button>
        </div>
      </div>
    );
  };
}
export default AccountDetail;
