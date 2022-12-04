import { useEffect, useState } from "react";

export const useDisplayedValue = (value) => {
    const [displayedValue, setdisplayedValue] = useState(value);
    
    useEffect(()=>{
        const domValueTimeout = setTimeout(()=>{
            setdisplayedValue(value);
        }, 315)
    
        return ()=> {
            clearTimeout(domValueTimeout);
        }
    }, [value])

    return displayedValue
}