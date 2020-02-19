import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

import { geolocated } from 'react-geolocated';
import { withAuthorization } from '../../components/Session';


import Geoloc from './Geoloc';

import "./Maps.scss";

const Maps = () => (
    <Plan />
)
mapboxgl.accessToken = "pk.eyJ1IjoiYWx5bXgiLCJhIjoiY2s1czJjN3RmMDV3OTNsbzE3cHl2aGRpeSJ9.Tqh2wRgX4VKL5PF0vhDupg";

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: 12.4914,
            lat: 6.9772,
            zoom: 4.85,
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    handleCoord = (coord) => {
        this.setState.lng = coord.long;
        this.setState.lat = coord.lat;
        console.log("valeurs: " + coord.long + "et" + coord.lat);

    }

    render() {
        return (

            <section className="secondaire sectionMap">
                {/* <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.485185623327!2d11.482445527720174!3d3.8240691554908164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bd0261bb7ffff%3A0xb5c2179e2f6d7730!2sF.%20ONANA!5e1!3m2!1sfr!2scm!4v1578055554274!5m2!1sfr!2scm" width="400" height="300" frameborder="0" style={{ "border": "0" }} allowfullscreen=""></iframe> */}
                {/* <iframe title="maps" width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=11.482566297054293%2C3.8352878962582038%2C11.485843956470491%2C3.837265607325087&amp;layer=transportmap" style={{ "border": "1px solid black" }}></iframe><br /><small>*<a href="https://www.openstreetmap.org/#map=19/3.83628/11.48421&amp;layers=TN">Afficher une carte plus grande</a>*</small> */}
                <div id='map' className="iframe" ref={(el) => this.mapContainer = el} ></div>
                <div className="sidebarStyle">
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div className="carte">
                    <h1>Hell world!</h1>
                    <p>{this.props.coords && this.props.coords.longitude}<br />{this.props.coords && this.props.coords.latitude}</p>
                    <Geoloc {...this.props} handleCoord={(e) => this.handleCoord} />
                </div>
            </section>
        )
    }
}

const Plan = geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Main);


const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Maps);