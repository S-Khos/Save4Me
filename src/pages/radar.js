import React, { Component } from "react";
import DeckGL, { IconLayer, TextLayer } from "deck.gl";
import {Container} from './RadarElements';
import { Map } from "react-map-gl";
import * as d3 from "d3";
import './radar.css';

import Airplane from "./target1.png";
import destinationPoint from "./destinationPoint";

const initialViewState = {
    longitude: 0,
    latitude: 0,
    zoom: 3,
    pitch: 0,
    bearing: 0
};

class Radar extends Component {
    state = {
        airplanes: []
    };
    currentFrame = null;
    timer = null;
    fetchEverySeconds = 5;
    framesPerFetch = this.fetchEverySeconds * 30; // 60fps, 10 second intervals

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        d3.json("https://opensky-network.org/api/states/all").then(
            ({ states }) =>
                this.setState(
                    {
                        // from https://opensky-network.org/apidoc/rest.html#response
                        airplanes: states.map(d => ({
                            callsign: d[1],
                            longitude: d[5],
                            latitude: d[6],
                            velocity: d[9],
                            altitude: d[13],
                            origin_country: d[2],
                            true_track: -d[10],
                            interpolatePos: d3.geoInterpolate(
                                [d[5], d[6]],
                                destinationPoint(
                                    d[5],
                                    d[6],
                                    d[9] * this.fetchEverySeconds,
                                    d[10]
                                )
                            )
                        }))
                    },
                    () => {
                        this.startAnimation();
                        setTimeout(
                            this.fetchData,
                            this.fetchEverySeconds * 1000
                        );
                    }
                )
        );
    };

    startAnimation = () => {
        if (this.timer) {
            this.timer.stop();
        }
        this.currentFrame = 0;
        this.timer = d3.timer(this.animationFrame);
    };

    animationFrame = () => {
        let { airplanes } = this.state;
        airplanes = airplanes.map(d => {
            const [longitude, latitude] = d.interpolatePos(
                this.currentFrame / this.framesPerFetch
            );
            return {
                ...d,
                longitude,
                latitude
            };
        });
        this.currentFrame += 1;
        this.setState({ airplanes });
    };

    render() {
        const layers = [
            new IconLayer({
                id: "airplanes",
                data: this.state.airplanes,
                pickable: false,
                iconAtlas: Airplane,
                iconMapping: {
                    airplane: {
                        x: 0,
                        y: 0,
                        width: 512,
                        height: 512
                    }
                },
                sizeScale: 15,
                getPosition: d => [d.longitude, d.latitude],
                getIcon: d => "airplane",
                getAngle: d => 45 + (d.true_track * 180) / Math.PI
            }),
            new TextLayer({
                id: "text",
                data: this.state.airplanes,
                getPosition: d => [d.longitude, d.latitude],
                getText: d => d.callsign.trim()+"\n"+d.origin_country+"\n"+d.altitude+" FT\n"+d.velocity+" MPH",
                getSize: d => 10,
                getColor: d => [255, 255, 255],
                getTextAnchor: d => "start",
                getAlignmentBaseline: d => "top"
                // getAngle: d => 45 + (d.true_track * 180) / Math.PI
            }),
        ];

        return (
            <Container>
                <DeckGL
                    initialViewState={initialViewState}
                    controller={true}
                    layers={layers}

                >
                    <Map                     
                        mapboxAccessToken={'pk.eyJ1IjoiemVya3NpbiIsImEiOiJja3pucGNkM2M1cXl4Mndtenk3N3Z4M3E3In0.RoG18Su2mz2bWVi6AX_PMg'}
                        mapStyle="mapbox://styles/zerksin/ckzkj8xhy002614nx04jcmehh"
                    />
                </DeckGL>
            </Container>
        );
    }
}

export default Radar;