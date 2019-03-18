import React, {Component} from "react";
import Offer from "./Offer";
import Team from "./Team";
import Minecraft from "./Minecraft";
import Locations from "./Locations";
import {ABOUT_US, ContentPage, LOCATIONS, MINECRAFT, OFFER, TEAM} from "../types";
import AboutUs from "./AboutUs";

interface IProps {
    visible: ContentPage
}

class Content extends Component<IProps, object> {
    public render() {

        const aboutUsVisible = this.props.visible == ABOUT_US;
        const offerVisible = this.props.visible == OFFER;
        const locationsVisible = this.props.visible == LOCATIONS;
        const teamVisible = this.props.visible == TEAM;
        const minecraftVisible = this.props.visible == MINECRAFT;

        return (
            <div id="content">
                <AboutUs visible={aboutUsVisible}/>
                <Offer visible={offerVisible}/>
                <Locations visible={locationsVisible}/>
                <Team visible={teamVisible}/>
                <Minecraft visible={minecraftVisible}/>
            </div>
        );
    }
}

export default Content;
