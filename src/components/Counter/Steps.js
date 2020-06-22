import React from 'react'
import css from './counter.module.css'

export default function Steps (props) {
    const {currentSteps} = props;
    return <span  className={css.currentValue}>({currentSteps})</span>
}
