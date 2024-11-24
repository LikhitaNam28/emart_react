import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import AC from './AC'
import Fridge from './Fridge'
import Furniture from './Furniture'
import Kitchen from './Kitchen'
import Woman from './Woman'
import Watch from './Watch'
import New from './New'

function Products() {
  
  return (
    <div style={{display:"flex"}}>
    <div> <img src="https://img.freepik.com/premium-vector/vertical-sale-banner-shopping-poster-luxury-template-with-frame-web-social-media_450469-1638.jpg?w=360" style={{width:"280px",height:"650px",marginTop:'100px',position:'fixed'}} ></img></div> 
    <div className='main-content' style={{width:'100%',marginTop:"60px",marginLeft:'300px'}}>  
    
    
    <Mobiles/>
    <Computers/>
    <Fridge/>
    <AC/>
    <Furniture/>
    <Kitchen/>
    <Watch/>
    <Woman/>
    <New/>
    </div>
    </div>
  )
}

export default Products
