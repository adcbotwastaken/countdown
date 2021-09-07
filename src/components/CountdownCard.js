import React, { useState, useEffect } from 'react';
//import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Typography,
    LinearProgress
} from '@material-ui/core';



// const useStyles = makeStyles({
//     cardStyle: {
//         padding: "15px",
//         borderRadius: 32,
//         minHeight: '15vw',
//         maxHeight: '30vw',
//         overflow: 'auto',

//     }
// });


function CountdownCard(props) {
    // strings of the name, and start and end dates in (hopefully) correct formats
    const name = props.date.name;
    const startDateStr = props.date.startDate;
    const endDateStr = props.date.endDate;




    

    // values are in milliseconds
    const startDate = Date.parse(startDateStr);
    const endDate = Date.parse(endDateStr);
    const endDateObj = new Date(endDate);
    const totalTime = endDate - startDate;


    // barProgress should be a percentage as a number(50 = 50%, 24.5 = 24.5%)
    const [barProgress, setBarProgress] = useState(0);
    //const [eventPassed, setEventPassed] = useState(false);
    //console.log((Date.now() / endDate));


    // updates the countdown every half second.
    useEffect(() => {
        setInterval(() => {
            // check if the date has already passed and fill out the progress bar else update normally
            if(calculateProgress() >= 100){
                setBarProgress(100);
                //setEventPassed(true);
            }else{
                setBarProgress(calculateProgress());
            }
 
        }, 500);
    });



    // returns the progress of the countdown
    function calculateProgress() {
        return ((Date.now() - startDate) / totalTime) * 100;
    }

    // const timeLeftStr = calculateProgress();


    // ty: https://stackoverflow.com/a/6040556 for doing double digit month/date
    const monthFormatted = ("0" + endDateObj.getDate()).slice(-2);
    const dateFormatted = ("0" + (endDateObj.getMonth() + 1)).slice(-2)
    const dateString = `${endDateObj.getFullYear()}.${monthFormatted}.${dateFormatted}`
    const cardText = `${name} on ${dateString}`;

    


    return(
        <Card>
            <Typography>{cardText}</Typography>
            <LinearProgress variant="determinate" value={barProgress} />
        </Card>
    );


    
}


export default CountdownCard;