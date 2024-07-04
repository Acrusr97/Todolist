import React from "react";

export default function TableauToDo ({datas}){
    
    return (
        <select>
            <option>
               {datas.map((data,index)=> <TableauToDo key={index} datas={datas.jours}/>)}
               </option>
               <option>
               {datas.map((data,index)=> <TableauToDo key={index} datas={datas.mois}/>)}
               </option>
               <option>
               {datas.map((data,index)=> <TableauToDo key={index} datas={datas.année}/>)}
               </option>
               </select>
         
            
        
    
)
}