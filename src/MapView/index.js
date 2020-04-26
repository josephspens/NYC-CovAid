import React, { Component } from 'react';
import { Map, Circle, GoogleApiWrapper } from 'google-maps-react';
import sources from '../data.json';

const positions = {
    '11377': { lat: 40.743, lng: -73.904 },
    '11209': { lat: 40.623, lng: -74.030 },
    '10016': { lat: 40.746, lng: -73.978 }
}
 
export class MapContainer extends Component {
    static defaultProps = {
        offset: 0,
        limit: 50
    };

    constructor(props) {
        super(props);
        this.geocoder = new props.google.maps.Geocoder();
        this.state = { sources: this.getSources(props) }
    }

    componentDidUpdate(props) {
        if (props.offset !== this.props.offset ||
            props.limit !== this.props.limit ||
            props.filters !== this.props.filters) {
            this.setState({ sources: this.getSources(props) });
        }
    }

    getSources(props = this.props) {
        return sources
            .filter(source => !!props.filters.category ? source.Service === props.filters.category : true)
            .slice(props.offset, props.offset + props.limit)
            .map(source => ({ ...source, position: positions[source['Zip Code']] }));
    }

    filterSourcesByZip(zip) {
        this.setState({
            sources: this.getSources().filter(source => source['Zip Code'] === zip)
        })
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
                initialCenter={{ lat: 40.7128, lng: -74.0060 }}
                style={{ height: 1000 }}
            >
                {Object.keys(positions).map(zip => {
                    const numSources = this.state.sources.filter(source => source['Zip Code'] === zip).length
                    return (
                        <Circle
                            key={zip}
                            radius={(numSources / this.state.sources.length) * 2000}
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
                })}
                {/* {this.state.sources.map(source => (
                    <Marker key={source.Name} name={source.Name} position={source.position} /> 
                ))} */}
                {/* <InfoWindow onClose={this.onInfoWindowClose}>
                    <h1>{this.state.selectedPlace.name}</h1>
                </InfoWindow> */}
            </Map>
        );
    }
}
 
export default GoogleApiWrapper({ apiKey: 'AIzaSyCsfUxfZToHaKYiLO3iWn5NZWLkwiOkhbM' })(MapContainer)