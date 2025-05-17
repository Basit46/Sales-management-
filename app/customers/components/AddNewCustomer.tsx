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

const AddNewCustomer = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add new customer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add new customer</DialogTitle>
          <DialogDescription>
            Add new customer. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-[16px]">
          <div>
            <Label htmlFor="name">Customer name</Label>
            <Input
              id="name"
              className="w-full"
              placeholder="Enter customer name"
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
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              className="w-full"
              placeholder="Enter address"
            />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Select>
              <SelectTrigger id="state" className="w-full">
                <SelectValue placeholder="Select state name" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {customers.map((item, i) => (
                    <SelectItem key={i} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewCustomer;
