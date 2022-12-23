import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
      <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          Azalt
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          Arttır
        </button>
        
      </div>
    </div>
  )
}