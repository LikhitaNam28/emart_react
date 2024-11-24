
import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'

const Furniture = () => {

    const firstFiveImages = furnitureData.slice(0,5)

  return (
    <>
   <div className="proTitle">
   <div style={{display:"flex",justifyContent:"space-between"}}> <h2>Furniture</h2>
   <Link to='/mobiles' style={{marginTop:"25px"}} className='view'>See More</Link> </div>
      </div>
   <div className='proSection scrollcontainer'>
        {
            furnitureData.map((item)=>{
                return(
                    <div className='imgBox'>
                        <Link to='/furniture'>
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

export default Furniture