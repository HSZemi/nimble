import {Component} from "react";
import React from "react";
import {Trans, WithTranslation, withTranslation} from "react-i18next";

interface IProps extends WithTranslation {
    visible: boolean;
}

class AboutUs extends Component<IProps, object> {
    public render() {

        const display = this.props.visible ? 'block' : 'none';

        return (
            <section id="ueberuns" style={{display: display}}>
                <h2><Trans>aboutUs.title</Trans></h2>

                <img src="gif/3-bobbing-hamsters.gif"/>

                <p>
                    <Trans>aboutUs.content</Trans>
                </p>
            </section>
        );
    }
}

export default withTranslation()(AboutUs);
