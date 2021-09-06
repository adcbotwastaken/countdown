import './App.css';
import CountdownCard from './components/CountdownCard';
import Clock from './components/Clock'
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  boxStyle: {
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%'
  }
})




function App() {
  //ISO Date with year should be YYYY-MM-DDTHH:MM:SSZ):
  // for later: https://www.w3schools.com/js/js_date_formats.asp
  const date1 = {
    "name": "Not Friends",
    "startDate": '01 Sep 2021 00:00:00 EST',
    "endDate": '2021-09-03T18:00:00.000+09:00'
  };

  const date2 = {
    "name" : "Hula Hoop",
    "startDate": '01 Sep 2021 00:00:00 EST',
    "endDate": '2021-09-15T18:00:00.000+09:00'
  };

  const date3 = {
    "name" : "testing",
    "startDate" : "2021-09-03T15:39:00",
    "endDate": "2021-09-03T19:59:00",
  }

  const date4 = {
    "name" : "test2",
    "startDate" : "2021-09-03T18:00:00",
    "endDate": "2021-09-03T18:30:00",
  }

  const date5 = {
    "name": "End of Year",
    "startDate": "2021-01-01T00:00:00",
    "endDate": "2022-01-01T00:00:00",
  }


  const datesArray = [date1, date2, date3, date4, date5];


  const classes = useStyles();
  return (
    <Box className={classes.boxStyle}>
      <Grid
        container
        spacing={2}
        direction='column'
        justifyContent='flex-start'
        alignItems='stretch'
      >
        <Grid item xs={12} spacing={3}>
          <Clock />
        </Grid>
      <Grid container spacing={3}>
        {datesArray.map(dateObj => {
          return(
            <Grid item xs={12}>
              <CountdownCard date={dateObj}/>
            </Grid>
          );
        })}
      </Grid>







        {/* <Grid container>
          <Grid item xs={12}>
            <CountdownCard date={date1} />
          </Grid>
          <Grid item xs={12}>
            <CountdownCard date={date2} />
          </Grid>
          <Grid item xs={12}>
            <CountdownCard date={date3} />
          </Grid>
          <Grid item xs={12}>
            <CountdownCard date={date4} />
          </Grid>

        </Grid> */}
      </Grid>

    </Box>
  );
}

export default App;
