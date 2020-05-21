import React from "react";
import { axiosWithAuth } from "../utils/axioswithAuth";

class FriendAuth extends React.Component {

    constructor() {
        super()
        this.state = {
            friend: [],
        };
    }
    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log(res);
                this.setState({
                    friend: res.data.map(item => JSON.stringify(item))
                  
                })
            })
    }

    render() {
        return <div>
            {this.state.friend}
        </div>
    }
    

}

export default FriendAuth;