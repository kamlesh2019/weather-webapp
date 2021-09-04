import axios from 'axios';


const URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = `48bdfb29cabcefca34272963b4ddd34f`;


export const getData = async(city, country) => {
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}