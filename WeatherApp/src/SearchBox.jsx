import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "d4a5e4a76d20569ad9b99fededb19cd6";
    let getWeatherInfo = async() =>{
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result ={
                city: city,
                temp: jsonResponse.main.temp,
                humidity: jsonResponse.main.humidity,
                tempMin: jsonResponse.main.temp_min,
                tempMix: jsonResponse.main.temp_mix,
               
                feelsLike: jsonResponse.main.feels_like,
               
    
            };
            console.log(result);
            return result;
        
            
        } catch (error) {
            throw err;
            
            
        }
    };   
       

    let handleChange=(evt) =>{
        setCity(evt.target.value);

    };

      let handleSubmit= async (evt)=> {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo =await getWeatherInfo();
            updateInfo(newInfo);
            
        } catch (error) {
            setError(true);
            
        }
       
      };
    return(
        <div onSubmit={handleSubmit}>
            
            <form>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" required value={city} onChange={handleChange} />
            <br />
            <Button variant="contained" type= "submit">
        Search
      </Button>
        {error && <p style={{color: "red"}}>No Such Place Exits!</p>}   
      
            </form>
        </div>
    )
}