import React, { Component } from 'react';
import { Map, Marker, Circle, GoogleApiWrapper } from 'google-maps-react';
import zips from '../zips.json';
 
export class MapContainer extends Component {
  static defaultProps = {
    zips: []
  };

  constructor(props) {
    super(props);
    this.geocoder = new props.google.maps.Geocoder();
  }

  render() {
    this.props.zips.forEach(zip => console.log(zips[zip]));
    return (
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={{ lat: 40.7128, lng: -74.0060 }}
        style={{ height: 1000 }}
      >
        {/* {Object.keys(positions).map(zip => {
          const numSources = this.props.sources.filter(source => source['Zip Code'] === zip).length
          return (
            <Circle
              key={zip}
              radius={(numSources / this.props.sources.length) * 2000}
              center={positions[zip]}
              // onMouseover={() => console.log('mouseover')}
              // onClick={() => this.filterSourcesByZip(zip)}
              // onMouseout={() => console.log('mouseout')}
              strokeColor='transparent'
              strokeOpacity={0}
              strokeWeight={5}
              fillColor='#FF0000'
              fillOpacity={0.4}
            />
          );
        })} */}
        {this.props.zips.map(zip => (
          <Marker key={zip} name={zip} position={zips[zip]} /> 
        ))}
        {/* <InfoWindow onClose={this.onInfoWindowClose}>
          <h1>{this.state.selectedPlace.name}</h1>
        </InfoWindow> */}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({ apiKey: 'AIzaSyCsfUxfZToHaKYiLO3iWn5NZWLkwiOkhbM' })(MapContainer)