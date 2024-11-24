import React from "react";

import { computerData } from "../data/computers";
import { mobileData } from '../data/mobiles'
import { menData } from '../data/men'
import { watchData } from '../data/watch'
import { womanData } from "../data/woman";
import { Link } from "react-router-dom";

const Computers = () => {
  const firstFiveImages = computerData.slice(0, 5);

  return (
    <>
      <div className="proTitle">
      <div > <h2>Newly Arrived</h2>
       </div>
      </div>
      <div className="proSection scrollcontainer">
     
          <div className="imgBox" style={{display:"flex",justifyContent:"space-between"}}>
            
            <Link to='/computers'><img className="proImage" style={{marginLeft:"50px"}} src={computerData[0].image} alt="" /></Link>
           <Link to='/mobiles'> <img className="proImage"  style={{marginLeft:"50px"}} src={mobileData[1].image} alt="" /></Link>
           <Link to='/men'> <img className="proImage" style={{marginLeft:"50px"}}  src={menData[3].image} alt="" /></Link>
            
            <Link to='/woman'><img className="proImage"  style={{marginLeft:"50px"}} src={womanData[9].image} alt="" /></Link>
            <Link to='/watch'><img className="proImage" style={{marginLeft:"50px"}} src={watchData[0].image} alt="" /></Link>
           <Link to='/woman'> <img className="proImage" style={{marginLeft:"50px"}} src={womanData[5].image} alt="" /></Link>
            
          </div>
        
      <div className='view'>

       
      </div>
      </div>
    </>
  );
};

export default Computers;