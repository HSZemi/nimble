import {Component} from "react";
import React from "react";
import {Trans, WithTranslation, withTranslation} from "react-i18next";

class Header extends Component<WithTranslation, object> {
    public render() {

        return (
            <header>
                <a href="./"><h1>Nimblecraft – <Trans i18nKey="tagline">wir entwickeln software...</Trans></h1></a>
                <hr/>
            </header>
        );
    }
}

export default withTranslation()(Header);
