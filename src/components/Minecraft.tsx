import {Component} from "react";
import React from "react";

interface IProps {
    visible: boolean;
}

class Minecraft extends Component<IProps, object> {
    public render() {

        const display = this.props.visible ? 'block' : 'none';

        return (
            <section id="minecraft" style={{display: display}}>
                <h2>Minecraft</h2>

                <img src="gif/spinning-dice.gif"/>
                <img src="gif/spinning-dice.gif"/>
                <img src="gif/spinning-dice.gif"/>
                <img src="gif/spinning-dice.gif"/>
                <img src="gif/spinning-dice.gif"/>
                <img src="gif/spinning-dice.gif"/>

                <p>Unser Firmenname ist Nimblecraft – was läge näher, als einen eigenen Minecraft-Server
                    anzubieten!</p>

                <p>Unser Minecraft-Server verwendet eine Whitelist. Bitte kontaktiere uns unter
                    <img src="aksdlfjksldf.png"/> , um auf die Whitelist zu kommen!</p>
            </section>
        );
    }
}

export default Minecraft;
