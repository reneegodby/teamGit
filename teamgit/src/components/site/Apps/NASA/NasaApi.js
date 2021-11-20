import React, { useState } from "react";
import {Button} from 'reactstrap';
import styled from "styled-components";

const Img = styled.img`
height: 150px;
width: 150px;
`

const baseUrl = "https://api.nasa.gov/planetary/earth/imagery";
const key = "axnei6Bx1WjoXq8EXkYZRdUznhudstUwKzTFfBoE";
// Since our base API url and the API key won't change as the users interact with the application we can declare them as const's outside of our class component.

const NasaApi = (props) => {
  const [results, setResults] = useState({});
  
  // That should take care of all the data we need to store that can change depending on how the user interacts with our application. I'm assuming I'll use this with the location tracker.
   
  const fetchImage = () => {
    let url = `${baseUrl}?lon=${props.lon}&lat=${props.lat}&date=2014-01-01&dim=0.15&api_key=${key}`;
    fetch(url)
      .then((res) => res)
      .then((res) => {
          console.log(res);
          setResults(res.url);
        })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button onClick={fetchImage}>fetch Img</Button>
      <Img src={results} alt={results}></Img>
    </div>
  );
};

export default NasaApi;
