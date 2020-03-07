import React from 'react'
import Counter from '../components/Counter'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules'
import { increase, decrease, increaseBy } from '../modules/counter'

function CounterContainer() {
    const count = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch()

    const onIncrease = () => {
        dispatch(increase())
    }

    const onDecrease = () => {
        dispatch(decrease())
    }

    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff))
    }

    return (
        <Counter
        // count={count} // useCounter에 따른 props삭제.
        // onIncrease={onIncrease}
        // onDecrease={onDecrease}
        // onIncreaseBy={onIncreaseBy}
        />
    )
}

export default CounterContainer