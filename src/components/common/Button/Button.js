import React, { Component } from "react";

export default class ButtonCustom extends Component{

    render(){
        const { children } = this.props;
        const styles = require("./Button.css");

        return(
            <button className={styles.root}>
                {children}
            </button>
        );
    }
}