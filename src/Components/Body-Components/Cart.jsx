import React from 'react'
import {IoMdClose} from 'react-icons/io'
function Cart(props) {
  function remove(){
    props.callBackRemove(props.index);
  }
  return (
      <div className="bg-primary-color h-[100px] shadow-2xl flex rounded-xl items-center justify-between">
        <img src={props.img} className="rounded-xl w-[100px] md:w-[200px] h-[100%]"/>
        <div className="mx-[10px] md:mx-[30px] flex flex-col justify-start w-[100%] text-[1.2em] md:text-[1.5em]">
          <h1> {`${props.no} x`}</h1>
          <h1>{props.foodName}</h1>
          <h1>{`$${props.price}`}</h1>
        </div>
        <div className="flex h-[100%] flex-col items-end">
          <IoMdClose className="bg-[#f06c88] p-[10px] text-[black] rounded-md rounded-tr-xl cursor-pointer text-[3em] md:text-[4em]" onClick={remove}/>
        </div>
      </div>
  )
}

export default Cart