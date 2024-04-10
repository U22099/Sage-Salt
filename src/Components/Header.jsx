import {FaCartShopping} from 'react-icons/fa6'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {useState} from 'react'
import { MdDarkMode} from 'react-icons/md'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

function Header(props) {

  const [nav, setNav] = useState(false);
  const [dark, setDark] = useState(false);
  function revertNav(){
    setNav(!nav);
  }
  function changeMode(){
    if(!dark){
      document.querySelector("#root").style.backgroundColor = "black";
      document.querySelector("#inputcard").style.backgroundColor = "black";
      document.querySelector("#navbar").style.backgroundColor = "black";
      document.querySelector("#tag").style.backgroundColor = "white";
      document.querySelector("#tag").style.color = "black";
      document.querySelector("#ul").style.color = "white";
    }else{
      document.querySelector("#root").style.backgroundColor = "white";
      document.querySelector("#inputcard").style.backgroundColor = "white";
      document.querySelector("#navbar").style.backgroundColor = "white";
      document.querySelector("#tag").style.backgroundColor = "black";
      document.querySelector("#tag").style.color = "white";
      document.querySelector("#ul").style.color = "gray";
    }
    setDark(!dark);
  }
  return (
    <div>
        <div id="navbar" className="z-8 h-[60px] w-[100%] bg-white fixed mb-[40px] flex justify-between">
            <Link to="/SageSalt/">
              <h1 className="flex w-[257px] justify-start items-center px-[20px] text-bold  primary-color text-[2em]">Sage 'n' Salt</h1>
            </Link>
            <div className="hidden w-[100%] md:flex justify-end items-center gap-[20px] pr-[20px]">
                <ul id="ul" className="text-gray-700 flex gap-[10px]">
                    <li><Link to="/SageSalt/">Home</Link></li>
                    <li><a href="#food">Food</a></li>
                    <li><a href="#dwnload">Download</a></li>
                </ul>
                <Link className="w-[100px] h-[30px] text-[1.2em] flex justify-center items-center bg-primary-color text-white rounded-lg" to="/SageSalt/login">Log In</Link>
                <Link className="w-[100px] h-[30px] text-[1.2em] flex justify-center items-center bg-primary-color text-white rounded-lg"  to="/SageSalt/signup">Sign Up</Link>
                <Link to="/SageSalt/cart">
                  <FaCartShopping className="bg-primary-color rounded-md text-white text-[2.5em] p-[7px]"/>
                  <p id="tag" className={(props.count.length!==0) ? "text-[0.8em] w-[20px] h-[20px] flex justify-center items-center bg-black text-white rounded-[50%] p-[5px] absolute top-[0px]": "hidden"}>{props.count.length}</p>
                </Link>
                <MdDarkMode onClick={changeMode} className={dark ? "rounded-md text-black text-[2.5em] p-[7px] bg-white cursor-pointer":"rounded-md text-white text-[2.5em] p-[7px] bg-black cursor-pointer"} />
            </div>
            <div className="flex text-[orangered] justify-center items-center mr-[20px] text-[2em] md:hidden cursor-pointer" onClick={revertNav}>
              {nav ? <AiOutlineClose/> : <AiOutlineMenu/>}
              <p id="tag" className={(props.count.length!==0) ? "text-[0.4em] w-[20px] h-[20px] flex justify-center items-center bg-black text-white rounded-[50%] p-[5px] absolute top-[10%] left-[88%]": "hidden"}>{props.count.length}</p>
            </div>
        </div>
        <motion.div
        initial={{
          x: "-100%"
         }}
        whileInView={{
          x: "0%"
        }}
        className={nav ? "flex flex-col fixed backdrop-blur-[10px] border-[orangered] border-[2px] rounded-[20px] w-[60vw] gap-[20px] p-[20px] h-max z-[1] md:hidden" : "hidden"}>
            <ul className="text-[orangered] text-[1.5em] text-bold flex flex-col gap-[10px]">
                <li><Link to="/SageSalt/" onClick={revertNav}>Home</Link></li>
                <li><a href="#food" onClick={revertNav}>Food</a></li>
                <li><a href="#dwnload" onClick={revertNav}>Download</a></li>
            </ul>
            <Link className="w-[100px] h-[30px] text-[1.2em] flex justify-center bg-primary-color text-white rounded-lg" to="/SageSalt/login" onClick={revertNav}>Log In</Link>
            <Link className="w-[100px] h-[30px] text-[1.2em] flex justify-center items-center bg-primary-color text-white rounded-lg"  to="/SageSalt/signup" onClick={revertNav}>Sign Up</Link>
            <Link to="/SageSalt/cart">
              <h1 className="text-[1.5em] primary-color ml-[10px]" onClick={revertNav}><FaCartShopping className="bg-primary-color rounded-md text-white text-[2.5em] p-[7px]"/>Shopping Cart</h1>
              <p id="tag" className={(props.count.length!==0) ? "text-[0.8em] w-[20px] h-[20px] flex justify-center items-center bg-black text-white rounded-[50%] p-[5px] absolute top-[54%]": "hidden"}>{props.count.length}</p>
            </Link>
            <MdDarkMode onClick={()=>{changeMode(); revertNav();}} className={dark ? "rounded-md text-black text-[2.5em] p-[7px] bg-white cursor-pointer":"rounded-md text-white text-[2.5em] p-[7px] bg-black cursor-pointer"}/>
        </motion.div>
    </div>
  )
}

export default Header
