
import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'

const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0,5)
  return (
    <>
   <div className="proTitle">
   <div style={{display:"flex",justifyContent:"space-between"}}> <h2>Kitchen</h2>
   <Link to='/mobiles' style={{marginTop:"25px"}} className='view'>See More</Link> </div>
      </div>
   <div className='proSection scrollcontainer'>
        {
            kitchenData.map((item)=>{
                return(
                    <div className='imgBox'>
                        <Link to='/kitchen'>
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

export default Kitchen
