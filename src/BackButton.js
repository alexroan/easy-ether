import React from 'react';
import { selectPage } from "./redux/actions"

export function BackButton(props) {

    const {dispatch, pageName} = props;

    const back = (e) => {
        e.preventDefault();
        dispatch(selectPage(pageName));
    }

    return (
        <a href="/" onClick={back}>Back</a>
    )
}