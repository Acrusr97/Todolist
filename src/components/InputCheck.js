import React from "react";

export default function InputCheck (nameLabI,idInpChe,txtinp){
    return (
        <div>
        <input type= "checkbox" id={idInpChe} ></input> 
        <label for ={nameLabI}>{txtinp} </label>
        </div>
    )
}