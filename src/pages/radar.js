import React, {useState, useEffect} from 'react';
import {Container, MapContainer, MarkerIcon, Button} from './RadarElements';
import {Map, Marker} from 'react-map-gl';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
const Radar = () => {
    //https://opensky-network.org/apidoc/rest.html#limitations
    const [data, setData] = useState([]);

    const fetch = async () => {
        const response = await axios.get('https://opensky-network.org/api/states/all');
        setData(response.data.states);
        console.log(data[1][5]);
    };

    //https://mariestarck.com/how-to-display-markers-on-a-mapbox-map-mapbox-react-tutorial-part-2/
    const renderMarkers = () => {
        return data.map((target, index) => {
           return  new mapboxgl.Marker({}).setLngLat([target[5], target[6]]).addTo();      
        });
    }
    return (
        <Container>
            <MapContainer>
                <Map
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14
                }}
                mapboxAccessToken={'pk.eyJ1IjoiemVya3NpbiIsImEiOiJja3prajYyOHkxeXliMnBuMnh6eHhydzg4In0.UhHL4N2AANwPviWSdTLrkA'}
                mapStyle="mapbox://styles/zerksin/ckzkj8xhy002614nx04jcmehh"
                />
            </MapContainer>
            <Button 
                onClick={() => {fetch()}}
            >Fetch</Button>
            
        </Container>
    )
}

export default Radar
