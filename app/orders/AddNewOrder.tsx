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
import { SelectStatus } from "../products/components/SelectStatus";
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

const AddNewOrder = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add new order</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add new order</DialogTitle>
          <DialogDescription>
            Add new order to your order list. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-[16px]">
          <div>
            <Label htmlFor="name">Product name</Label>
            <Input
              id="name"
              className="w-full"
              placeholder="Enter product name"
            />
          </div>
          <div className="w-full flex gap-[12px]">
            <div className="w-full">
              <Label htmlFor="price">Price (₦)</Label>
              <Input
                id="price"
                type="number"
                className="w-full"
                placeholder="Enter price"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                className="w-full"
                placeholder="Enter quantity available"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="cname">Customer</Label>
            <Select>
              <SelectTrigger id="cname" className="w-full">
                <SelectValue placeholder="Select customer name" />
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
          <div>
            <Label htmlFor="address">Delivery address</Label>
            <Input
              id="address"
              className="w-full"
              placeholder="Enter delivery address"
            />
          </div>
          <div>
            <Label htmlFor="driverId">Driver ID</Label>
            <Select>
              <SelectTrigger id="driverId" className="w-full">
                <SelectValue placeholder="Select driver ID" />
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

export default AddNewOrder;
