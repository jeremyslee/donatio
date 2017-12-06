import React, { Component } from 'react';
import Purchase from './Purchase.jsx';
import axios from 'axios'


class PurchaseHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      donationHistory: [],
    }
  }

  componentDidMount() {
    axios.post('/purchaseHistory', {
      userId: this.props.userId
    })
    .then((response) => {
      this.setState({donationHistory: response.data})
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  render() {
    const purchases = this.state.donationHistory.map(
      (purchase, index) => {
        return <Purchase key={index} donationId={purchase.donation_id} amount={purchase.amount} />
      }
    )
    return (
      <div>
        Your Donations:
        {purchases}
      </div>
    );
  };
}
export default PurchaseHistory;
