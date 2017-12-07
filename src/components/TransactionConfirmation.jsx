import React, { Component } from 'react';

class TransactionConfirmation extends Component {
  render() {
    return (
      <div>
        Thank you for your donation. Your confirmation number is {this.props.transactionNumber}.
      </div>
    );
  };
}
export default TransactionConfirmation;
