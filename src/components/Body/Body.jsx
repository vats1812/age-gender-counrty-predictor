import axios from "axios";
import React, { useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import Button from "@mui/material/Button";
import LoadingBar from "react-top-loading-bar";
import Card from "../Card/Card";

import "./Body.css";
function Body() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState({ gender: "", probability: 0 });
  const [country, setCountry] = useState({
    name: "",
    country: [{ country_id: "", probability: 0 }],
  });
  const [progress, setProgress] = useState(0);

  function handleChange(e) {
    setName(e.target.value);
  }

  async function fetchAge() {
    await axios.get(`https://api.agify.io?name=${name}`).then((res) => {
      setProgress(20);
      setAge(res.data);
      setProgress(40);
    });
  }

  async function fetchGender() {
    await axios.get(`https://api.genderize.io?name=${name}`).then((res) => {
      setProgress(50);
      setGender(res.data);
      setProgress(70);
    });
  }

  async function fetchCountry() {
    await axios.get(`https://api.nationalize.io?name=${name}`).then((res) => {
      setProgress(90);
      setCountry(res.data);
      setProgress(100);
    });
  }

  function handleSearch(e) {
    e.preventDefault();
    fetchAge();
    fetchGender();
    fetchCountry();
  }

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="body_cont">
        <form autoComplete="off">
          <div className="search">
            <input
              type="text"
              placeholder="Type Your Name Here"
              onChange={handleChange}
            />
            <Button variant="contained" type="submit" onClick={handleSearch}>
              <FaSearchengin size={"2.5rem"} />
            </Button>
          </div>
        </form>
        <div className="card">
          <Card
            name={name}
            age={age.age}
            gender={gender?.gender}
            gender_prob={gender?.probability}
            country={country.country[0]?.country_id}
            country_prob={country.country[0]?.probability}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
