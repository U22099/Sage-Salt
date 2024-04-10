import Footer from './Components/Footer'
import Main from './Components/Main'
import Carts from './Components/Carts'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Header from './Components/Header'
import {Route, Routes} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [count, setCount] = useState([])
  function foodCounter(x){
    setCount([...count, x]);
  }
  function foodRemove(x){
    setCount(count.filter((_, i) => i != x));
    count.map(food=>console.log(food));
    console.log(x);
    console.log("new");
  }
  return (
    <>
      <Header count={count}/>
      <div className="py-[90px]">
          <Routes>
            <Route path="/SageSalt/" element={<Main callBack={foodCounter}/>}/>
            <Route path="/SageSalt/cart" element={<Carts callBackRemove={foodRemove} count={count}/>}/>
            <Route path="/SageSalt/login" element={<Login/>}/>
            <Route path="/SageSalt/signup" element={<Signup/>}/>
          </Routes>
      </div>
      
    </>
  )
}

export default App