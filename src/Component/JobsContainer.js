import * as React from "react";
import { Paper, Box, Typography } from "@mui/material";

import Link from "@mui/material/Link";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import PosterCard from "./PosterCard";

export default function BasicTable() {
  return (
    <Paper elevation={3} sx={{ pl: 2, pr: 2, pb: 2.5, pt: 1 }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pt: 1.5, mb: 2 }}
      >
        <Box display="flex" alignItems="center">
          <Typography sx={{ fontSize: "20px" }}>Posted Jobs</Typography>
          <Box sx={{ ml: 2 }}>
            <Link href="#" sx={{ fontSize: "20px" }}>
              View All
            </Link>
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <Paper
            component="form"
            sx={{
              p: "1px",
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
            <IconButton type="button" sx={{ p: "6px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          <Paper
            component="form"
            sx={{
              p: "1px 2px",
              display: "flex",
              alignItems: "center",
              width: 100,
            }}
          >
            <IconButton type="button" sx={{ p: "6px" }} aria-label="search">
              <FilterListIcon color="primary" />
            </IconButton>
            <Typography sx={{ fontSize: "20px" }}>Filter</Typography>
          </Paper>
        </Box>
      </Box>

      <Box sx={{ p: 1, display: "flex" }}>
        <PosterCard />
        <PosterCard />
        <PosterCard />
        <PosterCard />
      </Box>
    </Paper>
  );
}
