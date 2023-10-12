import React from "react";

export default class Student extends React.Component {

    render() {
        console.log(this.props.name);
        return (
            <div>Student {this.props.name} </div>
        )
    }
}