import { Box, Typography } from "@mui/material";
import { TOP_DESTINATIONS } from "./TOP_DESTINATIONS";

interface DistrictCounts {
  [key: string]: number;
}

const TopDestinations = () => {
  const districtCounts = TOP_DESTINATIONS.reduce((acc: DistrictCounts, { recieverDistrict }) => {
    acc[recieverDistrict] = (acc[recieverDistrict] || 0) + 1;
    return acc;
  }, {});

  const sortedDistricts = Object.entries(districtCounts).sort((a, b) => b[1] - a[1]);

  return (
    <Box bgcolor={"white"} padding={2} borderRadius={"10px"} boxShadow={"2px 2px gray"} border={"1px solid black"}  width={"100%"} height={"10%"}>
      <Typography fontWeight={"bold"}>Top Destinations</Typography>
      {sortedDistricts.map(([district, count]) => (
        <Box key={district} border={"1px solid black"} padding={1} marginTop={2} borderRadius={"10px"} display={"flex"} justifyContent={"space-between"}>
          <Typography>{district}</Typography>
          <Typography>{count}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TopDestinations;
