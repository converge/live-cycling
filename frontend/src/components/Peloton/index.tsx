import React from 'react';
import '../RaceGroups/style.scss';
import Rider from "../Rider";

const Peloton: React.FC = () => {
  return (
    <div className="race-group">
      <Rider color="#f9f9f9" team="BMC" name="João"/>
      <Rider color="#e1a9a9" team="TREK" name="Julie"/>
    </div>
  )
}

export default Peloton;