import React, { Component } from 'react';

const HigherOrderComponent = (OriginalComponent) => {
  class EnhancedComponent extends Component {
    
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

     incrementCount = () => {
     this.setState({ count: this.state.count + 1 });
    };
    

    render() {
      return (
        <div>
          <OriginalComponent
            count={this.state.count}
            increment={this.incrementCount}
          />
        </div>
      );
    }
  }

  return EnhancedComponent;
};

export default HigherOrderComponent;
