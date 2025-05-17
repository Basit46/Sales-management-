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
import { SelectStatus } from "../../products/components/SelectStatus";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const customers = [
  {
    value: "Audu",
    label: "Audu",
  },
  { value: "Kania", label: "Kania" },
];

const AddNewDriver = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add new driver</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add new driver</DialogTitle>
          <DialogDescription>
            Add new order to your order list. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-[16px]">
          <div>
            <Label htmlFor="name">Driver name</Label>
            <Input
              id="name"
              className="w-full"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <Label htmlFor="vehicleNo">Vehicle Reg No</Label>
            <Input
              id="vehicleNo"
              className="w-full"
              placeholder="Enter vehicle registration number"
            />
          </div>
          <div>
            <Label htmlFor="contact">Contact (Phone / Email)</Label>
            <Input
              id="contact"
              className="w-full"
              placeholder="Enter contact details"
            />
          </div>
          <div>
            <Label htmlFor="wahala">Wahala details</Label>
            <Input
              id="wahala"
              className="w-full"
              placeholder="Describe driver's wahala"
            />
          </div>

          <div>
            <Label htmlFor="sold">Status</Label>
            <SelectStatus className="w-full" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewDriver;
