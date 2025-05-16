"use client";

import React, { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    driverName: "Ahmed Bello",
    totalDeliveries: 120,
  },
  {
    driverName: "Chinedu Okafor",
    totalDeliveries: 95,
  },
  {
    driverName: "Fatima Yusuf",
    totalDeliveries: 110,
  },
  {
    driverName: "Emmanuel Johnson",
    totalDeliveries: 88,
  },
  {
    driverName: "Blessing Danjuma",
    totalDeliveries: 102,
  },
];

const DriversChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data?.slice(-12)}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid
          vertical={false}
          strokeDasharray="1 0"
          stroke="var(--grey-100)"
        />
        <XAxis
          dataKey="driverName"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "var(--content)", fontSize: 12 }}
          interval="preserveStartEnd"
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "var(--content)", fontSize: 12 }}
          domain={["auto", "auto"]}
          tickCount={5}
          width={40}
          //   tickFormatter={formatTickNumber}
          interval={0}
        />
        {/* <Tooltip
              content={<CustomTooltip selectedProduct={selectedProduct} />}
              cursor={false}
            /> */}
        <Bar
          dataKey="totalDeliveries"
          fill="var(--green)"
          // radius={[8, 8, 0, 0]}
          barSize={20}
          minPointSize={2}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DriversChart;

// const CustomTooltip = ({ active, payload, selectedProduct }: any) => {
//   if (active && payload && payload.length) {
//     const data = payload[0].payload;
//     return (
//       <div className="bg-white p-2 border border-grey-200 shadow-sm rounded">
//         <div className="flex items-center gap-[8px]">
//           <span className="text-pry-400 text-[20px]">•</span>{" "}
//           <p className="text-[14px] font-medium text-grey-800">
//             {selectedProduct} - {data.totalProduction.toLocaleString()}Mkt
//           </p>
//         </div>

//         <div className="mt-[2px]">
//           <p className="text-[12px] text-grey-700">
//             {getMonthName(data.month)}, {data.year}
//           </p>
//         </div>
//       </div>
//     );
//   }
//   return null;
// };
