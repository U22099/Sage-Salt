import { FaApple } from "react-icons/fa6"
import {IoLogoGooglePlaystore as Playstore} from 'react-icons/io5'
import img from '../assets/IMG_1342.PNG'

function Footer(){
    return (
        <footer id="dwnload" className="h-max md:h-[400px] w-[100%] bg-[url('../SageSalt/src/assets/IMG_1316.JPG')] bg-cover bg-no-repeat bg-center flex flex-col md:flex-row items-end">
            <div className="w-[90%] h-[500px] mx-auto">
                <img src={img} alt="" className="h-[500px]"/>
            </div>
            <div className="flex justify-center items-center w-[90vw] md:w-max">
                <div className="backdrop-blur-[20px] mx-auto mr-[40px] rounded-xl justify-start p-[10px] md:p-[30px] gap-[20px] flex flex-col w-[100%] md:mb-[30px]">
                    <h1 className="text-[2em]"> Download out app!</h1>
                    <p> Use our awesome app on IOS and Android</p>
                    <div className=" flex flex-col md:flex-row items-center gap-[20px]">
                        <div  className=" bg-black p-[10px] rounded-md w-max flex gap-[10px] justify-center">
                            <FaApple className=" text-[3em] text-white"/>
                            <div>
                                <h1>Download on the</h1>
                                <h1>App Store</h1>
                            </div>
                        </div>
                        <div  className=" bg-black p-[10px] rounded-md w-max flex gap-[10px] justify-center">
                            <Playstore className=" text-[3em] text-white"/>
                            <div>
                                <h1>Download on the</h1>
                                <h1>App Store</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer