import React from 'react'
import { useSelector ,useDispatch  } from 'react-redux'
import { useEffect, useState } from 'react'
import '../App.css'
import {store,fire, auth} from '../firebase'



const 
Updadeting = () => {
  const uid = useSelector((state) => state.uid);
  const userdata =useSelector((state)=>state.userdata);
    const [name,setName]=useState(userdata.name);
    const [adress,setadress]=useState('');
    const [upimage,setupimage]=useState('');
    const [loading,setloadind]=useState('');
    const [download,setdownload]=useState(userdata.imagee);
    const [image,setimage]=useState(userdata.imagee);
const hadeleeimg=(e)=>{
    setimage(URL.createObjectURL(e.target.files[0]))
    setupimage(e.target.files[0])
}

const confirmupdate =()=>{
setloadind('...loading')
store.ref('/image').put(upimage).then((res)=>{
    
    if(res._delegate.state==='success'){
        store.ref('/image').getDownloadURL().then((res)=>{setdownload(res)})
        fire.doc('/users/'+uid).update({
            adresss:adress,
            imagee:download,
            name:name
        })

   
        console.log('res._delegate.state')
        setloadind('profile updating')
        setTimeout(() => {
        setloadind('')
            
        }, 2000);

    }
})
}

useEffect(()=>{
    setName(userdata.name)
    setadress(userdata.adresss)
    setimage(userdata.imagee)
},[uid])
  return (
    <div className='contupdating'>
          <div className="form__group">
              <input
                type="email"
                placeholder="name"
                required
            //   onChange={hadelerlogin}
            value={name}
              name="text"
              onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="form__group">
      
              <input
                type="text"
                placeholder="adress"
                required
            value={adress}

              onChange={(e)=>setadress(e.target.value)}
              name="password"
               
              />
            </div>
            <div>
                <img src={image} width='150px'  alt="" srcSet="" />
                </div>
            <div className="form__group">
            <label htmlFor="mm">  
                Select Image  
                <i className="m-2 ri-camera-fill"></i>
                <input
                id="mm"
                className='d-none'
                  type="file"
                  placeholder=" chose photo"
                  required
              onChange={hadeleeimg}
               name="repassword"
                />
              </label>
              
              </div>
              <p>{loading}</p>
            <button type="submit" style={{width:'20%' ,margin:'auto'}} onClick={confirmupdate} className="all__btn"> updating</button>
    </div>
  )
}

export default Updadeting
