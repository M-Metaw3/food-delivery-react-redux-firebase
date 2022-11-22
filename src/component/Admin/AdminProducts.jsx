import React from 'react'
import { useDispatch, useSelector,  } from 'react-redux'
import { useState } from 'react'
import '../../App.css'
import { fire, store } from '../../firebase';
import { Col, Row } from 'reactstrap';
import { useEffect } from 'react';
function AdminProducts() {
    const product = useSelector((state) => state.product)
    const admin = useSelector((state) => state.admaincart)
    const [show, setshow] = useState(true)
    const [titl, settitle] = useState("")
    const [iddd, setiid] = useState(String(product.length + 1))
    const [pric, setprice] = useState(0)
    const [image1, setimage1] = useState(null)
    const [image2, setimage2] = useState(null)
    const [image3, setimage3] = useState(null)
    const [category, setcategory] = useState("")
    const [dsc, setdsc] = useState("")
    const [download1, setdownload1] = useState("")
    const [download2, setdownload2] = useState("")
    const [download3, setdownload3] = useState("")
    const [lodding, setLodding] = useState("")
    const handelerimagereq = (e) => {
        setimage1(URL.createObjectURL(e.target.files[0]))
        setimage2(URL.createObjectURL(e.target.files[1]))
        setimage3(URL.createObjectURL(e.target.files[2]))
        const file1 = e.target.files[0]
        const file2 = e.target.files[1]
        const file3= e.target.files[2]

        const storage = store.ref('/image' + file1.name)
            storage.put(file1).then(() => {
                setLodding("image 1 looded")
                storage.getDownloadURL().then((el) => setdownload1(el))
            })
            storage.put(file2).then(() => {
                setLodding("image 2 looded")
                storage.getDownloadURL().then((el) => setdownload2(el))
            })
            storage.put(file3).then(() => {
                // alert('image loaded')
                setLodding("image 3 looded")
                storage.getDownloadURL().then((el) => setdownload3(el))
            })

     
    }

    const dispatch = useDispatch()

    useEffect(()=>{

        fire.collection('/product').onSnapshot((el)=>{
          el.docs.map((el)=> {
            const adminpro={
            type:'addpro',
        
            payload:el.data()
          }
          dispatch(adminpro)
        }
          )
        } )
        },[]) 

    const additem = () => {
setLodding("...lodding")
        if ((titl.length != 0 && category.length !=0) && ((pric != 0) )) {
            setshow(false)
            setTimeout(() => {
                setshow(true)
                setimage1(null)
                setimage2(null)
                setimage3(null)

            }, 3000)
            fire.collection('/product').add({
                id: iddd,
                title: String(titl),
                price: String(pric),
                image01: download1,
                image02: download2,
                image03: download3,
                category: String(category),
                desc: String(dsc)
            })
        }
        else {
            // alert("complete field")
            setLodding("complete field")
        }
    }
    
    return (
        <>
            <div className='cont'>
                {!show ? <h1 className='succefull' ><span>sucessful</span>  adding

                    <h4>check your home</h4>
                </h1> : (
                    <>
                        <h3 className="add_item">Add New Items</h3>
                        
                        <input required id='tit' type="text" placeholder='title' onChange={(event) => settitle(event.target.value)} />
                        <input id='tit' type="text" placeholder='discription' onChange={(event) => setdsc(event.target.value)} />
                        <input required id='tit' type="number" placeholder='price' onChange={(event) => setprice(event.target.value)} />
                        <label htmlFor="mm">  
                            Select Image       
                        <i className="m-2 ri-camera-fill"></i>
                        <input required id='mm' className='d-none' multiple type="file" onChange={handelerimagereq} />
                        </label>
                       <Row>
                       <Col>
                       <img src={image1} width='100px' alt="" />
                       </Col>
                       <Col>
                        <img src={image2} width='100px' alt="" />
                        </Col>
                        <Col>
                        <img src={image3} width='100px' alt="" />
                        </Col>

                       </Row>
                        <div className="select_cat">
                            <label htmlFor="cars"> category:</label>
                            <select required onChange={(event) => setcategory(event.target.value)} name="Category" id="cars">
                            <option >Select Category</option>
                                <option value="Beef">Beef</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Chicken">Chicken</option>

                            </select>
                        </div>
                        <div>
                            <p>{lodding}</p>
                        </div>
                        <button onClick={additem} className='add_btn bt'>Add new item</button>
                    </>)}


            </div>
            {/* <div>
                <h3 style={{ textAlign: 'center', margin: '5px' }}>Your Announce <span>{dat.length}</span> </h3>
                <div className='aaa' style={{ overflow: "scroll", height: '250px' }}>
                    <div>
                        {dat.map((el, i) => (
                            <div className='mmm' key={i}>

                                <h4>{el.dataa.title}</h4>
                                <h6>{el.dataa.price}</h6>
                                <img width={'70px'} src={el.dataa.image01} alt="" />
                                <button onClick={() => hadelerdelete(el, el.id)} >delet</button>
                            </div>
                        ))}
                    </div>
                </div>



            </div> */}
        </>

    )
}

export default AdminProducts
