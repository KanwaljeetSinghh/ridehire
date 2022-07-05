import { Fragment, useState } from "react";
import Header from "./modules/Header";
import FilterBar from "./modules/Filters-Bar";
import DataPopulate from "./modules/Data-Poplate";
import Destination from "./modules/Destination";
import StopPoints from "./modules/StopPoints";
import ResponsiveHeader from "./modules/Responsive-Header";
import MapIcon from './icons/MapIcon';
function App() {
  const [isMap,setMap] = useState(true);
  const [isNav,setNav] = useState(false);
  const [isResNav,setResNav] = useState(false);

  return (
    <Fragment>
      <Header show={!isNav} handler={setNav}></Header>
      <ResponsiveHeader show={!isNav} handler={setNav}></ResponsiveHeader>
      {isNav && <Destination></Destination>}
      {isNav && <StopPoints></StopPoints>}
      <a className='map-icon btn rounded-50 d-align-center d-justify-center '>
          <MapIcon></MapIcon>
          <span className='ml-1'>Map</span>
      </a>
      <FilterBar handler={setMap}></FilterBar>
      <DataPopulate map={isMap}></DataPopulate>
    </Fragment>
  );
}

export default App;

