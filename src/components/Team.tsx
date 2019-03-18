import {Component} from "react";
import React from "react";

interface IProps {
    visible: boolean;
}

class Team extends Component<IProps, object> {
    public render() {

        const display = this.props.visible ? 'block' : 'none';

        return (
            <section id="team" style={{display: display}}>
                <h2>Unser Team</h2>

                <img src="gif/can-can-dancer-cow.gif"/>


                <article>
                    <h3>Deutschland</h3>

                    <ul>
                        <li><img src="img.png"/> Virginia Bechtel – Grafikdesignerin</li>
                        <li><img src="img.png"/> Bastian Dirks – UI/UX Designer</li>
                        <li><img src="img.png"/> Hildetraut Ehrenberg – Business Analystin</li>
                        <li><img src="img.png"/> Wieland Fleischmann – Entwickler</li>
                        <li><img src="img.png"/> Wanke Franka – Assistenz der Standortleitung Hamburg
                        </li>
                        <li><img src="img.png"/> Gertraud Freiberg – Business Analystin</li>
                        <li><img src="img.png"/> Harribert Holzwarth – Business Analyst</li>
                        <li><img src="img.png"/> Bernhardt Israel – Entwickler</li>
                        <li><img src="img.png"/> Viviane Kipp – HR Business Partnerin</li>
                        <li><img src="img.png"/> Eckard Linn – Entwickler</li>
                        <li><img src="img.png"/> Joel Mack – Business Analyst</li>
                        <li><img src="img.png"/> Falkhard Mahn – IT Support Engineer</li>
                        <li><img src="img.png"/> Janette Meiser – Entwicklerin</li>
                        <li><img src="img.png"/> Annetrud Paulus – Entwicklerin</li>
                        <li><img src="img.png"/> Elgine Poth – UI/UX Designerin</li>
                        <li><img src="img.png"/> Wolfdieter Preis – Assistenz der Geschäftsführung</li>
                        <li><img src="img.png"/> Ulvi Schlichtling – Business Analyst</li>
                        <li><img src="img.png"/> Bonifaz Schön – Standortleiter</li>
                        <li><img src="img.png"/> Hartmund Scholze – Entwickler</li>
                        <li><img src="img.png"/> Jobs Testmeyer – Geschäftsführer</li>
                        <li><img src="img.png"/> Mathias Reitz – Business Analyst</li>
                        <li><img src="img.png"/> Dietfried Witte – Business Analyst</li>
                    </ul>

                </article>

                <article>
                    <h3>Polen</h3>
                    <ul>
                        <li><img src="img.png"/> Wisław Biskup – Entwickler</li>
                        <li><img src="img.png"/> Artur Chalupa – Entwickler</li>
                        <li><img src="img.png"/> Antonius Gielgud – Entwickler</li>
                        <li><img src="img.png"/> Donat Jankiewicz – Entwickler</li>
                        <li><img src="img.png"/> Lucjan Kawecki – Entwickler</li>
                        <li><img src="img.png"/> Walter Lasota – Entwickler</li>
                        <li><img src="img.png"/> Kwiatosław Pala – Entwickler</li>
                        <li><img src="img.png"/> Radomir Rinas – Entwickler</li>
                        <li><img src="img.png"/> Eugeniusz Wirkus – Entwickler</li>
                        <li><img src="img.png"/> Sofroniusz Zagorski – Entwickler</li>
                    </ul>

                </article>

            </section>
        );
    }
}

export default Team;
