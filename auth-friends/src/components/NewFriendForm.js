import React, { useState } from 'react';

import { addFriend } from "../actions/index";
import { useDispatch } from 'react-redux'

const NewFriendForm = props => {

    const dispatch = useDispatch()

    console.log(addFriend);

    const [newElement, setNewElement] = useState("");

    const handleChanges = e => {
        setNewElement(e.target.value);
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(addFriend(newElement, 1));
            }}>
                <input
                    type="text"
                    name="name"
                    onChange={handleChanges}
                />
                <button type="submit">Submit</button>
            </form>
            <button onClick={props.addClear}>Clear</button>
        </div>
    )
}

export default NewFriendForm;