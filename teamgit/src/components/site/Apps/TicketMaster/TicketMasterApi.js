import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap';

// const baseURL = 'https://app.ticketmaster.com/discovery/v2/attractions?apikey=88z2tPAlc9NBSPwRrPqEoyx7EmX8nqyT&latlong=40.0542448,-85.9508923&locale=*'
// const key = '88z2tPAlc9NBSPwRrPqEoyx7EmX8nqyT'

/*function*/

const TicketMasterApi = (props) => {

    const [results, setResults] = useState(null);
    console.log(results);
    const fetchResults = () => {
        let url = 'https://app.ticketmaster.com/discovery/v2/events?apikey=88z2tPAlc9NBSPwRrPqEoyx7EmX8nqyT&latlong=40.0542448,-85.9508923&locale=*';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setResults(data._embedded.events);
                console.log(data)
            })
            .catch(err => console.log(err))
}
    useEffect(() => {
        fetchResults();
    });
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Row><h1>TicketMaster</h1>
                <hr />
                {/* <Button onClick={fetchResults}>Search</Button> */}
                <hr />
                {results?.map(result => (
                    <p>{result.name}</p>
                ))}</Row>
            </div>
        </div>
    )
}

export default TicketMasterApi;