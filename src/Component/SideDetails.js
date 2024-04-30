import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Paper, Box, Typography, Link } from "@mui/material";
import UpcomingEvent from "./UpcomingEvent";
import ActivityCard from "./ActivityCard"
export default function DateCalendarValue() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <div>
      <Paper elevation={3} sx={{ mt: 2.7 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateCalendar", "DateCalendar"]}>
            <DateCalendar
              sx={{ width: "100%", height: "300px", p: 0.5 }}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Paper>

      <Box sx={{ mt: 2 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Upcoming</Typography>
          <Link>View All</Link>
        </Box>

        <UpcomingEvent />

        <UpcomingEvent />

        <UpcomingEvent />
      </Box>


      <Box sx={{ mt: 2 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Activity</Typography>
          <Link>View All</Link>
        </Box>

        <ActivityCard />

        <ActivityCard />

        <ActivityCard />
      </Box>
    </div>
  );
}
