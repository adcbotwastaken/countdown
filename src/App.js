import './App.css';
import CountdownCard from './components/CountdownCard';
import Clock from './components/Clock'
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import countdownDates from './data/countdownDates.js';


const useStyles = makeStyles({
  boxStyle: {
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%'
  }
})

const oneDayInSec = 86400;

function App() {
  //ISO Date with year should be YYYY-MM-DDTHH:MM:SSZ):
  // for later: https://www.w3schools.com/js/js_date_formats.asp

  const classes = useStyles();
  return (
    <Box className={classes.boxStyle}>
      <Grid
        container
        spacing={4}
        direction='column'
        justifyContent='flex-start'
        alignItems='stretch'
      >
        <Grid item xs={12} spacing={4}>
          <Clock />
        </Grid>
        <Grid item xs={12} spacing={4}>
          <Grid container spacing={4}>
            {countdownDates.map(dateObj => {
              
              if(Date.parse(dateObj.endDate) > Date.now() + oneDayInSec){
                return (
                  <Grid item xs={12} spacing={4}>
                    <CountdownCard date={dateObj} />
                  </Grid>
                );
              }
            })}
          </Grid>
        </Grid>
      </Grid>

    </Box>
  );
}

export default App;
