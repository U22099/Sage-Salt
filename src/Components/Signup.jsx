import React from 'react'
import {FaFacebook, FaGithub} from 'react-icons/fa6'
import {FaLinkedin} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'

function Signup() {
  return (
    <form action="/" method="POST"className="bg-primary-color flex flex-col justify-center mx-auto rounded-xl p-[10px] py-[20px] md:p-[40px] w-max h-max gap-[20px]">
        <h1 className=" w-[100%] flex justify-start items-center text-[2em] text-white">Sign Up</h1>
        <input autoFocus type="text" placeholder="First Name" className=" w-[250px] md:w-[300px] focus:border-[red] focus:border-4px focus:outline-none rounded-xl p-[10px] text-[1.2em] text-black" required/>
        <input type="text" placeholder="Last Name" className=" w-[250px] md:w-[300px] focus:border-[red] focus:border-4px focus:outline-none rounded-xl p-[10px] text-[1.2em] text-black" required/>
        <input type="email" placeholder="Email" className=" w-[250px] md:w-[300px] focus:border-[red] focus:border-4px focus:outline-none rounded-xl p-[10px] text-[1.2em] text-black" required/>
        <input type="password" placeholder="Password" className=" w-[250px] md:w-[300px] focus:border-[red] focus:border-4px focus:outline-none rounded-xl p-[10px] text-[1.2em] text-black" required/>
        <input type="password" placeholder="Retype Password" className=" w-[250px] md:w-[300px] focus:border-[red] focus:border-4px focus:outline-none rounded-xl p-[10px] text-[1.2em] text-black" required/>
        <button className="mx-auto flex justify-center items-center bg-primary-color text-white rounded-md shadow-xl w-[90%] h-[40px] text-[1.2em]">Log In</button>
        <div className="flex flex-col justify-center gap-[20px]">
            <h1 className="text-white mx-auto text-[1.4em]">----- Sign Up With -----</h1>
            <div className="flex items-center mx-auto gap-[20px]">
                <a href="https://facebook.com"><FaFacebook className="text-[3em] bg-blue-600 rounded"/></a>
                <a href="https://github.com"><FaGithub className="text-[3em] bg-black rounded"/></a>
                <a href="https://linkedin.com"><FaLinkedin className="text-[3em] bg-blue-500 rounded"/></a>
                <a href="https://gmail.com"><BiLogoGmail className="text-[3em] bg-gradient-to-r from-purple-500 to-pink-500 text-black rounded"/></a>
            </div>
        </div>
    </form>
  )
}

export default Signup