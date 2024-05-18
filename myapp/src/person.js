import React, { Component } from "react";

class Person extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return (
            <div>
                <h3>Hey {this.props.name}, This is class based Component</h3>
            </div>
        );
    }
}

export default Person;