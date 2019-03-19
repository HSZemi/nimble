import React, {Component} from "react";
import {Trans, WithTranslation, withTranslation} from "react-i18next";

interface IProps extends WithTranslation{
    visible: boolean;
}

class Locations extends Component<IProps, object> {
    public render() {

        const display = this.props.visible ? 'block' : 'none';

        return (
            <section id="standorte" style={{display: display}}>
                <h2><Trans>locations</Trans></h2>

                <img src="map.png" style={{maxWidth: '100%'}}/>
            </section>
        );
    }
}

export default withTranslation()(Locations);
