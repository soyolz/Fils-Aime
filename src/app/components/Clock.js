// Clock.js
'use client'

import { useState, useEffect } from 'react'

function Clock() {
    // Start with null instead of new Date()
    const [time, setTime] = useState(null);
    const [showColon, setShowColon] = useState(true);

    useEffect(() => {
        // Set the time only on the client side
        setTime(new Date());

        const intervalId = setInterval(() => {
            setTime(new Date());
            setShowColon((prev) => !prev);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    // Only render the formatted time if it exists (client-side only)
    if (!time) return <span>Loading...</span>;

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
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