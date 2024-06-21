import { Box } from "@mui/material";
import VisitorChart from "./Charts/VisitorChart";
import OrderChart from "./Charts/OrderChart";
import TopProduct from "./TopProduct/TopProduct";
import Navbar from "./Navbar";
import IncomeChart from "./Charts/IncomeChart";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";
import TopDestinations from "./TopDestination";

interface AnimatedBoxProps {
  children: ReactNode;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const DashboardSeller = () => {
  return (
    <Box
      marginLeft={31}
      paddingX={4}
      bgcolor={"rgb(235, 240, 245)"}
      paddingBottom={4}
    >
      <Box sx={{ width: "100%" }}>
        <Navbar />
      </Box>
      <AnimatedBox>
        <Box marginTop={12}>
          <IncomeChart />
        </Box>
        <Box
          marginTop={5}
          gap={2}
          display={"flex"}
          justifyContent={"space-around"}
        >
          <VisitorChart />
          <OrderChart />
        </Box>
        <Box
          marginTop={5}
          gap={4}
          display={"flex"}
          justifyContent={"space-between"}
          height={"10%"}
        >
          <TopProduct />
          <TopDestinations />
        </Box>
      </AnimatedBox>
    </Box>
  );
};

export default DashboardSeller;
