
import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'

const Men = () => {

    const firstFiveImages = menData.slice(0,5)

  return (
    <>
     <div className="proTitle">
     <div style={{display:"flex",justifyContent:"space-between"}}> <h2>Men Fashion</h2>
     <Link to='/mobiles' style={{marginTop:"25px"}} className='view'>See More</Link> </div>
      </div>
    <div className='proSection scrollcontainer'>
         {
             menData.map((item)=>{
                 return(
                     <div className='imgBox'>
                      <Link to='/men'>
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

export default Men