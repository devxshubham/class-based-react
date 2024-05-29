import React from "react"

class User extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                login : "dummy",
                avatar_url : "dummy.png"
            }
        }
        // console.log(this.props.name+"child constructor");
    }
    
    async componentDidMount(){
        // console.log(this.props.name+"child component did mount ");
        const response = await fetch("https://api.github.com/users/"+this.props.userId)
        const data = await response.json()
        console.log(data);
        this.setState({
            userInfo : data
        })
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("component will unmount");
    }
    render(){
        const {login, avatar_url} = this.state.userInfo
        // console.log(this.props.name +"child component");

        return <div>
            <img src={avatar_url} alt="" style={{
                content : "contain",
                width : "150px"
            }} />
            <h3>User Name : {login}</h3>
        </div>
    }
}

export default User