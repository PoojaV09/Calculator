import React from 'react'
import {useDispatch, useSelector} from 'react-redux' //useDispatch and useSelector hooks from the react-redux
import {loadANS, loadButtons,loadClear, loadBackspace} from '../redux/calculatorRedux/calculator.actions'
import {CALCULATOR_KEY} from '../redux/calculatorRedux/calculator.reducer'
import './App1.css';

const CalculatorApp = () => {            
    const dispatch = useDispatch()


     
    const handleAnswer = (e) =>{ 
        e.preventDefault()
      dispatch(loadANS())
    }

    //* We cant use Useeffect in redux react. Thats why we need middleware to include some side logic in our redux program
    // useEffect(()=>{
    //     console.log('Updated Title')
    //   document.title=`Clicked  times`
    //   }, [])

    // view store 
    const viewCalculator = useSelector((state) =>{ 
        return state[CALCULATOR_KEY]   
    })

    return (
        <React.Fragment>
            <div className="container">
            {/* <pre>{JSON.stringify(viewCalculator)}</pre> */}
           <section>
               <div className="body">
                   <div>    
                   <br/>                
                       <h1>CALCULATOR</h1>
                   </div>
                             
                   <div className=' screen '>
                       <input
                       className='input'
                       type='text'
                       placeholder='0'
                       value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans}
                        />
                       </div>
                
                 
                   <div className='calc-button-row'>
                       <button onClick={() =>dispatch(loadClear())}>AC</button>
                       <button onClick={() =>dispatch(loadBackspace())}>C</button>
                       <button onClick={() =>dispatch(loadButtons('/'))}>/</button>
                       <button onClick={() =>dispatch(loadButtons('+'))}>+</button> 


                       <button onClick={() =>dispatch(loadButtons(9))}>9</button> 
                       <button onClick={() =>dispatch(loadButtons(8))}>8</button>
                       <button onClick={() =>dispatch(loadButtons(7))} >7</button> 
                       <button onClick={() =>dispatch(loadButtons('-'))}>-</button> 

                       <button onClick={() =>dispatch(loadButtons(4))}>4</button>
                       <button onClick={() =>dispatch(loadButtons(5))}>5</button>
                       <button onClick={() =>dispatch(loadButtons(6))}>6</button>
                       <button onClick={() =>dispatch(loadButtons('*'))}>*</button>

                        <button onClick={() =>dispatch(loadButtons(1))}>1</button>
                       <button onClick={() =>dispatch(loadButtons(2))}>2</button>
                       <button onClick={() =>dispatch(loadButtons(3))}>3</button>

                       <button onClick={() =>dispatch(loadButtons('.'))}>.</button>
                       <button onClick={() =>dispatch(loadButtons(0))}>0</button> 
                        <button onClick={handleAnswer}>=</button> 
        
                   </div>
                   
               </div>
           </section>
           </div>
        </React.Fragment>
    )
}

export default CalculatorApp