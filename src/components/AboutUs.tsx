import {Component} from "react";
import React from "react";

interface IProps {
    visible: boolean;
}

class AboutUs extends Component<IProps, object> {
    public render() {

        const display = this.props.visible ? 'block' : 'none';

        return (
            <section id="ueberuns" style={{display: display}}>
                <h2>Über Uns</h2>

                <img src="gif/3-bobbing-hamsters.gif"/>

                <p>
                    Wir sind Nimblecraft – ein Softwareunternehmen mit Sitz in Bonn und Filialen in Hamburg und
                    Białystok
                    (PL).
                    Softwareentwicklung ist unsere Leidenschaft. Wir verlassen uns auf Java, Open Source – und
                    nicht zuletzt
                    auf unser erfahrenes Team. All dies setzen wir ein, um für unsere Kunden im Raum Köln/Bonn
                    und Hamburg
                    geschäftskritische Software zu erstellen oder Sie in Fragen der Architektur, der Werkzeuge
                    oder des
                    Vorgehens zu beraten.
                </p>
            </section>
        );
    }
}

export default AboutUs;
