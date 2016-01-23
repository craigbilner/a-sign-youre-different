import React, { Component, PropTypes } from 'react';

export default class SomeInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.handleChange}
      />
    );
  }
}

SomeInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
