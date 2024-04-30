import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

// import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import { Typography, Avatar, Divider, Grid } from "@mui/material";


const card = (
  <React.Fragment>
    <Box sx={{ width: "500px" }}>
      <Grid container>
        <Grid xs={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 60, height: 60 }}
            />

            <Typography variant="h6" component="div">
              Abhishek Chourasia
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Software Developer
            </Typography>
          </Box>

          <Divider />
          <Box sx={{ display: "flex" }}>
            <Button size="small">Learn More</Button>
            <Box>
              <Divider orientation="vertical" />
            </Box>

            <Button size="small">Learn More</Button>
          </Box>
        </Grid>

        <Grid xs={7}>
          <Box>
            <Box sx={{ borderleft: "10px solid red", height: "100%" }}>
              <Divider orientation="vertical" />
              <Typography>hello</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
