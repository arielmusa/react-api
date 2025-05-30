import axios from "axios";
import { useState, useEffect } from "react";

const apiUrlActresses = "https://lanciweb.github.io/demo/api/actresses/";
const apiUrlActors = "https://lanciweb.github.io/demo/api/actors/";

export default function Main() {
  useEffect(() => {
    axios
      .get(apiUrlActors)
      .then((res) => {
        setActorsList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    axios
      .get(apiUrlActresses)
      .then((res) => {
        setActressesList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const [actorsList, setActorsList] = useState([]);
  const [ActressesList, setActressesList] = useState([]);
  console.log(actorsList);
  console.log(ActressesList);
  return (
    <div className="container">
      <div className="row">
        <ul>
          {actorsList.map((actor) => (
            <li key={actor.id}>{actor.name}</li>
          ))}
        </ul>
        <ul>
          {ActressesList.map((actor) => (
            <li key={actor.id}>{actor.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
