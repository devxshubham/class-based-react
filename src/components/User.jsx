import React from "react"

class User extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count1 : 0,
            count2 : 100

        }
    }
    
    render(){
        const {name, branch} = this.props
        

        return <div>
            <h1>{this.state.count1}</h1>
            <button onClick={()=>{
                this.setState({
                    count1 : ++this.state.count1,
                    count2 : --this.state.count2,
                })

            }}>inc</button>
            <h1>{this.state.count2}</h1>
            <button onClick={()=>{
                this.setState({
                    count2 : --this.state.count2,
                })
            }}>dec</button>
            <h3>name : {name}</h3>
            <h4>branch : {branch}</h4>
        </div>
    }
}

export default User