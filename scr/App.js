import React from "react";
import { useSelector } from "react-redux";
import CitySelection from "./Component/CitySelection";
import Icon from "./Component/Icon";
import WeatherView from "./Component/WeatherView";
import { CityName } from "./redux/Weather/Slice";

function App() {
      Const City = useSelector(CityName);
      return (
         <div
            ClassName = 'd-flex flex-column min-vh-100 p-5'
            style= {{ backgroundColour: "black" }}
          >
            <Icon align='left' />
              {city ? <WeatherView city={city} /> : <CitySelection/>}
              <Icon align='right' />
                </div>
              );
}
export default App;
