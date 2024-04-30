import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import Box from "@mui/material/Box";


import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Paper from "@mui/material/Paper";



export default function RecipeReviewCard() {

  return (
    <Card sx={{ maxWidth: 270, mr:2.7 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Python Developer"
      />
      <Divider />

      <Box display="flex" flexDirection="column" alignItems="center" sx={{mt:2,mb:2}}>
        <Typography sx={{ fontSize: "14px", color: "primary",mb:1 }}>Senior Developer</Typography>

        <Paper sx={{ width: "100px", height: "100px", justifyContent:"center", display:"flex" , alignItems:"center", color:"#d9e4ef"}}>
          <Typography variant="h4" sx={{color:"#0966c2"}}  >258</Typography>
        </Paper>
        <Typography sx={{ fontSize: "14px", color: "primary",mt:1 }}>Total Aspirant</Typography>
      </Box>

      <Divider />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ m: 1 }}
      >
        <Box display="flex" alignItems="center">
          <IconButton aria-label="add to favorites">
            <ArrowUpwardIcon size="small" color="primary" />
          </IconButton>
          <Typography sx={{ fontSize: "12px", color: "primary" }}>
            28% vs
          </Typography>
          <Typography sx={{ fontSize: "12px", ml: 1 }}> Last month</Typography>
        </Box>

        <Typography sx={{ fontSize: "12px" }}> 6 min ago</Typography>
      </Box>
    </Card>
  );
}
