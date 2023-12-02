import React from "react";
import ProfileData from "./data/profiles";
import AlmaMaterData from "./data/almamaters"

export default function Left() {
  const profiles = ProfileData.map((profile) => (
    <a href={profile.link} target="_blank" rel="noreferrer">
      <img src={profile.logo} alt={profile.name} className="logo-icons" />
    </a>
  ));

  const almaMaters = AlmaMaterData.map((almaMater) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginLeft: "60px",
        padding: "5px",
      }}
    >
      <div style={{ width: "10%" }}>
        <img
          src={almaMater.logo}
          alt={almaMater.name}
          style={{ width: "35px", height: "35px" }}
        />
      </div>
      <div style={{ fontSize: "18px", width: "80%", textAlign: "left" }}>
        <a
          href={almaMater.link}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          {almaMater.name}
        </a>
      </div>
    </div>
  ));

  const profilePhoto = (
    <img
      src="./images/rickandmorty.jpg"
      alt="Rick and Morty"
      className="profile-photo"
    />
  );

  return (
    <>
      <div className="left-component">
        {profilePhoto}
        <h1>Al Amru Bil Maruf</h1>
        <div className="profile-links">{profiles}</div>
        <div className="alma-mater" style={{ marginTop: "25px" }}>
          {almaMaters}
        </div>
      </div>
    </>
  );
}
