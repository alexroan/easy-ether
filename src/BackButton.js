import React from 'react';
import { selectPage } from "./redux/actions/display"
import { Button } from 'react-bootstrap';

export function BackButton(props) {

    const {dispatch, pageName} = props;

    const back = () => {
        dispatch(selectPage(pageName));
    }

    return (
        <p><Button onClick={back} size="sm">Back</Button></p>
    )
}