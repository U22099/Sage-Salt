import Footer from './Components/Footer'
import Header from './Components/Header'
import Loader from './Components/Loader'
import Main from './Components/Main'
import Carts from './Components/Carts'
import Login from './Components/Login'
import Signup from './Components/Signup'
import {Route, Routes} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [count, setCount] = useState([]);
  function foodCounter(x){
    setCount([...count, x]);
  }
  function foodRemove(x){
    setCount(count.filter((_, i) => i != x));
  }
  return (
    <>
      {/* <Loader/> */}
      <Header count={count}/>
      <div className="py-[90px]">
          <Routes>
            <Route path="/Sage-Salt/" element={<Main callBack={foodCounter}/>}/>
            <Route path="/Sage-Salt/cart" element={<Carts callBackRemove={foodRemove} count={count}/>}/>
            <Route path="/Sage-Salt/login" element={<Login/>}/>
            <Route path="/Sage-Salt/signup" element={<Signup/>}/>
          </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App