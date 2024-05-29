import React from "react"
import { Link } from 'react-router-dom'

class Home extends React.Component{

    render(){
        return <div>
            <button> <Link to="/about"> about </Link></button>
            welcome home
        </div>
    }
}

export default Home