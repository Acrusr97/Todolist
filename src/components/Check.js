import React from "react";
import Form from 'react-bootstrap/Form';
export default function Check() {
  const datas = [
    {
      label : "Faire la liste de course"
    },
    {
      label : "Partir chez le medecin"
    }
  ]
   /* checkbox nameCheck ,type,idCheck ,labelCheck
   valeur attendu*/
    return (
      <Form>
        
        {datas.map((data, index) => (
          <div key={index} className="mb-3">
            <Form.Check 
            type="checkbox"
             id={`default-${index}`}
              placeholder={data.label}
              label={data.label}
            />
   
        </div>
      ))}
    </Form>
  );
}
