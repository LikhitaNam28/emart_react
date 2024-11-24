import React from "react";

import { computerData } from "../data/computers";
import { Link } from "react-router-dom";

const Computers = () => {
  const firstFiveImages = computerData.slice(0, 5);

  return (
    <>
      <div className="proTitle">
      <div style={{display:"flex",justifyContent:"space-between"}}> <h2>Laptops</h2>
      <Link to='/mobiles' style={{marginTop:"25px"}} className='view'>See More</Link> </div>
      </div>
      <div className="proSection scrollcontainer">
      {computerData.map((item) => {
        return (
          <div className="imgBox">
            <Link to='/computers'>
            <img className="proImage" src={item.image} alt="" />
            </Link>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Computers;