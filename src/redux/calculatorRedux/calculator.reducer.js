import { LOAD_ANS, LOAD_CLEAR, LOAD_BUTTONS, LOAD_BACKSPACE } from './calculator.actionTypes'
export const CALCULATOR_KEY = 'calculatorStore'

let initialState = {
    number: '',
    ans: ''
}

export const calculatorReducer = (state = initialState, action) => {
    let { type, payload } = action

    switch (type) {
        case LOAD_BUTTONS:
            return {
                ...state,
                ...payload,
                number: state.number.concat(action.payload)
            }

        case LOAD_ANS:
            try {
                return {
                    ...state,
                    ...payload,
                    ans: eval(state.number).toString()
                }
            } catch (error) {
                return {
                    ...state,
                    ...payload,
                    ans: 'Invalid'
                }
            }

            case LOAD_CLEAR:              
                    return {
                        ...state,
                        ...payload,
                        number: '',
                        ans:''
                    }
               
            
            case LOAD_BACKSPACE:
                return {
                    ...state,
                    ...payload,
                    number:(state.number).slice(0,-1), // Because of we can doing ans empty
                    ans:''
                }
                default : return state

    }
}