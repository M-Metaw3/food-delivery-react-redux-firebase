import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fire } from '../../firebase'

function UpdateProducts() {
    const [dat, setdat] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {

        fire.collection('/product').onSnapshot((el) => {
            setdat(el.docs.map((el) => ({ dataa: el.data(), id: el.id })))
        })
        const obj = {
            type: 'data',
            payload: dat
        }
        dispatch(obj)
    }, [setdat])

    const hadelerdelete = (el, i) => {
        fire.collection('/product').doc(i).delete()
    }
    
  return (
    <div>
    
    <div>
                <h3 style={{ textAlign: 'center', margin: '5px' }}>Your Announce <span>{dat.length}</span> </h3>
                <div className='aaa' >
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



            </div>
    </div>
  )
}

export default UpdateProducts