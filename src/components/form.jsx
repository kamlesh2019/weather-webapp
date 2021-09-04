import { Box, Button, TextField, makeStyles } from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import { getData } from '../service/api';
import Information from './Information';

const useStyles = makeStyles({
    component: {
        padding: 10,
        background: '#445a6f'

    },
    input: {
        color: '#fff',
        marginRight: 15
    },
    button :{
        width: 150,
        height:40,
        background: '#e67e22',
        color: '#fff',
        marginTop: 5
    }

        
    
})



const Form = () => {
    const Classes = useStyles();
    const [data, getWeatherData ] = useState();
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [click, handleClick] = useState(false);

    useEffect(() => {
        const getWeather = async() =>{

            city && await getData(city, country).then(Response => {
                getWeatherData(Response.data)
                console.log(Response.data)

            })
        }
        getWeather();
        handleClick(false);

    }, [click]);

    const handleCityChange = (value) => {
        setCity(value);
    }

    const handleCountryChange = (value) => {
        setCountry(value);
    }




    return (
        <>

            <Box className={Classes.component}>
                <TextField
                    inputProps={{className: Classes.input}}
                    onChange={(e) => handleCityChange(e.target.value)}
                    label="City" 
                    className={Classes.input}           
                />
            <TextField 
                    label="Country"
                    onChange={(e) => handleCountryChange(e.target.value)}
                    inputProps={{className: Classes.input}} 
                    className={Classes.input}           
            
            />

            <Button 
                 variant="contained" 
                 className={Classes.button}
                 onClick={() => handleClick(true)}
                 >Get Weather</Button>
            </Box>
            <Information data={data}/>
        </>
    )
}

export default Form;