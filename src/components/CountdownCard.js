import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    CardContent,
    Typography,
    LinearProgress
} from '@material-ui/core';



const useStyles = makeStyles({
    cardStyle: {
        overflow: 'auto',
        borderRadius: 4,
    },
    typography: {
        fontSize : 24
    }
});


function CountdownCard(props) {
    const classes = useStyles();
    // strings of the name, and start and end dates in (hopefully) correct formats
    const name = props.date.name;
    const startDateStr = props.date.startDate;
    const endDateStr = props.date.endDate;

    // parsing the prop strings into dates/milliseconds
    const startDate = Date.parse(startDateStr);
    const endDate = Date.parse(endDateStr);
    const endDateObj = new Date(endDate);
    const totalTime = endDate - startDate;


    // barProgress should be a percentage as a number(50 = 50%, 24.5 = 24.5%)
    const [barProgress, setBarProgress] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [barColour, setBarColour] = useState('primary');

    // updates the countdown every half second.
    useEffect(() => {
        const interval = setInterval(() => {
            // check if the date has already passed and fill out the progress bar else update normally
            if(calculateProgress(startDate, totalTime) >= 100){
                setBarProgress(100);
                setTimeLeft("Countdown Finished!");
                setBarColour('secondary');
            }else{
                setBarProgress(calculateProgress(startDate, totalTime));
                setTimeLeft(getTimeLeftStr(endDateObj));
            }

            //should help with performance https://devtrium.com/posts/set-interval-react
            return () => clearInterval(interval);
        }, 1000);
    },[]);


    // ty: https://stackoverflow.com/a/6040556 for formatting double digit month/date
    const dateFormatted = ("0" + endDateObj.getDate()).slice(-2);
    const monthFormatted = ("0" + (endDateObj.getMonth() + 1)).slice(-2)
    const dateString = `${endDateObj.getFullYear()}.${monthFormatted}.${dateFormatted}`

    // building the strings for the card
    const cardNameText = `${name}`;
    const cardDateText = `${dateString}`;

    return(
        <Card className={classes.cardStyle}>
            <CardContent>
            <Typography className={classes.typography}>{cardNameText} on {cardDateText}</Typography>
            <Typography className={classes.typography}>{timeLeft}</Typography>
            <LinearProgress variant="determinate" value={barProgress} color={barColour}/>
            </CardContent>
        </Card>
    );


    
}




// returns the progress of the countdown
function calculateProgress(startDate, totalTime) {
    //console.log("test");
    return ((Date.now() - startDate) / totalTime) * 100;
}


// return string of how many days, hours, min, sec, left.
function getTimeLeftStr(endDateObj) {
    const timeLeft = endDateObj - Date.now();

    const msInDay = 1000 * 60 * 60 * 24;
    const msInHour = 1000*60*60;
    const msInMin = 1000*60;
    const msInSecond = 1000;

    const daysLeft = Math.floor(timeLeft / msInDay); // 1000ms -> 60 sec -> 60 min -> 24 hrs in a day
    const daysLeftRemainder = timeLeft % msInDay;

    const hoursLeft = Math.floor(daysLeftRemainder / msInHour);
    const hoursLeftRemainder = daysLeftRemainder % msInHour;

    const minsLeft = Math.floor(hoursLeftRemainder / msInMin);
    const minsLeftRemainder = hoursLeftRemainder % msInMin;

    const secondsLeft = Math.floor(minsLeftRemainder / msInSecond);

    

    return (`${daysLeft} days, ${hoursLeft} hours, ${minsLeft} mins, ${secondsLeft} seconds left`);


    
}


export default CountdownCard;