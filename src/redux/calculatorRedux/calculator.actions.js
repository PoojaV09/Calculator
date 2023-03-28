import {LOAD_ANS, LOAD_CLEAR, LOAD_BUTTONS,LOAD_BACKSPACE} from './calculator.actionTypes'

export const loadButtons = (num) => {
    return{
        type:LOAD_BUTTONS, 
        payload:num  
    }
}

export const loadANS = (num) => {
    return{
        type:LOAD_ANS,
        payload:num
    }
}

export const loadClear = (num) => {
    return{
        type:LOAD_CLEAR,
        payload:num
    }
}

export const loadBackspace = (num) => {
    return{
        type:LOAD_BACKSPACE,
        payload:num
    }
}