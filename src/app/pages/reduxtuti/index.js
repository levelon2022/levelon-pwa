import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, selectValue } from "../../storage/reducers/counter"

const ReduxTutorial = () => {
	const count = useSelector(selectValue)
	const dispatch = useDispatch()

	return (
		<>
			<div>the value of count is {count}</div>
			<button onClick={() => dispatch(increment(count))}>increment</button>
			<button onClick={() => dispatch(decrement(count))}>decrement</button>
		</>
	)
}

export default ReduxTutorial