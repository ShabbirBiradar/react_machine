import React, { Component } from "react";

import { FormControl } from "react-bootstrap";

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: this.props.message
    };
  }

  onChangeField = event => {
    // let isValid= false;
    const { value } = event.target;
    const email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i;
     const password = /^[a-zA-Z0-9]{5,}$/;
     const regex = new RegExp(eval(this.props.validationType));
     const isValid = regex.test(value);
     if(isValid){
         this.setState({ message: true })
     }
     else{
        this.setState({ message: this.props.message })
     }

    this.props.onChangeField(event, isValid)
  };

  render() {
    return (
      <div>
        <span className="error-msg">{ this.props.isValid ? this.state.message : ''}</span>
        <input
          type={this.props.type}
          className={this.props.className}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.onChangeField}
        />
      </div>
    );
  }
}

export default CustomInput;
