import React, {useEffect, useState} from "react";
import './style.scss';

interface RaceUpdate {
  Id: number,
  RaceAction: string,
  RaceActionTime: string
}

const Live: React.FC = () => {

  const [raceUpdate, setRaceUpdate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:7001/raceinfo');
      // console.log(await result.json())
      setRaceUpdate(await result.json())
      setLoading(false);
    }
    fetchData()
  }, [])

  const showRaceUpdate = (raceUpdates: RaceUpdate[]) => {
    raceUpdates.map(item => (
      <li key={item.Id}>item</li>
    ))
  }

  const listRaceUpdates = raceUpdate.map(({Id, RaceAction, RaceActionTime}) => (
    <li key={Id}>{RaceActionTime} - {RaceAction}</li>
  ));

  const loadingAnimation = () => {
    let animation = null;
    if (loading) {
      animation = (
        <span/>
      )
    }
    return animation;
  }

  return (
    <div className="race-lastupdates">
      <div className="loading">
        {loadingAnimation()}
      </div>
      <div>
        {listRaceUpdates}
      </div>
    </div>
  )
}

export default Live;