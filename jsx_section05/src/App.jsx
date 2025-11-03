import './App.css'
import Bulb from './components/Bulb.jsx'
import Button from './components/Button.jsx'
import Counter from './components/Counter.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import { useState } from 'react'
import Register from './components/Register.jsx'
import RegisterRef from './components/RegisterRef.jsx'


function App() {

  const buttonProps = {
    text: "메일",
    color: "red",
    a:1,
    b:2,
    c:3
  }
  

  return (
    <>
      {/* <Button {...buttonProps}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <div>자식 요소</div>
      </Button> */}

      {/* <Bulb/>
      <Counter /> */}

      {/* <Register/> */}
      <RegisterRef/>
    </>
  )
}

export default App
