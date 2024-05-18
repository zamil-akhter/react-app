import React, { Component } from 'react'

class userdata extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            userName : "Zamil Akhter",
            rollNumber : "61"
        }
    }
  render() {
    return (
      <div>
        <h3>user {this.state.userName} has roll number {this.state.rollNumber} using state</h3>
      </div>
    )
  }
}

export default userdata;
