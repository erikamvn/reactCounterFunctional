import React from 'react'
import css from './counter.module.css';
import DecrementButton from './DecrementButton';
import Value from './Value';
import IncrementButton from './IncrementButton';
import Steps from './Steps';

export default function Counter2(props) {
    const handleButtonClick = (clickType) => {
        props.onCount(clickType);
    }
    const { countValue, currentStep } = props;

       
        return (
            <div className={css.counterContainer}>
                <DecrementButton onDecrement = {handleButtonClick} />  
                <Value value={countValue} />
                <IncrementButton onIncrement={handleButtonClick} />
                <Steps currentSteps={currentStep} />
            </div>
        );
    
}
