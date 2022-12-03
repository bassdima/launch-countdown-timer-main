import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./timer.css";
import {getFormattedDateDiff} from "../../utils"

function Timer() {
    const initialValues =  getFormattedDateDiff();
    const [days, setDays] = useState(initialValues.days);
    const [hours, setHours] = useState(initialValues.hours);
    const [minutes, setMinutes] = useState(initialValues.minutes);
    const [seconds, setSeconds] = useState(initialValues.seconds);
    
useEffect(()=>{
    const countdownTimer = setInterval(() => {
        const {days, hours, minutes, seconds} = getFormattedDateDiff();

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }, 250)

    return () => {
        clearInterval(countdownTimer);
    }
}, []);

    return (
        <div className="timer-container">
            <Card
                backgroundBottomValue = {days + 1}
                value = {days}
                cardTitle = 'DAYS'
            />
            <Card
                backgroundBottomValue = {(hours + 1 === 24) ? 0 : hours + 1}
                value = {hours}
                cardTitle = 'HOURS'
            />
            <Card
                backgroundBottomValue = {(minutes + 1 === 60) ? 0 : minutes + 1}
                value = {minutes}
                cardTitle = 'MINUTES'
            />
            <Card
                backgroundBottomValue = {(seconds + 1 === 60) ? 0 : seconds + 1}
                value = {seconds}
                cardTitle = 'SECONDS'
            />
        </div>
    );
}

export default Timer;