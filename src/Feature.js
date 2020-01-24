import React, { useEffect, useState } from "react";
import axios from "axios";

const Feature = ({ person, afterSubmit }) => {
  const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
    const getPerson = async () => {
      const { data } = await axios("https://swapi.co/api/people/5");
      setSendRequest(false);
      afterSubmit(data.mass);
    };

    sendRequest && getPerson();
  }, [sendRequest]);

  const handleClick = () => {
    setSendRequest(true);
  };

  return (
    <div style={{ height: "300px", width: "300px", border: "1px solid black" }}>
      Feature
      <p>Name: {person.name}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Feature;
