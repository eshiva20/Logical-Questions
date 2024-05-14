//React Machine Task : On Screen when you click a Circle should generate of random radius with that point as a center and atmost only 2 circle should generate and you have to find weather that two circles are intersecting are not

import React, { useState } from "react";

const Test = () => {
  const [cirles, setCirles] = useState([]);

  const handleGetPoint = (e) => {
    const radius = Math.floor(Math.random() * 70) + 80;

    let randomColorString = "#";
    const arrayOfColorFunctions = "0123456789abcdef";
    for (let x = 0; x < 6; x++) {
      let index = Math.floor(Math.random() * 16);
      let value = arrayOfColorFunctions[index];

      randomColorString += value;
    }

    const point = {
      x: e.clientX,
      y: e.clientY,
      radius,
      randomColorString,
    };
    if (cirles.length < 2) {
      setCirles([...cirles, point]);
    } else {
      setCirles([]);
    }

    if (cirles.length === 1) {
      const prevCircle = cirles[0];
      const newCircle = point;
      const distance = Math.sqrt(
        (newCircle.x - prevCircle.x) ** 2 + (newCircle.y - prevCircle.y)
      );
      if (distance > prevCircle.radius + newCircle.radius) {
        console.log("Not Intersecting");
      } else {
        console.log("Cirles are Interseting");
      }
    }
  };

  return (
    <div
      style={{ height: "100vh", position: "relative", cursor: "pointer" }}
      onClick={handleGetPoint}
    >
      {cirles.map((elem, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: elem?.x - elem?.radius,
            top: elem?.y - elem?.radius,
            height: elem?.radius * 2,
            width: elem?.radius * 2,
            border: `3px solid ${elem?.randomColorString}`,
            borderRadius: "50%",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Test;
