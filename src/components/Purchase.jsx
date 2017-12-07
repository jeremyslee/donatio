import React, { Component } from 'react';

class Purchase extends Component {
  render() {
    const { donationId, amount } = this.props
    return (
      <div>
        <p>Transaction number: {donationId}</p>
        <p>Total donation: ${amount}.00</p>
      </div>
    );
  };
}
export default Purchase;
