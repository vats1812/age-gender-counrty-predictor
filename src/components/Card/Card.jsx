import React from "react";
import { IoMdMale, IoMdFemale } from "react-icons/io";
import ReactCountryFlag from "react-country-flag";
import { PieChart } from "react-minimal-pie-chart";
import "./Card.css";
function Card(props) {
  const { name, age, gender, gender_prob, country, country_prob } = props;

  let gender_avtar;
  if (gender === "male") {
    gender_avtar = <IoMdMale size={"5rem"} color="#DE8629" />;
  } else if (gender === "female") {
    gender_avtar = <IoMdFemale size={"5rem"} color="#D95281" />;
  }

  return (
    <div>
      <div className="card_cont">
        <div className="avtar">{gender_avtar}</div>
        <div className="name">
          <h1>{name}</h1>
        </div>
        <div className="age">
          <h3>Age: {age === "" ? "" : age === null ? "Ageless🤣" : age} </h3>
        </div>
        <div className="gender">
          <h3>
            Gender:{" "}
            {gender === ""
              ? ""
              : gender === null
              ? "No Gender🤣"
              : gender[0].toUpperCase() + gender.substring(1)}
          </h3>
          {gender_prob === undefined || gender === null ? (
            ""
          ) : (
            <PieChart
              radius={50}
              data={[
                { value: 1, color: "transparent" },
                { value: gender_prob, color: "#FFD43B" },
              ]}
            />
          )}

          {gender_prob === undefined || gender === null
            ? ""
            : gender_prob.toFixed(2)}
        </div>
        <div className="country">
          <h3>Coutry: {country === undefined ? "Countryless😔" : country} </h3>
          {country === "" ? "" : <ReactCountryFlag countryCode={country} svg />}
          {country_prob === undefined ? (
            ""
          ) : (
            <PieChart
              radius={50}
              data={[
                { value: 1, color: "transparent" },
                {
                  value: country_prob,
                  color: "#FFD43B",
                },
              ]}
            />
          )}
          {country_prob === undefined ? "" : country_prob.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default Card;
