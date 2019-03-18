import {Component} from "react";
import React from "react";

interface IProps {
    visible: boolean;
}

class Locations extends Component<IProps, object> {
    public render() {

        const display = this.props.visible ? 'block' : 'none';

        return (
            <section id="standorte" style={{display: display}}>
                <h2>Standorte</h2>

                <img src="map.png" style={{maxWidth: '100%'}}/>
            </section>
        );
    }
}

export default Locations;
