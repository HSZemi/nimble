import {Component} from "react";
import React from "react";
import NavItem from "./NavItem";
import {ABOUT_US, ContentPage, LOCATIONS, MINECRAFT, OFFER, TEAM} from "../types";

interface IProps {
    onClickCallback: (page: ContentPage) => void;
    visiblePage: ContentPage;
}

class Navigation extends Component<IProps, object> {
    public render() {
        const aboutUsVisible = this.props.visiblePage == ABOUT_US;
        const offerVisible = this.props.visiblePage == OFFER;
        const locationsVisible = this.props.visiblePage == LOCATIONS;
        const teamVisible = this.props.visiblePage == TEAM;
        const minecraftVisible = this.props.visiblePage == MINECRAFT;

        return (
            <nav id="navigation">
                <h3>Nimblecraft</h3>
                <ul>
                    <NavItem title='Über Uns' active={aboutUsVisible} onClickCallback={() => {
                        this.props.onClickCallback(ABOUT_US)
                    }}/>
                    <NavItem title='Angebot' active={offerVisible} onClickCallback={() => {
                        this.props.onClickCallback(OFFER)
                    }}/>
                    <NavItem title='Standorte' active={locationsVisible} onClickCallback={() => {
                        this.props.onClickCallback(LOCATIONS)
                    }}/>
                    <NavItem title='Team' active={teamVisible} onClickCallback={() => {
                        this.props.onClickCallback(TEAM)
                    }}/>
                    <NavItem title='Minecraft' active={minecraftVisible} onClickCallback={() => {
                        this.props.onClickCallback(MINECRAFT)
                    }}/>
                    <li className="nav-item">English Version</li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
