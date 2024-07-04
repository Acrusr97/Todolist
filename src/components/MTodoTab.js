import React from "react"
import TableauToDo from "./TableauToDo";

 const MTodoTab = () => {

    const jours = Array.from({length:30},(_,i) => i+1);
    const mois = Array.from({length:12},(_,i) => i+1);
    const année = Array.from({length:5},(_,i) => i+1);


    return (
        
       <table striped bordered hover size="sm">
       <tr>
            <td>jours</td>
            <td>mois</td>
            <td>année</td>
        </tr>
        <tbody>
            <tr>
                <td>
                    <TableauToDo datas={jours} />
                </td>
                <td>
                <TableauToDo datas={mois} />
                </td>
                <td>
                <TableauToDo datas={année} />
                </td>
            </tr>
        </tbody>
        </table>
    )
}
export default  MTodoTab