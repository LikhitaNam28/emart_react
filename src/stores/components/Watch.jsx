import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'

const Watch = () => {

    const firstFiveImages = watchData.slice(0,5)

  return (
    <>
     <div style={{display:"flex",justifyContent:"space-between"}}> <h2>Watches</h2>
     <Link to='/mobiles' style={{marginTop:"25px"}} className='view'>See More</Link> </div>
    <div className='proSection scrollcontainer'>
         {
             watchData.map((item)=>{
                 return(
                     <div className='imgBox'>
                        <Link to='/watch'>
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

export default Watch