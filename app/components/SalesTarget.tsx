import { Button } from "@/components/ui/button";
import React from "react";

const SalesTarget = () => {
  return (
    <div className="col-span-2 row-span-1 h-grid bg-sec p-3 flex flex-col">
      <div className="flex items-center justify-between">
        <p className="font-medium">Sales Target</p>
        <Button>Update target</Button>
      </div>

      <div className="mt-[15px] space-y-[10px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="opacity-80 text-[14px]">In Progress</p>
            <p className="font-medium">₦231,032,444</p>
          </div>
          <div>
            <p className="opacity-80 text-[14px]">Sales Target</p>
            <p className="font-medium">₦900,000,000</p>
          </div>
        </div>

        <div className="relative w-full h-[20px] rounded-full bg-neutral overflow-hidden">
          <div className="absolute h-full bg-green w-[30%]"></div>
        </div>
      </div>
    </div>
  );
};

export default SalesTarget;
