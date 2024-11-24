import React from "react";
import { acData } from "../data/ac";
import { Link } from "react-router-dom";

const AC = () => {
  const firstFiveImages = acData.slice(0, 5);

  return (
    <>
      <div className="proTitle">
      <div style={{display:"flex",justifyContent:"space-between"}}> <h2>AC</h2>
   <Link to='/mobiles' style={{marginTop:"25px"}} className='view'>See More</Link> </div>
       
 </div>
      
      <div className="proSection scrollcontainer">
        {acData.map((item) => {
          return (
            <div className="imgBox">
              <Link to='/ac'>
              <img className="proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
         
      </div>
    </>
  );
};

export default AC;