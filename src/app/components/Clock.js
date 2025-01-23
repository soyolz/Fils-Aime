'use client'
import { useState } from 'react'
import { useEffect } from 'react'   

function Clock() {
    const [time, setTime] = useState(new Date());
    const [showColon, setShowColon] = useState(true);


    useEffect(() => {
        const intervalid = setInterval(() =>{
            setTime(new Date());
            setShowColon((prev) => !prev);
        }, 1000);
        return () => {
            clearInterval(intervalid);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
         //const seconds = time.getSeconds();
        const meridian = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;   
        
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const colon = showColon ? ":" : " "; 

        return `${hours}${colon}${formattedMinutes} ${meridian}`
    }

    return (
        <h1>{formatTime()}</h1>
    );

}

export default Clock;