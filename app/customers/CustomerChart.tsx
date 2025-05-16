"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", IND: 400, COM: 300, RES: 100 },
  { month: "Feb", IND: 420, COM: 320, RES: 120 },
  { month: "Mar", IND: 390, COM: 310, RES: 140 },
  { month: "Apr", IND: 450, COM: 330, RES: 130 },
  { month: "May", IND: 430, COM: 350, RES: 150 },
  { month: "Jun", IND: 470, COM: 340, RES: 160 },
  { month: "Jul", IND: 460, COM: 370, RES: 170 },
  { month: "Aug", IND: 500, COM: 360, RES: 180 },
  { month: "Sep", IND: 480, COM: 390, RES: 190 },
  { month: "Oct", IND: 520, COM: 380, RES: 200 },
  { month: "Nov", IND: 510, COM: 400, RES: 220 },
  { month: "Dec", IND: 530, COM: 420, RES: 230 },
];
const CustomerChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
      >
        <CartesianGrid
          strokeDasharray="1 0"
          stroke="var(--grey-100)"
          vertical={false}
          horizontal={true}
        />

        {/* <Tooltip content={<CustomTooltip />} cursor={false} /> */}

        <Area
          type="monotone"
          dataKey="COM"
          stackId="1"
          strokeWidth={2}
          stroke="var(--green)"
          fill="none"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomerChart;

// const CustomTooltip = ({ active, payload }: any) => {
//   if (active && payload && payload.length) {
//     const data = payload[0].payload;

//     return (
//       <div className="custom-tooltip">
//         <div className="flex items-center gap-[8px]">
//           <span className="text-pry-600 text-[20px]">•</span>{" "}
//           <p className="text-[14px] font-medium text-grey-800">
//             Industrial - {data.IND.toLocaleString()}Mkt
//           </p>
//         </div>
//         <div className="flex items-center gap-[8px]">
//           <span className="text-pry-400 text-[20px]">•</span>{" "}
//           <p className="text-[14px] font-medium text-grey-800">
//             Commercial - {data.COM.toLocaleString()}Mkt
//           </p>
//         </div>
//         <div className="flex items-center gap-[8px]">
//           <span className="text-pry-800 text-[20px]">•</span>{" "}
//           <p className="text-[14px] font-medium text-grey-800">
//             Residential - {data.RES.toLocaleString()}Mkt
//           </p>
//         </div>

//         <div className="mt-[2px]">
//           <p className="text-[12px] text-grey-700">
//             {getMonthName(data.month)}, 2024
//           </p>
//         </div>
//       </div>
//     );
//   }
//   return null;
// };
