
import React from 'react'

import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'


const Fridge = () => {

    const firstFiveImages = fridgeData.slice(0,5)

  return (
   <>
    <div className="proTitle">
    <div style={{display:"flex",justifyContent:"space-between"}}> <h2>Fridges</h2>
    <Link to='/mobiles' style={{marginTop:"25px"}} className='view'>See More</Link> </div>
      </div>
   <div className='proSection scrollcontainer'>
        {
            fridgeData.map((item)=>{
                return(
                    <div className='imgBox'>
                        <Link to='/fridge'>
                        <img className='proImage' src={item.image} alt="" />
                        </Link>
                    </div>
                )
            })
        }
         
    </div>
   
   </>
  )
}

export default Fridge