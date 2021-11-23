import React, {useEffect, useState} from "react";
import { Button, Row } from 'reactstrap'
import styled from "styled-components";

const Header = styled.header`
text-align: center;
`

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const key = '16bfd0882021f8b50da9acac7d8ee70d';

const WeatherApi = (props) => {

    const [description, setDescription] = useState('');
    const [temp, setTemp] = useState('');
    const [cloudy, setCloudy] = useState('');
    const [humidity, setHumidity] = useState('');
    const [name, setName] = useState('');
    const [unit, setUnit] = useState(true);
    

    const fetchWeather = () => {
        let url = `${baseUrl}?lat=${props.lat}&lon=${props.lon}&units=imperial&appid=${key}`;

        fetch (url)
            .then(res => res.json())
            .then(data => {
                setDescription(data.weather[0].description);
                setTemp(Math.floor(data.main.temp));//fahrenheit
                setCloudy(data.clouds.all);
                setHumidity(data.main.humidity);
                setName(data.name);
                console.log(data);

            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchWeather();
    });

    const toggle = () => setUnit(unit => !unit);

    return(
        <div>
            <Header className='title'>Weather in {name}</Header>
            {/* <Button onClick={fetchWeather}>fetch Weather</Button> */}
            <hr />
            <Row><h6>Temperature: {unit ? Math.round(temp) : Math.round((temp - 32) / 1.8)}°F <Button onClick={toggle}>Convert to C</Button></h6></Row>
            <hr />
            <Row><h6>Humidity: {humidity}%</h6></Row>
            <hr />
            <Row><h6>Cloudy: {cloudy}%</h6></Row>
            <hr />
            <Row><h6>Description: {description}</h6></Row>

        </div>
    )
}

export default WeatherApi;