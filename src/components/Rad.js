import React from "react";
import Form from 'react-bootstrap/Form';
export default function Rad() {
  const datas = [
    {
      label : "base"
    },
    {
      label : "Normal"
    },
    {
      label : "haute"
    }
  ]
   /* checkbox nameCheck ,type,idCheck ,labelCheck
   valeur attendu*/
    return (
      <Form key='inline'>
        Priorité 
        {datas.map((data, index) => (
          <div key={index} className="radio">
            <Form.Check 
            inline
            type="radio"
             id={`default-${index}`}
              placeholder={data.label}
              label={data.label}
            />
        </div>
       
      ))}
      
    </Form>
  );
}
