import "./SeasonDisplay.css";
import React from "react";

// We are creating an object
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!!!!",
    iconName: "sun",
  },

  winter: {
    text: "Burr it is chilly!!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  // console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  // console.log(season);
  /*
  // We use Ternary operator to pass the value from season variable to text variable
  const text =
    season === "winter" ? "Burr it is chilly!!" : "Lets hit the beach!!!!";

  const icon = season === "winter" ? "snowflake" : "sun";
  // This has lead to code duplicating, we need to refactor both variable.
  // We need to create and object to hold both winter and summer and has the two variables as keypoint(properties)
*/

  // Destructuring the seasonConfig object to get test and iconName as variables

  console.log(seasonConfig[season]);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
