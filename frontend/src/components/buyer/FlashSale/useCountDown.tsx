import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  };

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    timeLeft = {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  }

  return timeLeft;
};

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, targetDate]);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Days
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {timeLeft.days}
          </Typography>
        </Grid>
        <Grid item></Grid>
        <Grid item>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Hours
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {timeLeft.hours}
          </Typography>
        </Grid>
        <Grid item></Grid>
        <Grid item>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Minutes
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {timeLeft.minutes}
          </Typography>
        </Grid>
        <Grid item></Grid>
        <Grid item>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Seconds
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {timeLeft.seconds}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CountdownTimer;
