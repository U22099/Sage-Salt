import React from 'react'
import Cart from './Body-Components/Cart'
function Carts(props) {
    let price = 0;
    props.count.map((x,i)=>price+=x.price);
  return (
    <div className="bg-primary-color mx-auto h-max w-[90vw] md:w-[40vw] flex flex-col gap-[30px] justify-start p-[20px] my-[40px] rounded-lg">
        <h1 className="w-[100%] flex justify-start text-[2.5em]">{`Your Order: $${Math.round(price)}`}</h1>
        {props.count.map((x,i)=> 
        {
            if(typeof x.foodName !== "undefined"){
                return <Cart key={i} img= {x.img} foodName= {x.foodName} no= {x.no} price={x.price} callBackRemove={props.callBackRemove} index={i}/>
            }
        })}
        <button className="w-[90%] mx-auto h-[40px] text-[1.5em] rounded-lg shadow-[5px_5px_5px_3px_rgba(0,0,0,0.8)] active:shadow-none bg-primary-color">Check Out</button>
    </div>
  )
}

export default Carts