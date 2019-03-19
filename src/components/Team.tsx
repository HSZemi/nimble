import React, {Component} from "react";
import {Trans, WithTranslation, withTranslation} from "react-i18next";
import i18next from "i18next";

interface IProps extends WithTranslation {
    visible: boolean;
}

class Team extends Component<IProps, object> {
    public render() {

        const display = this.props.visible ? 'block' : 'none';

        return (
            <section id="team" style={{display: display}}>
                <h2><Trans>team.title</Trans></h2>

                <img src="gif/can-can-dancer-cow.gif"/>

                <article>
                    <h3><Trans>team.germany</Trans></h3>

                    <ul>
                        <li>
                            <img src="img.png"/>
                            Virginia Bechtel – {i18next.t('team.graphicDesigner', {context: 'female'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Bastian Dirks – {i18next.t('team.uiuxDesigner', {context: 'male'})}
                        </li>
                        < li>
                            < img src="img.png"/>
                            Hildetraut Ehrenberg – {i18next.t('team.businessAnalyst', {context: 'female'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Wieland Fleischmann – {i18next.t('team.developer', {context: 'female'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Wanke Franka – {i18next.t('team.divisionAssistant', {context: 'female'})} Hamburg
                        </li>
                        <li>
                            <img src="img.png"/>
                            Gertraud Freiberg – {i18next.t('team.businessAnalyst', {context: 'female'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Harribert Holzwarth – {i18next.t('team.businessAnalyst', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Bernhardt Israel – {i18next.t('team.developer', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Viviane Kipp – {i18next.t('team.hrBusinessPartner', {context: 'female'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Eckard Linn – {i18next.t('team.developer', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Joel Mack – {i18next.t('team.businessAnalyst', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Falkhard Mahn – {i18next.t('team.isSupportEngineer', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Janette Meiser – {i18next.t('team.developer', {context: 'female'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Annetrud Paulus – {i18next.t('team.developer', {context: 'female'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Elgine Poth – {i18next.t('team.uiuxDesigner', {context: 'female'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Wolfdieter Preis – {i18next.t('team.executiveAssistant', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Ulvi Schlichtling – {i18next.t('team.businessAnalyst', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Bonifaz Schön – {i18next.t('team.divisionManager', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Hartmund Scholze – {i18next.t('team.developer', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Jobs Testmeyer – {i18next.t('team.managingDirector', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Mathias Reitz – {i18next.t('team.businessAnalyst', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Dietfried Witte – {i18next.t('team.businessAnalyst', {context: 'male'})}
                        </li>
                    </ul>

                </article>

                <article>
                    <h3><Trans>team.poland</Trans></h3>
                    <ul>
                        <li>
                            <img src="img.png"/>
                            Wisław Biskup – {i18next.t('team.developer', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Artur Chalupa – {i18next.t('team.developer', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Antonius Gielgud – {i18next.t('team.developer', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Donat Jankiewicz – {i18next.t('team.developer', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Lucjan Kawecki – {i18next.t('team.developer', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Walter Lasota – {i18next.t('team.developer', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Kwiatosław Pala – {i18next.t('team.developer', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Radomir Rinas – {i18next.t('team.developer', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Eugeniusz Wirkus – {i18next.t('team.developer', {context: 'male'})}
                        </li>
                        <li>
                            <img src="img.png"/>
                            Sofroniusz Zagorski – {i18next.t('team.developer', {context: 'male'})}
                        </li>
                    </ul>
                </article>
            </section>
        );
    }
}

export default withTranslation()(Team);
