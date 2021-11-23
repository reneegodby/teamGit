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

    const [results, setResults] = useState('');
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

    const content =
        results.length < 1 ? (<div>Nothing in your area</div>) : (
            <div>
                <h4>{results[0].name}</h4>
                <br />
                {results[0].dates.start.localDate}
                <br />
                {results[0]._embedded.venues[0].name}
                <hr />
                <h4>{results[1].name}</h4>
                <br />
                {results[1].dates.start.localDate}
                <br />
                {results[1]._embedded.venues[0].name}
                <br />
                <hr />
                <h4>{results[2].name}</h4>
                <br />
                {results[2].dates.start.localDate}
                <br />
                {results[2]._embedded.venues[0].name}
            </div>
        )

    return (
        <div>
            <div style={{/* display: 'flex', justifyContent: 'center', alignItems: 'center'*/ }}>
                <Header>Events Near You</Header>
                <hr />
                {/* <Row>{results?.map(result => (
                        <h6>{result.name}</h6>
                    ))}
                    </Row> */}
                <Row><h5>{content}</h5></Row>
            </div>
        </div>
    )
}

export default TicketMasterApi;