import React, { Component } from 'react';
import axios from 'axios';
class InformationDisplayer extends Component {
  render() {
    return (
      <div>{ this.props.information }</div>
    );
  }
}
class CreateOneItemForm extends Component {
  formSubmitted(event) {
    event.preventDefault();
    let obj = {};
    obj[this.props.inputName] = this.inputBox.value;
    axios.post(this.props.submitURL, obj).then((response) => {
      this.inputBox.value = "";
      this.props.afterSubmitted(response.data);
    })
  }
  render() {
    return (
      <form onSubmit={ this.formSubmitted.bind(this) }>
        <input type="text" ref={ (input) => this.inputBox = input}/>
        <input type="submit" value="Create" />
      </form>
    )
  }
}
export {InformationDisplayer, CreateOneItemForm};
