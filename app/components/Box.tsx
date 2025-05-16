import Link from "next/link";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { HiArrowTrendingUp } from "react-icons/hi2";

const Box = ({
  name,
  link,
  value,
  percentUp,
  percent,
}: {
  name: string;
  link: string;
  value: string;
  percentUp: boolean;
  percent: number;
}) => {
  return (
    <div className="col-span-1 row-span-1 h-grid bg-sec p-3 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <p className="font-medium">{name}</p>
        <Link href={link}>
          <LuArrowUpRight className="size-[20px]" />
        </Link>
      </div>

      <div className="w-full flex justify-between items-end">
        <p className="text-[30px] font-bold text-green leading-none">{value}</p>

        <div className="">
          <div
            className={`${
              percentUp ? "text-[#05AA0D]" : "text-[#FF1A1A]"
            } flex items-center gap-[4px] justify-end`}
          >
            <HiArrowTrendingUp className={percentUp ? "" : "rotate-[60deg]"} />
            <p className="font-bold text-[12px]">{percent}%</p>
          </div>
          <p className="text-[14px] opacity-80">From last week</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
