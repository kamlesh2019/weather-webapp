import { Box, makeStyles } from '@material-ui/core';
import logo from '../images/bg.jpg';
import Form from './form';

const useStyles = makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        width: '65%'

    },

    leftContainer: {
        backgroundImage: `url(${logo})`,
        height: '80%',
        width: '30%',
        backgroundSize: 'cover',
        borderRadius: '20px 0 0 20px'
        

    },

    rightContainer: {
        background: 'orange',
        height: '80%',
        width: '60%'
    }
})


const Weather = () => {
    const Classes = useStyles();
    return (
        <Box className={Classes.component}>
            <Box className={Classes.leftContainer}></Box>
            <Box className={Classes.rightContainer}>
                <Form/>
            </Box>


        </Box>
    )
}

export default Weather;
