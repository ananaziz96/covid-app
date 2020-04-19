import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../components/ProTip";
import Link from "../components/Link";
import Copyright from "../components/Copyright";
import { Button } from "@material-ui/core";
import fetch from "isomorphic-unfetch";
import { Line } from "react-chartjs-2";

const Index = (props) => (
  <Container>
    <Box my={4}>
      <Typography variant="h1" component="h1">
        Hi! Welcome to the Covid App
      </Typography>
      <Link href="https://ananaziz96.github.io/cv/" color="secondary">
        Built with ❤️ by Anan
      </Link>
      <br />
      <br />
      <Typography variant="h3" component="h1" gutterBottom>
        Total cases of Covid-19 in Bangladesh 2020 📈
      </Typography>
    </Box>

    <Line data={props.chartData} height={500} width={1200} />
  </Container>
);

Index.getInitialProps = async function () {
  const url =
    "https://api.covid19api.com/dayone/country/bangladesh/status/confirmed/live";
  const res = await fetch(url);
  const data = await res.json();
  let xAxis = [];
  let xAxisTemp = data.map((entry) => entry.Date);
  let yAxis = data.map((entry) => entry.Cases);
  let arrayLength = xAxisTemp.length;
  const moment = require("moment");

  for (let i = 0; i < arrayLength; i++) {
    xAxis.push(moment(xAxisTemp[i]).format("MMMM Do"));
  }

  let chartData = {
    labels: xAxis,
    datasets: [
      {
        label: "Infected",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: yAxis,
      },
    ],
  };

  return {
    data: data.map((entry) => entry),
    chartData: chartData,
  };
};

export default Index;
