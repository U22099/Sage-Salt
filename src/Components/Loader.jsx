import React from 'react'

function Loader() {
  return (
    <div id="loader" className="flex absolute z-[20] justify-center items-center w-[100vw] h-[100vh] bg-primary-color">
        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-none border-black border-[8px] border-t-[transparent] animate-spin">
            <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-none border-black border-[8px] border-t-[transparent] rotate-45 animate-spin">
            </div>
        </div>
    </div>
  )
}

export default Loader