"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SalesTarget = () => {
  return (
    <div className="col-span-2 row-span-1 h-grid bg-sec p-3 flex flex-col">
      <div className="flex items-center justify-between">
        <p className="font-medium">Sales Target</p>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Update target</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Update target</DialogTitle>
              <DialogDescription>
                Make changes to your sales target. Click update when you're
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="">
              <Label id="target">Sales Target</Label>
              <Input id="target" type="number" className="w-full" />
            </div>
            <DialogFooter>
              <Button type="submit">Update</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
