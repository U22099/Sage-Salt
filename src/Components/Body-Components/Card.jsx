import {FaCartShopping} from 'react-icons/fa6'
import {motion} from 'framer-motion'


function Card(props){
    function addFood(){
        const obj = {
            img: props.img,
            foodName: props.name,
            no: 1,
            price: props.price
        }
        props.callBack(obj);
    }
    return(
        <motion.div 
        initial={{
            x: -100,
            opacity: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
            }
        }}
        viewport={{
            once: true,
        }}
        className="hover:scale-105 transition duration-500 ease-in-out rounded-lg mx-auto w-[83vw] bg-white md:w-[30vw] p-[30px] h-[350px] shadow-2xl text-black flex flex-col justify-center">
            <img src={props.img} className="w-[100%] rounded-lg h-[290px]"/>
            <div className="flex justify-between items-center my-[10px]">
                <h1>{props.name}</h1>
                <div className="flex items-center gap-[20px]">
                    <h2>{`$${props.price}`}</h2>
                    <FaCartShopping onClick={addFood} className=" transition duration-500 ease-in-out cursor-pointer bg-primary-color rounded-md border-red-600 hover:border-[3px] text-white text-[2.5em] p-[7px]"/>
                </div>
            </div>
        </motion.div>
    )
}
export default Card
