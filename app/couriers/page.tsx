import Image from "next/image";
import React from "react";
import { LuTruck, LuUsers } from "react-icons/lu";
import DriversChart from "./DriversChart";
import CouriersTable from "./CouriersTable";

const page = () => {
  return (
    <div>
      <h1 className="text-[24px] font-medium">Couriers</h1>

      <div className="mt-[20px] flex gap-[12px] h-[267px]">
        <div className="relative h-full w-full p-3 bg-sec flex flex-col justify-between overflow-hidden">
          <div className="relative z-[2] flex items-center gap-[8px]">
            <div className="size-[32px] rounded-full bg-green grid place-items-center">
              <LuTruck className="sixe-[20px] text-white" />
            </div>
            <p className="font-medium">Deliveries</p>
          </div>

          <div className="relative z-[2]">
            <h1 className="text-[40px] font-medium leading-[1.1] text-green">
              1,003
            </h1>
            <p className="text-[14px]">+5% vs last week</p>
          </div>

          <div className="absolute right-[-50px] top-[-30px]">
            <Image src="/truck2.png" width={571} height={374} alt="truck" />
          </div>
        </div>

        <div className="h-full w-full p-3 bg-sec flex flex-col gap-[20px]">
          <div className="relative z-[2] flex items-center gap-[8px]">
            <div className="size-[32px] rounded-full bg-green grid place-items-center">
              <LuUsers className="sixe-[20px] text-white" />
            </div>
            <p className="font-medium">Top Drivers</p>
          </div>

          <div className="flex-1">
            <DriversChart />
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <CouriersTable />
      </div>
    </div>
  );
};

export default page;
