import * as React from "react";


import { Box, Typography, Avatar } from "@mui/material";

export default function DateCalendarValue() {
  return (
    <div>
      <Box sx={{ mt: 3 }}>
        <Box display="flex" justifyContent="" sx={{ mt: 2 }}>
          <Avatar sx={{ width: "50px", height: "50px" }}/>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              ml:2
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>
              Abhi [UI developer]
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>Interview with Abhi</Typography>
            <Typography sx={{ fontSize: "8px" }}>15 min ago</Typography>
          </Box>

        </Box>
      </Box>
    </div>
  );
}
