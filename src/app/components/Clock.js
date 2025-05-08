'use client'

import { useState, useEffect } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date());
    const [showColon, setShowColon] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
            setShowColon((prev) => !prev);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

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
        <div className="font-mono text-sm flex items-center space-x-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <span className="font-medium">{formatTime()}</span>
        </div>
    );
}

export default Clock;