import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Img = styled.img`
  height: 20vw;
  width: 20vw;
  object-align: center;
  border-radius: 500px;
  border: 2px solid black;
  padding: 2px;
`;

const baseUrl = "https://api.nasa.gov/planetary/earth/imagery";
const key = "axnei6Bx1WjoXq8EXkYZRdUznhudstUwKzTFfBoE";

const NasaApi = (props) => {
  const [results, setResults] = useState(null);

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

  useEffect(() => {
      fetchImage();
  });

  return (
    <div>
        <header>Satellite Image of Location</header>
      <hr />
      <Img src={results} alt={results}></Img>
    </div>
  );
};

export default NasaApi;
