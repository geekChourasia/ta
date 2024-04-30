import * as React from "react";


import { Paper, Box, Typography, Button } from "@mui/material";

export default function DateCalendarValue() {
  return (
    <div>
      <Box sx={{ mt: 3 }}>
        <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
          <Paper sx={{ width: "50px", height: "50px" }}></Paper>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>
              Interview with Designer
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>Created by Stella</Typography>
            <Typography sx={{ fontSize: "8px" }}>10 A.M to 11 A.M</Typography>
          </Box>

          <Button
            sx={{ width: "40px", height: "30px" }}
            variant="contained"
            size="small"
          >
            Detail
          </Button>
        </Box>
      </Box>
    </div>
  );
}
