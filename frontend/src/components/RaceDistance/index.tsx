import React, {useState} from 'react';

const RaceDistance: React.FC = () => {

  const [prog, setProg] = useState(20);

  const upIt = () => {
    setProg((prev) => prev + 1)

  }

  return (
    <div className="race-distance">
      <label htmlFor="file">Race Situation:
        <progress id="file" max="100" value={prog}>.</progress>
      </label>
      <input type="button" onClick={upIt} value='up'/>
    </div>
  )
}

export default RaceDistance;