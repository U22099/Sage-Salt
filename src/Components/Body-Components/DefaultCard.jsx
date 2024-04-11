import {FaLocationDot} from 'react-icons/fa6'
import {FaStore} from 'react-icons/fa'
import {FaClock} from 'react-icons/fa'
function DefaultCard(props){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 md:cols-span-3 gap-[30px] text-center w-[90vw] mx-auto mt-[30px]">
            <div className="rounded-lg bg-white w-[70vw] mx-auto md:w-[25vw] p-[20px] h-[200px] md:h-[300px] shadow-2xl text-black flex flex-col justify-center">
                <FaLocationDot className="w-[100%] h-[70%] text-red"/>
                <div className="flex justify-center items-center my-[10px] w-[100%]">
                    <h1 className="text-[1.5em]">5abs, Runway Downtown</h1>
                </div>
            </div>
            <div className="rounded-lg bg-white w-[70vw] mx-auto md:w-[25vw] p-[20px] h-[200px] md:h-[300px] shadow-2xl text-black flex flex-col justify-center">
                <FaStore className="w-[100%] h-[70%] text-red"/>
                <div className="flex justify-center items-center my-[10px] w-[100%]">
                    <h1 className="text-[1.5em]">Restaurant Store</h1>
                </div>
            </div>
            <div className="rounded-lg bg-white w-[70vw] mx-auto md:w-[25vw] p-[20px] h-[200px] md:h-[300px] shadow-2xl text-black flex flex-col justify-center">
                <FaClock className="w-[100%] h-[70%] text-red"/>
                <div className="flex justify-center items-center my-[10px] w-[100%]">
                    <h1 className="text-[1.5em]">12am - 11pm</h1>
                </div>
            </div>
        </div>
    )
}
export default DefaultCard