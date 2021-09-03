import './App.css';
import CountdownCard from './components/CountdownCard';
import Clock from './components/Clock'
import { Grid } from '@material-ui/core';


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



  return (
    <div>
      <Grid>
        <Clock />
        <CountdownCard date={date1} />
        <CountdownCard date={date2} />
        <CountdownCard date={date3} />
        <CountdownCard date={date4} />
      </Grid>

    </div>
  );
}

export default App;
