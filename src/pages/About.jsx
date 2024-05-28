import React from "react";

import User from "../components/User";

class About extends React.Component{
     
    render(){
        return <div>
            About us page
            <User name={"shubham dev"} branch={"IT"}></User>
        </div>
    }
}

export default About