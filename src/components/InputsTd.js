import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function InputsTd (){
   
    return (
        <InputGroup className="md-col-6">
      
        <Form.Control aria-label="Titre" placeholder="Titre" />
      </InputGroup>
    )
}