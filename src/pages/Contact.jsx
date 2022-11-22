import React, { useState } from 'react'
import { Col, Container, ListGroupItem, Row } from 'reactstrap'
import CommonSection from '../component/common-section/common-section'
import Helmet from '../component/Helmet'
import { fire } from '../firebase';

function Contact() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [massage,setMassage]=useState('');
    const [Category, setCategory] = useState("");

    const onSubmit=(e)=>{
            e.preventDefault();
        fire.collection('/Contact').add({
            category:Category,
            name:name,
            email:email,
            phone:phone,
            massage:massage
       })
        setName("");
        setEmail("");
        setPhone("");
        setMassage("");
        alert('your massage was sent successfully')

      }
    return (
        <Helmet title="Contact" className="overflow-hidden">
            <CommonSection />
            <Container >
            <Row className='p-4'>
                <Col lg="8">
                    <form className='form' onSubmit={onSubmit}>
                        <div className='select form_group'>
                            <label className='pb-2 '>category:</label>
                            <select className="w-100"
                             onChange={(e) => setCategory(e.target.value)}
                             required
                             >
                                <option value="Choose">Choose</option>
                                <option value="Complaint">Complaint</option>
                                <option value="descending">Social Responsibility</option>
                                <option value="Job opportunities">Job opportunities</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className=' form_group'>
                            <label className='pb-2 '>Name:</label>
                            <input
                                type={'text'}
                                placeholder='Enter your name'
                                  value={name}
                                  onChange={(e)=>setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className=' form_group'>
                            <label className='pb-2 '>Phone:</label>
                            <input
                                type={'phone'}
                                placeholder='Enter your phone number'
                                  value={phone}
                                required
                              onChange={(e)=>setPhone(e.target.value)}
                            />
                        </div>
                        <div className=' form_group'>
                            <label className='pb-2 '>Email:</label>
                            <input
                                type={'email'}
                                placeholder='Enter your email'
                                  value={email}
                                required
                              onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className='form_group'>
                            <label className='pb-2 '>Massage:</label>
                            <textarea
                                type={'text'}
                                placeholder='Write your massage'
                                rows={3}
                                  value={massage}
                                  onChange={(e)=>setMassage(e.target.value)}
                                required
                            />
                        </div>
                        <button type='submit' className='add_btn'>
                            Submit
                        </button>
                    </form>
                </Col>
                <Col lg="4"  className=' text-center m-auto'>
                    <Row > 
                    <Col lg="12" md="6">
                        <div style={{ backgroundColor: '#f8f5f4',height:"200px" }} className="m-3">
                            <h2 className='p-2'>working hours</h2>
                            <ListGroupItem className="border-0 ps-0">
                                <span>Sunday - Thursday</span>
                                <p>10:00am - 11:00pm</p>
                            </ListGroupItem>

                            <ListGroupItem className=" border-0 ps-0">
                                <span>Friday - Saturday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </div>
                    </Col>
                    <Col lg="12" md="6">
                        <div style={{ backgroundColor: '#f8f5f4',height:"200px" }} className="m-3">
                            <h2 className='p-2'>we are here</h2>
                            <ListGroupItem className="  border-0 ps-0">
                                <p>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
                            </ListGroupItem>
                            <ListGroupItem className=" border-0 ps-0">
                                <span>Phone: 01712345678</span>
                            </ListGroupItem>

                            <ListGroupItem className=" border-0 ps-0">
                                <span>Email: example@gmail.com</span>
                            </ListGroupItem>
                        </div>
                    </Col>

                    </Row>
                </Col>
            </Row>
            </Container>
            
        </Helmet>
    )
}

export default Contact