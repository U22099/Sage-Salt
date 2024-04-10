import img1 from './../assets/IMG_1316.JPG'
import img2 from './../assets/IMG_1315.JPG'
import imgBacon from './../assets/IMG_1318.JPG'
import imgVeggie from './../assets/IMG_1319.JPG'
import imgPizza from './../assets/IMG_1320.JPG'
import imgNoodles from './../assets/IMG_1321.JPG'
import imgHam from './../assets/IMG_1322.JPG' 
import imgCheeseHam from './../assets/IMG_1323.JPG' 
import imgHam1 from './../assets/IMG_1324.JPG' 
import imgHam2 from './../assets/IMG_1325.JPG' 
import imgBBQ from './../assets/IMG_1317.JPG' 
import logo from './../assets/SageSalt.png'
import Card from './Body-Components/Card'
import DefaultCard from './Body-Components/DefaultCard'
import React,{useState} from 'react'
import {motion} from 'framer-motion'

function Main(props){
    const [foodArr, setFoodArr] = useState(
        [{name:"Veggie", price: 23.45, img: imgVeggie},
        {name:"Bacon",price: 21.32, img: imgBacon},
        {name:"Pizza",price: 278.23, img: imgPizza},
        {name:"BBQ", price: 233.23, img: imgBBQ},
        {name:"Carbonara", price: 87.23, img: imgHam2},
        {name:"Pepperoni", price: 87.3, img: imgNoodles},
        {name:"Ceasar Ham", price: 89.23, img: imgHam1},
        {name:"Cheese Burger", price: 87.45, img: imgCheeseHam},
        {name:"Ham Burger", price: 23.09, img: imgHam},
        {name:"Salt Meat", price: 234.23, img: imgBBQ},
        {name:"Great Ham", price: 87.23, img: imgHam2},
        {name:"Fried Noodles", price: 29.3, img: imgNoodles},
        {name:"Jam Ham", price: 69.23, img: imgHam1},
        {name:"Cream Pizza",price: 373.23, img: imgPizza},
        {name:"Bacon Rica",price: 21.32, img: imgBacon},
        {name:"Bacon Lik",price: 21.32, img: imgBacon},
        {name:"Pepperoni", price: 47.3, img: imgNoodles},
        {name:"Veggan Bunch", price: 23.45, img: imgVeggie},
        {name:"Veggie Large", price: 123.45, img: imgVeggie},
        {name:"Bacon Large",price: 121.32, img: imgBacon},
        {name:"Pizza Large",price: 378.23, img: imgPizza},
        {name:"BBQ Large", price: 333.23, img: imgBBQ},
        {name:"Bacon Lik Large",price: 121.32, img: imgBacon},
        {name:"Pepperoni Large", price: 147.3, img: imgNoodles},
        {name:"Veggan Bunch Large", price: 123.45, img: imgVeggie},
        {name:"Carbonara Large", price: 187.23, img: imgHam2},
        {name:"Pepperoni Large", price: 187.3, img: imgNoodles},
        {name:"Ceasar Ham Large", price: 189.23, img: imgHam1},
        {name:"Cheese Burger Large", price: 187.45, img: imgCheeseHam},
        {name:"Ham Burger Large", price: 123.09, img: imgHam},
        ]
    );
    function updateFood(){
        let value = document.querySelector("#input").value
        let x = new RegExp(value, "i");
        setFoodArr(foodArr.filter(food => x.test(food.name)));
    }
    function resetFood(){
        setFoodArr(
            [{name:"Veggie", price: 23.45, img: imgVeggie},
            {name:"Bacon",price: 21.32, img: imgBacon},
            {name:"Pizza",price: 278.23, img: imgPizza},
            {name:"BBQ", price: 233.23, img: imgBBQ},
            {name:"Carbonara", price: 87.23, img: imgHam2},
            {name:"Pepperoni", price: 87.3, img: imgNoodles},
            {name:"Ceasar Ham", price: 89.23, img: imgHam1},
            {name:"Cheese Burger", price: 87.45, img: imgCheeseHam},
            {name:"Ham Burger", price: 23.09, img: imgHam},
            {name:"Salt Meat", price: 234.23, img: imgBBQ},
            {name:"Great Ham", price: 87.23, img: imgHam2},
            {name:"Fried Noodles", price: 29.3, img: imgNoodles},
            {name:"Jam Ham", price: 69.23, img: imgHam1},
            {name:"Cream Pizza",price: 373.23, img: imgPizza},
            {name:"Bacon Rica",price: 21.32, img: imgBacon},
            {name:"Bacon Lik",price: 21.32, img: imgBacon},
            {name:"Pepperoni", price: 47.3, img: imgNoodles},
            {name:"Veggan Bunch", price: 23.45, img: imgVeggie},
            {name:"Veggie Large", price: 23.45, img: imgVeggie},
            {name:"Bacon Large",price: 121.32, img: imgBacon},
            {name:"Pizza Large",price: 378.23, img: imgPizza},
            {name:"BBQ Large", price: 333.23, img: imgBBQ},
            {name:"Bacon Lik Large",price: 121.32, img: imgBacon},
            {name:"Pepperoni Large", price: 147.3, img: imgNoodles},
            {name:"Veggan Bunch Large", price: 123.45, img: imgVeggie},
            {name:"Carbonara Large", price: 187.23, img: imgHam2},
            {name:"Pepperoni Large", price: 187.3, img: imgNoodles},
            {name:"Ceasar Ham Large", price: 189.23, img: imgHam1},
            {name:"Cheese Burger Large", price: 187.45, img: imgCheeseHam},
            {name:"Ham Burger Large", price: 123.09, img: imgHam},
            ]);
    }
    return(
        <>
            <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.5
                }
            }}
            className="w-[90vw] flex flex-col md:flex-row gap-[15px] mx-[auto] h-[360px] justify-between items-center">
                <div className="rounded-md w-[100%] h-[100%] grid overflow-hidden">
                    <img src={img1} className="w-[100%] h-[100%]"/>
                    <div id="inputcard" className="z-1 relative w-max top-[-170px] md:top-[-300px] left-[20px] md:left-[99px] bg-white p-[20px] flex flex-col md:flex-row justify-between items-center rounded-lg gap-[20px]">
                        <input id="input" onChange={resetFood} type="text" className="rounded-lg w-[200px] md:w-[230px] p-[10px] shadow-[5px_5px_5px_3px_rgba(0,0,0,0.8)] bg-white text-gray-700" placeholder="Search for Foods"/>
                        <button onClick={updateFood} className="rounded w-[100px] h-[30px] flex justify-center items-center bg-primary-color text-white">Find</button>
                    </div>
                </div>
                <div className="rounded-md grid overflow-hidden w-[100%] h-[100%]">
                    <img src={img2} className="w-[100%] h-[100%] "/>
                    <img src={logo} className="z-1 relative top-[-170px] md:top-[-320px] left-[10px] md:left-[160px] w-[300px]"/>
                </div>
            </motion.div>
            <motion.h1 
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 1,
                }
            }}
            id="food" className="mt-[30px] w-[90vw] mx-auto primary-color text-[2em]">Foods:</motion.h1>
            <div className="flex flex-col mt-[30px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] text-center w-[90vw] mx-auto">
                    {foodArr.map((food, i) => <Card key={i} callBack={props.callBack} name={food.name} index={i} price={food.price} img={food.img}/>)}
                </div>
                <DefaultCard/>
            </div>
        </>
    )
}
export default Main