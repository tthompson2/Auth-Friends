import React from "react";
import { axiosWithAuth } from "../utils/axioswithAuth";

class FriendAuth extends React.Component {

    state = {
        friend : []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            console.log(res);
            this.setState({
                friend : 'test',// put data value from response here

            })
        })
    }
    
}

export default FriendAuth;