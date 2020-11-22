import React from "react";
import Peloton from "../Peloton";
import BreakAway from "../BreakAway";
import FinishLine from "../FinishLine";
import "./style.scss";

const RaceGroups: React.FC = () => {
  return (
    <div className="race-groups">
      <Peloton/>
      <BreakAway/>
      <FinishLine/>
    </div>
  )
}

export default RaceGroups;