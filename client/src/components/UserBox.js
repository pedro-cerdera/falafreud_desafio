import React, {Component} from 'react';
import './UserBox.css';

class UserBox extends Component {
  render() {
    return ( 
      <div className="square">
          {this.props.name}
      </div> 
    );
  }
}
export default UserBox;