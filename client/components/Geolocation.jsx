import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setGeolocation } from 'Actions/geolocation';


class GeoLocation extends React.Component {

    static defaultProps = {
        coords: undefined,
        error: undefined,
    };

    static propTypes = {
        coords: PropTypes.shape({
            lat: PropTypes.number,
            long: PropTypes.number,
        }),
        setGeo: PropTypes.func.isRequired,
    };

    showPosition = (position) => {
        const locationString = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
        console.log(locationString);
        this.props.setGeo({
            lat: position.coords.latitude,
            long: position.coords.longitude});
    };

    getGeo = () => {
        navigator.geolocation.getCurrentPosition(this.showPosition);
    };

    renderGeolocation = () => {
        if (this.props.coords === undefined) {
            return null;
        }
        const { lat, long }  = this.props.coords;
        return (
            <div>
                Latitude: {lat}
                <br />
                Longitude: {long}
            </div>
        )
    };

    render() {
        return (
            <div>
                <h1>What is my location?</h1>
                {this.props.coords === undefined ? <button onClick={this.getGeo}>Get Geolocation</button> : ''}
                {this.renderGeolocation()}
            </div>
        );
    }
}



const mapDispatchToProps = (dispatch, ownProps) => ({
  setGeo: setGeolocation(dispatch),
});

const mapStateToProps = (state, ownProps) => state.geolocation;


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GeoLocation);
