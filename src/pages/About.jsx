import React from "react";

import User from "../components/User";

class About extends React.Component{
    constructor(props){
    super(props);
    // console.log("parent constructor");
    }

    componentDidMount(){
        // console.log("parent component did mount")
    }
    render(){
        // console.log("parent component");
        return <div>
            About us page
            <User userId={"devxshubham"}></User>
        </div>
    }
}

export default About