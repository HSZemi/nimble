import {Component} from "react";
import React from "react";
import NavItem from "./NavItem";
import {ABOUT_US, ContentPage, LOCATIONS, MINECRAFT, OFFER, TEAM} from "../types";
import i18next from "i18next";

interface IProps {
    onClickCallback: (page: ContentPage) => void;
    visiblePage: ContentPage;
}

interface IState {
    language: string;
}

class Navigation extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {language: i18next.language};
    }

    public render() {
        const aboutUsVisible = this.props.visiblePage == ABOUT_US;
        const offerVisible = this.props.visiblePage == OFFER;
        const locationsVisible = this.props.visiblePage == LOCATIONS;
        const teamVisible = this.props.visiblePage == TEAM;
        const minecraftVisible = this.props.visiblePage == MINECRAFT;

        let languageToChangeTo: string = this.getLanguageToSwitchTo();
        let languageSwitcherLabel: string = 'Deutsche Version';
        if (languageToChangeTo === 'en-GB') {
            languageSwitcherLabel = 'English Version';
        }

        return (
            <nav id="navigation">
                <h3>Nimblecraft</h3>
                <ul>
                    <NavItem title='aboutUs' active={aboutUsVisible} onClickCallback={() => {
                        this.props.onClickCallback(ABOUT_US)
                    }}/>
                    <NavItem title='offer' active={offerVisible} onClickCallback={() => {
                        this.props.onClickCallback(OFFER)
                    }}/>
                    <NavItem title='locations' active={locationsVisible} onClickCallback={() => {
                        this.props.onClickCallback(LOCATIONS)
                    }}/>
                    <NavItem title='team' active={teamVisible} onClickCallback={() => {
                        this.props.onClickCallback(TEAM)
                    }}/>
                    <NavItem title='minecraft' active={minecraftVisible} onClickCallback={() => {
                        this.props.onClickCallback(MINECRAFT)
                    }}/>
                    <li className="nav-item" onClick={() => {
                        const languageToSwitchTo = this.getLanguageToSwitchTo();
                        i18next.changeLanguage(languageToSwitchTo);
                        document.title = i18next.t('pagetitle');
                        this.setState({...this.state, language: languageToSwitchTo})
                    }}>{languageSwitcherLabel}</li>
                </ul>
            </nav>
        );
    }

    private getLanguageToSwitchTo: () => string = () => {
        if (this.state.language === 'de-DE') {
            return 'en-GB';
        }
        return 'de-DE';
    };
}

export default Navigation;
