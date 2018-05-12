import React, { Component } from 'react';

class Total extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 1000
    }
  }

  render() {
    return (
      <div className="total">
        <h3>Total: ${this.state.total}</h3>
        <button>Checkout</button>
      </div>
    )
  }
}

export default Total;
