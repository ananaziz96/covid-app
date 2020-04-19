import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../components/ProTip";
import Link from "../components/Link";
import Copyright from "../components/Copyright";
import { Button } from "@material-ui/core";
// import Link from "next/link";
import fetch from "isomorphic-unfetch";

//import { XMLHttpRequest } from "../../node_modules/xmlhttprequest/lib/XMLHttpRequest";
//const RequestService = require("../../functions/utils.js");
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var requestService = new RequestService();
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// var request = new XMLHttpRequest();
// request.open("GET", url);
// request.send(null);
// alert(request.status);

// let covidapi = httpGet(url);
// console.log(covidapi);

const Index = (props) => (
  <Container>
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Hi! Welcome to the Covid App
      </Typography>
      <Link href="https://ananaziz96.github.io/cv/" color="secondary">
        Built with ❤️ by Anan Aziz
      </Link>
      {/* <ProTip /> */}
      {/* <Copyright /> */}
    </Box>
    <h1>Covid-19 Cases in Bangladesh</h1>
    <table style={{ borderSpacing: "50px 0" }}>
      <tr>
        <th>Date</th>
        <th>Case of infected</th>
      </tr>
      {props.data.map((show) => (
        <tr>
          <td>{show.Date}</td>
          <td>{show.Cases}</td>
        </tr>
      ))}
    </table>
  </Container>
);

Index.getInitialProps = async function () {
  const url =
    "https://api.covid19api.com/dayone/country/bangladesh/status/confirmed/live";
  const res = await fetch(url);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    data: data.map((entry) => entry),
  };
};

export default Index;
