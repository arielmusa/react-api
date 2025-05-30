import axios from "axios";
import { useState, useEffect } from "react";
import ActorCard from "./ui/ActorCard";

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
    <div className="container my-5">
      <div className="row g-3">
        {actorsList.map((actor) => (
          <ActorCard
            key={actor.id}
            imgUrl={actor.image}
            name={actor.name}
            biography={actor.biography}
            birthYear={actor.birthYear}
            nationality={actor.nationality}
            awards={actor.awards}
          />
        ))}
      </div>
    </div>
  );
}
