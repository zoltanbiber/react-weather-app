import React, { Component } from 'react';


// In index.html we are including a script to Google Maps API js
// This is nice: we can start using it out of the box (try google.maps in console)
// And not so nice: so far we have used components for every UI element and spcified what to render on screen.
// The google maps api though already knows how to render (map) onto the screen, in other words it has no idea of how to
// integrate with a React component --> we need a bit of a different implementation this time.
class GoogleMap extends Component {
  componentDidMount() { // One of the lifecycle methods that gets called after the component has been rendered to the screen
    // This is how we create an embedded google map in our document.
    // First argument is an HTML node where we want the map to render.
    // This is a common way to interact with 3rd party libraries that don't know how to interact with the React ecosystem.
    // The second argument is an options object.
    // Gotcha: the rendered google map doesn't have any height or width! (needs CSS)
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map"></div>; // this.refs.map --> reference to this HTML element (React)
  }
}

export default GoogleMap;