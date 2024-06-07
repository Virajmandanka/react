import React, { Component } from 'react';

class Ac extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    
  }

  show = () => {
    this.setState({ count: this.state.count + 1 });
  }
  sho= () => {
    this.setState({ count: this.state.count -1 });
  
  }

  render() {
    return (
      <div >
        <div className='men'>
        <h1 className='d'>Counter</h1>
        <h1 className='d1'>{this.state.count}</h1>
        <button className='btn1' onClick={this.show}>Increment</button>
        <button className='btn1' onClick={this.sho}>Dncrement</button>
        </div>
      </div>
    );
  }
}

export default Ac;