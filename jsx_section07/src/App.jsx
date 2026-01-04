import { useState, useEffect, useRef } from 'react'
import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import Even from './components/Even'

function App() {

  const [count, setCount] = useState(0);

  const isMount = useRef(false);

  // 마운트: 탄생
  useEffect(()=>{
    console.log("mount")
  }, [])

  // 업데이트
  useEffect(()=>{
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  })

  //

  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
      
    </div>
  )
}

export default App
