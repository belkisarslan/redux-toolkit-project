import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../NewYear.css'
import { increment } from './counterSlice'


const NewYear = () => {
    
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <div>
    <header>
    <div className="snow snowfall">   
    </div>
    <div className="snow2 snowfall2">
    </div>
    <div className="containerNewyear">
    <div className="hat">
        <div onClick={() => dispatch(increment())} className="ball"><span className="material-symbols-outlined close">
        close
        </span></div>
        <div className="body"></div>
        <div className="base">.</div>
        <p className="p">Mutlu Yıllar!</p>
        <p className="p">Hoş Geldin 2023!</p>
        <p className='count'>{count}</p>
      </div>
    </div>
   </header>
    </div>
  )
}

export default NewYear