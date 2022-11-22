import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap';
import { fire } from '../../firebase';

function AdminContacts() {
  const [contacts,setContacts]=useState([]);
  const [selectedValue,setselectedValue]=useState("");
  const save=(id)=>{

    console.log(selectedValue)
    if(selectedValue==="Done")
    {
        fire.collection('/Contact').doc(id).delete();
    }
    if(selectedValue==="Cancle")
    {
        console.log(selectedValue);
        fire.collection('/Contact').doc(id).delete();
    }
  }
  useEffect(()=>{
    fire.collection('/Contact').onSnapshot((el)=>{
         setContacts(el.docs.map((el)=>({dataa: el.data(),id:el.id})))           

        // el.docs.map((el)=>  fire.collection('/orders').doc(el.id).delete())
    })
    },[]);
    console.log("contacts",contacts);
    

  return (
    <div className='cont'>AdminContacts
   {
      contacts.map((item,idx)=>(
                  <div className='mb-3' key={idx}>
                  <Row className="justify-content-center m-4 user-data">
                    <Col lg="12" className=" d-flex text-center">
                    name: {item.dataa.name}
                    </Col>
                    <Col lg="12" className=" d-flex text-center">
                    phone: {item.dataa.phone}
                    </Col>
                    <Col lg="12" className=" d-flex text-center">
                    email: {item.dataa.email}
                    </Col>
                    <Col lg="12" className=" d-flex text-center">
                    category: {item.dataa.category}
                    </Col>
                    <Col lg="12" className=" d-flex text-center">
                      massage: {item.dataa.massage}
                    </Col>
                    <div className="d-flex m-2 justify-content-center">
                    <select
                        className="select input-form-area text-center px-2 w-50"
                        onChange={(e)=>setselectedValue(e.target.value)} >
                        <option value="Waiting">Waiting</option>
                        <option value="Done">Done</option>
                        <option value="Cancle">Cancle</option>
                    </select>
                    <button className="btn-a px-3 d-inline mx-2"
                     onClick={()=>save(item.id)}>save</button>
                    </div>
                  </Row>
                  </div>
      ))}

    </div>
  )
}

export default AdminContacts