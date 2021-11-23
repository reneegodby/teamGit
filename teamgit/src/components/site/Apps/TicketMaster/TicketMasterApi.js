import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap';
import styled from 'styled-components';

const baseURL = 'https://app.ticketmaster.com/discovery/v2/events'
const key = '88z2tPAlc9NBSPwRrPqEoyx7EmX8nqyT'

const Header = styled.header`
    text-align: center;
`

/*function*/

const TicketMasterApi = (props) => {

    const [results, setResults] = useState(null);
    console.log(results);
    const fetchResults = () => {
        let url = `${baseURL}?apikey=${key}&latlong=${props.lat},${props.lon}&locale=*`;

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
                <Row><Header>Events Near You</Header>
                    <hr />
                    {results?.map(result => (
                        <h6>
                            {result.name}
                        </h6>
                    ))}
                    </Row>
            </div>
        </div>
    )
}

export default TicketMasterApi;