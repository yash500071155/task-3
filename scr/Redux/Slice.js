import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    loading: true,
    city: "",
    weatherData: {},
  },
  reducers: {
    SET_WEATHER: (state, action) => {
      state.weatherData = action.payload;
      state.loading = false;
    },
    SET_CITY: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const WeatherData = (state) => state.weather.weatherData;
export const Loading = (state) => state.weather.loading;
export const CityName = (state) => state.weather.city;

export const { SET_WEATHER, SET_CITY } = WeatherSlice.actions;

export const FetchWeather = (cityName) => (dispatch) => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a631e386d2fc47702bcfd64f65d9fcb3&units=metric`
    )
    .then((response) => {
      console.log(response.data.weather);
      dispatch(SET_WEATHER(response.data));
    });
};

export default WeatherSlice.reducer;
