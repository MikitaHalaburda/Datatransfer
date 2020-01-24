import React, { useEffect, useState } from "react";
import axios from "axios";
import Feature from "./Feature";
import "./styles.css";

function App() {
  const [person, setPerson] = useState({});

  useEffect(() => {
    const getPerson = async () => {
      const { data } = await axios("https://swapi.co/api/people/1");
      setPerson(data);
    };

    getPerson();
  }, []);

  const afterSubmit = piece => {
    setPerson(prev => ({
      ...prev,
      mass: piece
    }));
  };

  return (
    <div className="App">
      <p>Name: {person.name}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <Feature person={person} afterSubmit={afterSubmit} />
    </div>
  );
}

export default App;
