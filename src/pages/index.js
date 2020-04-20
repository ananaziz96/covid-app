import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import ProTip from "../components/ProTip";
import Link from "../components/Link";
import Copyright from "../components/Copyright";
import { Button } from "@material-ui/core";
import fetch from "isomorphic-unfetch";
import { Line } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";

const Index = (props) => (
  <Container style={{ textAlign: "center" }}>
    <Typography variant="h1" component="h1">
      Hi! Welcome to the <br /> Covid App
    </Typography>
    <div style={{ color: "rgb(255, 99, 132)", paddingBottom: 50 }}>
      Built with ❤️ by Anan
    </div>
    <Typography variant="h3" component="h1" gutterBottom>
      Total cases of Covid-19 in Bangladesh 2020 📈
    </Typography>

    <Line data={props.chartData} height={500} width={1200} />

    <Grid container spacing={4} style={{ padding: 50 }}>
      <Grid item md={3}>
        <Card style={{ width: 275 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total confirmed
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Last updated {props.dateToday}
            </Typography>
            <Typography variant="h1">
              {props.statToday.Confirmed ? props.statToday.Confirmed : "N/A"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item md={3}>
        <Card style={{ width: 275 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total active
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Last updated {props.dateToday}
            </Typography>
            <Typography variant="h1">
              {props.statToday.Active ? props.statToday.Active : "N/A"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item md={3}>
        <Card style={{ width: 275 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total deaths
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Last updated {props.dateToday}
            </Typography>
            <Typography variant="h1">
              {props.statToday.Deaths ? props.statToday.Deaths : "N/A"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item md={3}>
        <Card style={{ width: 275 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total recovered
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Last updated {props.dateToday}
            </Typography>
            <Typography variant="h1">
              {props.statToday.Recovered ? props.statToday.Recovered : "N/A"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

Index.getInitialProps = async function () {
  //GET covid data
  const urlCovidApi =
    "https://api.covid19api.com/dayone/country/bangladesh/status/confirmed/live";
  let resCovidApi = await fetch(urlCovidApi);
  let data = await resCovidApi.json();
  let xAxis = [];
  let yAxis = [];
  let xAxisTemp = data.map((entry) => entry.Date);
  let yAxisTemp = data.map((entry) => entry.Cases);
  let arrayLength = xAxisTemp.length;
  const moment = require("moment");

  //looping through response array and changing date format
  for (let i = 25; i < arrayLength; i++) {
    xAxis.push(moment(xAxisTemp[i]).format("MMMM Do"));
    yAxis.push(yAxisTemp[i]);
  }

  let chartData = {
    labels: xAxis,
    datasets: [
      {
        label: "Infected",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 1, 132)",
        data: yAxis,
      },
    ],
  };

  //GET covid tweets
  const allStatsUrl = "https://api.covid19api.com/live/country/bangladesh";
  let resAllStatsApi = await fetch(allStatsUrl);
  let allStats = await resAllStatsApi.json();

  //last item is the lattest available day
  let lastItem = allStats[allStats.length - 1];
  let dateToday = moment(lastItem.Date).format("MMMM Do YYYY");

  return {
    data: data.map((entry) => entry),
    chartData: chartData,
    statToday: lastItem,
    dateToday: dateToday,
  };
};

export default Index;
