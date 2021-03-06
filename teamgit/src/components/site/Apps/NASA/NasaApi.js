import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Img = styled.img`
  height: 20vw;
  width: 20vw;
  border-radius: 5%;
  border: 2px solid black;
  padding: 2px;
  box-shadow: 5px 5px 5px #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vw;
  
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
        <header className='title'>Satellite Image of Location</header>
      <hr />
      <Img src={results} alt={results} ></Img>
    </div>
  );
};

export default NasaApi;
