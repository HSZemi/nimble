import {Component} from "react";
import React from "react";
import {Trans, WithTranslation, withTranslation} from "react-i18next";

class Footer extends Component<WithTranslation, object> {
    public render() {

        return (
            <footer><a href="https://www.cronn.de"><Trans>footer</Trans></a></footer>
        );
    }
}

export default withTranslation()(Footer);
