import React from "react";
import { womanData } from "../data/woman";
import { Link } from "react-router-dom";

const Woman = () => {
  const firstFiveImages = womanData.slice(0, 5);

  return (
    <>
      <div className="proTitle">
      <div style={{display:"flex",justifyContent:"space-between"}}> <h2>Women Dressing</h2>
      <Link to='/mobiles' style={{marginTop:"25px"}} className='view'>See More</Link> </div>
      </div>
      <div className="proSection scrollcontainer">
        {womanData.map((item) => {
          return (
            <div className="imgBox">
              <Link to='/woman'>
              <img className="proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
         
      </div>
    </>
  );
};

export default Woman;