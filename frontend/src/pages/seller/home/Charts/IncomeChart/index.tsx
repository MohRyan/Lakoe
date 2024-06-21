import React, { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { Box } from "@mui/material";

echarts.use([TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer, UniversalTransition]);

const IncomeChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      color: ["#37A2FF"],
      title: {
        text: "Income",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      legend: {
        data: ["Income"],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          label: {
            show: true,
            position: "top",
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#074173",
              },
              {
                offset: 1,
                color: "red",
              },
            ]),
          },
          emphasis: {
            focus: "series",
          },
          data: [220, 302, 400, 450, 300, 500, 700, 750, 900, 400, 200, 100],
        },
      ],
    };

    option && myChart.setOption(option);

    // Cleanup function to dispose of the chart instance
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <Box
      padding={2}
      bgcolor={"white"}
      sx={{
        width: "145vh",
        height: "40vh",
        border: "1px solid black",
        boxShadow: "2px 2px gray",
        borderRadius: "10px",
      }}
    >
      <div ref={chartRef} style={{ width: "100%", height: "100%" }} />
    </Box>
  );
};

export default IncomeChart;
