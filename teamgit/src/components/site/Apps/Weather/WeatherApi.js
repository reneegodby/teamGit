import React, {useState, useEffect} from "react";
import { Button, Label, Input } from 'reactstrap'

const baseUrl = 'api.openweathermap.org/data/2.5/weather';
const key = '16bfd0882021f8b50da9acac7d8ee70d';

const WeatherApi = (props) => {

    const [results, setResults] = useState({});

    const fetchWeather = () => {
        let url = `${baseUrl}?lat=35&lon=139&appid=${key}`;

        fetch (url)
            .then((res) => {
                res.json() })
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    return(
        <div>
            <Button onClick={fetchWeather}>fetch Weather</Button>
        </div>
    )
}

export default WeatherApi;