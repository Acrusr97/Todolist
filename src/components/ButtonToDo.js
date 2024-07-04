import React from "react";
import Button from 'react-bootstrap/Button';

export default function ButtonToDo ({nameButton}){
    return (
        <Button variant="secondary">{nameButton}</Button>
    )
}