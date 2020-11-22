import React from "react";
import "./style.scss";

// todo: criar um json, ou pegar online com todas as equipes
interface RiderProfile {
  color: string,
  team: string,
  name: string
}

const Rider: React.FC<RiderProfile> = (props) => {
  return (
    <div className='rider-profile'>
      <span>{props.name} - {props.team}</span>
      <div className="rider-color"/>
    </div>
  )
}

export default Rider;