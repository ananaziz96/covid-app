import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../components/ProTip";
import Link from "../components/Link";
import Copyright from "../components/Copyright";
import { Button } from "@material-ui/core";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <br />
        <Button
          variant="contained"
          color="default"
          component={Link}
          naked
          href="/dashboard"
        >
          Dashboard
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
