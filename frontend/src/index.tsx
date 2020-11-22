import React from 'react';
import {render} from 'react-dom';
import LiveUpdates from './components/Live';
import './css/reset.scss';
import './css/index.scss';
import RaceDistance from './components/RaceDistance';
import RaceGroups from "./components/RaceGroups";
import RaceBrand from "./components/RaceBrand";

const Application: React.FC<{}> = () => (
  <div id="container">
    <RaceBrand/>
    <RaceDistance/>
    <RaceGroups/>
    <LiveUpdates/>
  </div>
)

render(<Application/>, document.getElementById('root'));
