import React, {useState, useEffect} from 'react';
import {Container, MapContainer, Button, MarkerIcon} from './RadarElements';
import {Map, Marker} from 'react-map-gl';
import axios from 'axios';
const Radar = () => {
    //https://opensky-network.org/apidoc/rest.html#limitations
    const [data, setData] = useState([]);
    const [fetched, setFetched] = useState(false);

    const fetch = async () => {
        if (!fetched) {
            const response = await axios.get('https://opensky-network.org/api/states/all');
            setData(response.data.states);
            setFetched(true);
        }
    };

    //https://mariestarck.com/how-to-display-markers-on-a-mapbox-map-mapbox-react-tutorial-part-2/
    const renderMarkers = () => {
        if (fetched){
            return data.slice(0, 10).map((target, index) => {
                console.log(target[6], target[5]);
                return (
                    <Marker key={index} latitude={target[6]} longitude={target[5]}>
                        <MarkerIcon/>
                    </Marker>
                )     
            });
        } else {
            console.log('not fetched');
        }
    }
    return (
        <Container>
            <MapContainer>
                <Map
                    initialViewState={{
                        longitude: 0,
                        latitude: 0,
                        zoom: 2,

                    }}
                    mapboxAccessToken={'pk.eyJ1IjoiemVya3NpbiIsImEiOiJja3prajYyOHkxeXliMnBuMnh6eHhydzg4In0.UhHL4N2AANwPviWSdTLrkA'}
                    mapStyle="mapbox://styles/zerksin/ckzkj8xhy002614nx04jcmehh"
                >
                    <Marker key={2} latitude={0} longitude={0}>
                        <MarkerIcon/>
                    </Marker>
                </Map>
            </MapContainer>
            <Button 
                onClick={() => {fetch()}}
            >Fetch</Button>
            
        </Container>
    )
}

export default Radar
