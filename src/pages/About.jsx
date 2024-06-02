import React from "react";

import User from "../components/User";

import { UserContext } from "../utils/userContext";

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

            <div>
                <input type="text" placeholder="change user" />
            </div>

            <div>
                using context 
                <UserContext.Consumer>
                    {(data) => <div>{data.userLogin}</div>}
                </UserContext.Consumer>
            </div>
        </div>
    }
}

export default About