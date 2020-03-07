import counter from './counter'
import { combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer> // 컨테니어 컴포넌트에서 useSelector()를 사용할 때 필요함.