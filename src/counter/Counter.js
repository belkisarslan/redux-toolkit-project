import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import '../index.css';
import NewYear from './NewYear';
import Header from './Header';

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  if(count === 0){
   return <NewYear/>
  }

  return (
    <>
    <Header/>
    <div className='main'>
     <div className='container'>
      <button className='btn'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          <span className="material-symbols-outlined">
          remove
          </span>
        </button>
        <span className='span'>{count}</span>
        <button className='btn'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          <span className="material-symbols-outlined">
          add
          </span>
        </button>
      </div>
    </div>
    </>
  )
}