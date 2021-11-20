import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

let baseUrl = 'https://app.ticketmaster.com/discovery/v2/attractions';
let key = '88z2tPAlc9NBSPwRrPqEoyx7EmX8nqyT'

// need to make a fetch function that will take in the lat and lon prop from Renee's NASA API and return the results

/*function*/

const TicketMasterApi = (props) => {

    const [results, setResults] = useState('');
    const fetchResults = (url) => {
        let url = `${baseUrl}?latlong=${lat},${lon}&apikey=${key}`; //Need to work on this to pull from NASA API

        fetch(url)
            .then(res => res.json())
            .then(data => setResults(data.events))
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
            <h1>TicketMaster</h1>
            <hr />
            <Button onClick={fetchResults}>Search</Button>
            <hr />
            <ul>
                {results.map(result => (
                    <li>{result.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default TicketMasterApi;