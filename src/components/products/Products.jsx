import React, {useEffect, useState} from 'react';
export default function Products() {
const[products,setproducts]=useState([])
const getproduct=async()=>{
    let response=await fetch("https://fakestoreapi.com/products");
    let data =await response.json();
    setproducts(data);

}
useEffect(() =>{
    getproduct();
},[])

  return (
<>
<div className='row'>
    {
        products.map((ele)=>{
            return <div className='col-md-4' key={ele.id}>
                <h2>{ele.title}</h2>
                <img src={ele.image} className='w-100' />
            </div>
        })
    }
</div>
</>
    )
}