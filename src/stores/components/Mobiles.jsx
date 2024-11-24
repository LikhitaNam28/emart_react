
import React from 'react'


import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'



const Mobiles = () => {

    const firstFiveImages = mobileData.slice(0,5)
    
 return (
   <div className='mar'><div className="proTitle">
  <div style={{display:"flex",justifyContent:"space-between"}}> <h2>Mobiles</h2>
   <Link to='/mobiles' style={{marginTop:"25px"}} className='view'>See More</Link> </div>
       
 </div>
   
   <div className='proSection scrollcontainer'>
        {
            mobileData.map((item)=>{
                return(
                  
                    <div className='imgBox'>
                        <Link to='/mobiles'>
                        <img className='proImage' src={item.image} alt="" />
                        </Link>
                    </div>
                    
                 
                    
                )
            })
              
            
        }

    </div>
    
   
   </div>
  )
}

export default Mobiles