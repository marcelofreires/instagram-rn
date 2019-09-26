import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TouchButton, TouchButtonText } from '~/components/Button/styles'
import { CounterText } from '~/components/CounterText/styles'

import * as actions from './actions'

const Test = () => {
  const counterNumber = useSelector(({ counter }) => counter)
  const dispatch = useDispatch()

  const onPress = () => dispatch(actions.addCounter(1))

  return (
    <>
      <TouchButton onPress={onPress}>
        <TouchButtonText>Click me</TouchButtonText>
      </TouchButton>
      <CounterText>Counter: { counterNumber.counter }</CounterText>
    </>
  )
}

export default Test
