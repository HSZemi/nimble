import React, {Component} from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import {ABOUT_US, ContentPage} from "./types";

interface IState {
    visiblePage: ContentPage;
}

class App extends Component<object, IState> {

    constructor(props: any) {
        super(props);
        this.state = {visiblePage: ABOUT_US};
    }

    public render() {
        return (
            <div id="wrapper">
                <Header/>

                <Navigation onClickCallback={this.setVisiblePage} visiblePage={this.state.visiblePage}/>

                <Content visible={this.state.visiblePage}/>

                <Footer/>
            </div>
        );
    }

    public setVisiblePage = (page: ContentPage) => {
        this.setState({...this.state, visiblePage: page});
    }
}

export default App;
