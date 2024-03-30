import { useState, useEffect } from "react";

export default function Joker() {
    let [joke, setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke"

    const getNewJokes = async () => {
        let respose = await fetch(URL);
        let jsonResponse = await respose.json();
        
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    };

    useEffect(()=>{
        async function getFirtsJoke(){
            let respose = await fetch(URL);
            let jsonResponse = await respose.json();
            
            setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});

        }
        getFirtsJoke();
    }, []);
    return (
        <div>
            <h3>Jokes!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJokes}>New Jokes</button>
        </div>
    )
}