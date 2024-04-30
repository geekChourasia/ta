import * as React from "react";
import { Paper, Box, Typography } from "@mui/material";

import Link from "@mui/material/Link";


import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import PosterCard from "./PosterCard"



export default function BasicTable() {
  return (
    <Paper elevation={3} sx={{pl:2, pr:2, pb:2.5,pt:1}}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ m: 2,pt:1.5 }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6">Candidate Status</Typography>
          <Box sx={{ ml: 2 }}>
            <Link href="#" variant="h6">
              View All
            </Link>
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <Paper
            component="form"
            sx={{
              p: "1px 2px",
              display: "flex",
              alignItems: "center",
              width: 300,
              mr: 2,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          <Paper
            component="form"
            sx={{
              p: "1px 2px",
              display: "flex",
              alignItems: "center",
              width: 120,
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <FilterListIcon color="primary" />
            </IconButton>
            <Typography variant="h5">Filter</Typography>
          </Paper>
        </Box>
      </Box>


      <Box sx={{p:1, display:"flex"}} >
        <PosterCard/>
        <PosterCard/>
        <PosterCard/>
        <PosterCard/>
       
      </Box>


      
    </Paper>
  );
}
