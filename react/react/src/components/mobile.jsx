import React from "react";
import { useContext } from "react";
import MobileComponent from "./MobileComponent";

function Mobile() {
  const mobileName = useContext(MobileComponent);
  return (
    <>
      <h3>Mobile Section</h3>
      <p>Explore a wide range of mobile phones and accessories:</p>
      <h2>{mobileName}</h2>
    </>
  );
}

export default Mobile;