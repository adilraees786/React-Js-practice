import React from 'react'
import Header from '../ReusableComponents/Header'
import Mainscreen from './Mainscreen';
import ProductApi from '../Components/ProductApi';




const Store = () => {
  return (
    <div>
        <Header/>
       <Mainscreen/>
     {/* <ProductApi/> */}
    </div>
  )
}

export default Store