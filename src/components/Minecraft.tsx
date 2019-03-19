import {Component} from "react";
import React from "react";
import {Trans, WithTranslation, withTranslation} from "react-i18next";

interface IProps extends WithTranslation {
    visible: boolean;
}

class Minecraft extends Component<IProps, object> {
    public render() {

        const display = this.props.visible ? 'block' : 'none';

        return (
            <section id="minecraft" style={{display: display}}>
                <h2><Trans>minecraft.title</Trans></h2>

                <img src="gif/spinning-dice.gif"/>
                <img src="gif/spinning-dice.gif"/>
                <img src="gif/spinning-dice.gif"/>
                <img src="gif/spinning-dice.gif"/>
                <img src="gif/spinning-dice.gif"/>
                <img src="gif/spinning-dice.gif"/>

                <p><Trans>minecraft.content1</Trans></p>

                <p><Trans>minecraft.content2</Trans>
                    <img src="aksdlfjksldf.png"/> <Trans>minecraft.content3</Trans></p>
            </section>
        );
    }
}

export default withTranslation()(Minecraft);
