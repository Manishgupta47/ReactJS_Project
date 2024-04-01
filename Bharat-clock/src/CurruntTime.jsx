import { useEffect } from "react";
import { useState } from "react";

let CurruntTime = () => {

    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return ()=> {
            clearInterval(intervalId);
            console.log("Cancelled the interval")
        };
    }, [])
     
    
    return(
        <p>This is the Currunt time; {time.toDateString()}- {time.toLocaleTimeString()}</p>
    )

    };
     export default CurruntTime;