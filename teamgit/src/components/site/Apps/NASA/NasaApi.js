import React, {useState} from 'react';

const baseUrl = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'axnei6Bx1WjoXq8EXkYZRdUznhudstUwKzTFfBoE'
// Since our base API url and the API key won't change as the users interact with the application we can declare them as const's outside of our class component.

//why useState vs useEffect???
const NasaApi = () => {
    const [lon, setLon] = useState('');
    const [lat, setLat] = useState('');
    const [results, setResults] = useState('');
    // That should take care of all the data we need to store that can change depending on how the user interacts with our application. I'm assuming I'll use this with the location tracker. 

    const fetchResults = () => {
        let url = `${baseUrl}?lon=${lon}&lat=${lat}&date=2014-01-01&dim=0.15&api_key=${key}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setResults(data.response.docs))
    }


    return(
<div>test</div>
    )
}

export default NasaApi;