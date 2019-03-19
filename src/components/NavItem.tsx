import {Component} from "react";
import React from "react";
import {ContentPage} from "../types";
import {Trans} from "react-i18next";

interface IProps {
    title: string;
    active?: boolean;
    onClickCallback: ()=>void;
}

class NavItem extends Component<IProps, object> {
    public render() {
        let className = 'nav-item';
        if (this.props.active !== undefined && this.props.active) {
            className += ' active';
        }

        return (
            <li className={className} onClick={()=>{this.props.onClickCallback()}}><Trans>navigation.{this.props.title}</Trans></li>
        );
    }
}

export default NavItem;
