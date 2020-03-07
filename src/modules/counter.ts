/**
 * @description 액션 자체 선언.
 */
const INCREASE = 'counter/INCREASE' as const
const DECREASE = 'counter/DECREASE' as const
const INCREASE_BY = 'counter/INCREASE_BY' as const
// as const 는 const assertions라는 Typescript 문법임. 액션 객체를 만들 때 Typescript의 type 체킹을 string이 아니라 해당 액션으로 수월하게 하기 위함.

/**
 * @description 액션 생성함수 선언.
 */
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })
export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff // 이름이 payload인 이유는 FSA라는 리덕스 규칙을 따르기 위함.
})

/**
 * @description 액션 타입 선언.
 */
type CounterAction = | ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>

/**
 * @description 상태의 타입과 초기값 선언.
 */
type CounterState = {
    count: number
}

const initialState: CounterState = {
    count: 0
}

/**
 * @description 리듀서 작성.
 */
function counter(state: CounterState = initialState, action: CounterAction) {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1 }
        case DECREASE:
            return { count: state.count - 1 }
        case INCREASE_BY:
            return { count: state.count + action.payload }
        default:
            return state
    }
}

export default counter