import axios from "axios";
import React, { useState, useEffect } from "react";
import { axiosWithAuth }from "../utils/axioswithAuth";

export const addFriend = (feature1, feature2) => dispatch => {

    let newFriends = {
        name: feature1,
        age: feature2 + 18,
        email: feature1+"@friends.com"
    }

    console.log(newFriends);

    dispatch({ type: "ADD_FRIEND" });
    
    axiosWithAuth()
        .post('/friends', newFriends)
        .then(response => {
            console.log("response.data", response.data);

        })
        .catch(error => {
            console.log(error);
        })

}