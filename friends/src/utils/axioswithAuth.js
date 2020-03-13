import axios from "axios";

export const axiosWithAuth = () => {

    const token = localStorage.getItem("token");

    return axios.create ({
        baseURL: "http://localhost:5000",
        headers : {
            Authorization: token
        }
    });

};

// this code is used to create a boiler plate axios replacement function designed to work in tandem with the server
// that we will be posting to or getting from