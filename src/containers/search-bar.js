import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'; // could also write ../actions shorthand

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this); // We have to do this...
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value }); // ...otherwise 'this' is not the component...
  }

  onFormSubmit(event) {
    event.preventDefault(); // Telling the browser not to submit the form.
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' }); // clear the input after search is submitted
  }

  render() {
    return (
      // Intercept the onSubmit event. We don't want an SPA to send a POST request and re-render any HTML.
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} // ... because we haven't used the fat arrow function call here
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // When fetchWeather (props) is called this returns/calls a (fetchWeather) action creator
  // dispatch makes sure that the action flows down to the reducers
  // ...it binds the action creator(s) to reducers.
  return bindActionCreators({ fetchWeather }, dispatch); // shorthand for { fetchWeather: fetchWeather }
}

export default connect(null, mapDispatchToProps)(SearchBar); // null is needed in place of mapStateToProps, mapDispatchToProps needs to be the second argument

