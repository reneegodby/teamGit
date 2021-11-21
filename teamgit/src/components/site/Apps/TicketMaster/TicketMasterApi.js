import React, { useState, useEffect } from 'react';
import { Button, Header } from 'reactstrap';
import styled from 'styled-components';

const Header = styled.header`text-align: center;`;

const baseUrl = 'https://app.ticketmaster.com/discovery/v2/attractions';
const key = '88z2tPAlc9NBSPwRrPqEoyx7EmX8nqyT'

// need to make a fetch function that will take in the lat and lon prop from Renee's NASA API and return the results

/*function*/

const TicketMasterApi = (props) => {

    const [results, setResults] = useState('');
    const [sports, setSports] = useState('');
    const [concerts, setConcerts] = useState('');
    const [theater, setTheater] = useState('');
    const [otherEvents, setOtherEvents] = useState('');
    
    const fetchResults = (url) => {
        let url = ``; //Need to work on this to pull from NASA API

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setResults(data.results);
                setSports(data.sports);
                setConcerts(data.concerts);
                setTheater(data.theater);
                setOtherEvents(data.otherEvents);
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    Button.onClick = () => {
        fetchResults();
    }

    useEffect(() => {
        fetchResults();
    }, [])

    return (
        <div>
            <Header>Events in {results}</Header>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>TicketMaster</h1>
                <hr />
                <h2>Sports</h2>
                <h3>{sports.name}</h3>
                <hr />
                <h2>Concerts</h2>
                <h3>{concerts.name}</h3>
                <hr />
                <h2>Stage Shows</h2>
                <h3>{theater.name}</h3>
                <hr />
                <h2>Other</h2>
                <h3>{otherEvents.name}</h3>
                <hr />
                <Button onClick={fetchResults}>Search</Button>
                <hr />
                <ul>
                    {results.map(result => (
                        <li>{result.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default TicketMasterApi;