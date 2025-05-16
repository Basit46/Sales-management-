import React from "react";
import { HiArrowTrendingUp } from "react-icons/hi2";
import CustomerChart from "./CustomerChart";
import CustomerTable from "./CustomerTable";
import CustomerMap from "./CustomerMap";

const page = () => {
  return (
    <div className="space-y-[20px]">
      <h1 className="text-[24px] font-medium">Customers</h1>

      <div>
        <div className="h-[200px] flex gap-[12px]">
          <div className="h-full w-full bg-sec p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <p className="font-medium">Total Customers</p>
            </div>

            <div className="flex-1 w-full">
              <CustomerChart />
            </div>

            <div className="w-full flex justify-between items-end">
              <p className="text-[30px] font-bold text-green leading-none">
                50
              </p>

              <div className="">
                <div
                  className={`${
                    true ? "text-[#05AA0D]" : "text-[#FF1A1A]"
                  } flex items-center gap-[4px] justify-end`}
                >
                  <HiArrowTrendingUp className={true ? "" : "rotate-[60deg]"} />
                  <p className="font-bold text-[12px]">2%</p>
                </div>
                <p className="text-[14px] opacity-80">From last week</p>
              </div>
            </div>
          </div>

          <div className="h-full w-full bg-sec p-3 flex flex-col gap-y-[12px]">
            <p className="font-medium">Customer Locations</p>

            <div className="flex-1 overflow-auto">
              <div>
                <div className="bg-pry p-[12px] flex ">
                  <p className="w-[70%]">State</p>
                  <p>Total Customers</p>
                </div>
                <div>
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className="even:bg-pry px-[12px] py-[8px] flex "
                    >
                      <p className="w-[70%]">Ogun</p>
                      <p>10</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[20px]">
          <CustomerTable />
        </div>

        <div className="mt-[20px]">
          <CustomerMap />
        </div>
      </div>
    </div>
  );
};

export default page;
