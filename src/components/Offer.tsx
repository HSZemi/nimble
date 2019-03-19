import {Component} from "react";
import React from "react";
import {Trans, WithTranslation, withTranslation} from "react-i18next";

interface IProps extends WithTranslation {
    visible: boolean;
}

class Offer extends Component<IProps, object> {
    public render() {

        const display = this.props.visible ? 'block' : 'none';

        return (
            <section id="angebot" style={{display: display}}>
                <h2><Trans>offer.title</Trans></h2>

                <img src="gif/ringing-bell.gif"/>

                <article>
                    <h3><Trans>offer.productDevelopment.title</Trans></h3>
                    <p><Trans>offer.productDevelopment.content</Trans></p>
                </article>

                <img src="gif/hacking-computer-nerd.gif"/>

                <article>
                    <h3><Trans>offer.digitilization.title</Trans></h3>
                    <p><Trans>offer.digitilization.content</Trans></p>
                </article>

                <img src="gif/computer-using-itself.gif"/>

                <article>
                    <h3><Trans>offer.consulting.title</Trans></h3>
                    <p><Trans>offer.consulting.content</Trans></p>
                </article>

                <img src="gif/business-people-talking.gif"/>

                <article>
                    <h3><Trans>offer.maintenance.title</Trans></h3>
                    <p><Trans>offer.maintenance.content</Trans></p>
                </article>

                <img src="gif/bouncing-computer-station.gif"/>

                <article>
                    <h3><Trans>offer.ourSystems.title</Trans></h3>
                    <ul>
                        <li><Trans>offer.ourSystems.content.1</Trans></li>
                        <li><Trans>offer.ourSystems.content.2</Trans></li>
                        <li><Trans>offer.ourSystems.content.3</Trans></li>
                        <li><Trans>offer.ourSystems.content.4</Trans></li>
                        <li><Trans>offer.ourSystems.content.5</Trans></li>
                        <li><Trans>offer.ourSystems.content.6</Trans></li>
                        <li><Trans>offer.ourSystems.content.7</Trans></li>
                        <li><Trans>offer.ourSystems.content.8</Trans></li>
                        <li><Trans>offer.ourSystems.content.9</Trans></li>
                    </ul>
                </article>

                <img src="gif/fire-burning-hot-text.gif"/>

                <article>
                    <h3><Trans>offer.ourTools.title</Trans></h3>
                    <dl>
                        <dt><Trans>offer.ourTools.content.1.dt</Trans></dt>
                        <dd><Trans>offer.ourTools.content.1.dd</Trans></dd>

                        <dt><Trans>offer.ourTools.content.2.dt</Trans></dt>
                        <dd><Trans>offer.ourTools.content.2.dd</Trans></dd>

                        <dt><Trans>offer.ourTools.content.3.dt</Trans></dt>
                        <dd><Trans>offer.ourTools.content.3.dd</Trans></dd>

                        <dt><Trans>offer.ourTools.content.4.dt</Trans></dt>
                        <dd><Trans>offer.ourTools.content.4.dd</Trans></dd>

                        <dt><Trans>offer.ourTools.content.5.dt</Trans></dt>
                        <dd><Trans>offer.ourTools.content.5.dd</Trans></dd>

                        <dt><Trans>offer.ourTools.content.6.dt</Trans></dt>
                        <dd><Trans>offer.ourTools.content.6.dd</Trans></dd>

                        <dt><Trans>offer.ourTools.content.7.dt</Trans></dt>
                        <dd><Trans>offer.ourTools.content.7.dd</Trans></dd>

                        <dt><Trans>offer.ourTools.content.8.dt</Trans></dt>
                        <dd><Trans>offer.ourTools.content.8.dd</Trans></dd>

                        <dt><Trans>offer.ourTools.content.9.dt</Trans></dt>
                        <dd><Trans>offer.ourTools.content.9.dd</Trans></dd>

                        <dt><Trans>offer.ourTools.content.10.dt</Trans></dt>
                        <dd><Trans>offer.ourTools.content.10.dd</Trans></dd>

                        <dt><Trans>offer.ourTools.content.11.dt</Trans></dt>
                        <dd><Trans>offer.ourTools.content.11.dd</Trans></dd>

                        <dt><Trans>offer.ourTools.content.12.dt</Trans></dt>
                        <dd><Trans>offer.ourTools.content.12.dd</Trans></dd>

                    </dl>
                </article>

                <img src="gif/valentine-hearts.gif"/>

            </section>
        );
    }
}

export default withTranslation()(Offer);
