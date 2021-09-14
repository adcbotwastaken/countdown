import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'




const useStyles = makeStyles({
    textStyle: {
        textAlign: "center",
        fontSize: 48
    },
    cardStyle: {
        borderRadius: 4,
        padding: '2%'
    }
});





// moment().format("[It's] dddd: HH[:]mm[:]ss");
function Clock() {
    const classes = useStyles();
    // [the value of the current state, the function that can be used to update the state] = useState(default value);
    const [dateString, setDate] = useState(moment().format("YYYY.MM.DD | HH[:]mm[:]ss"));

    // effect is an effect that runs,
    useEffect(() => {
        setInterval(() => {
            // setinterval runs every 1 sec, and call the setDate and update it
            setDate(moment().format("YYYY.MM.DD | HH[:]mm[:]ss"));
        }, 1000);
    });



    return (
        <div>
            <Card className={classes.cardStyle}>
                <Typography className={classes.textStyle} variant="h4">{dateString}</Typography>
            </Card>
        </div>
    );
}




export default Clock;

// oh i think im supposed to use "useEffect" and some hooks, 