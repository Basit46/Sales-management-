"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div>
      <h1 className="text-[24px] font-medium">Settings</h1>

      <div className="mt-[20px] p-3 bg-sec">
        <p className="font-medium">Personal Information</p>

        <div className="mt-[20px] grid grid-cols-2 gap-[18px]">
          <div className="w-full">
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" className="w-full" />
          </div>
          <div className="w-full">
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" className="w-full" />
          </div>
          <div className="w-full">
            <Label htmlFor="email">Email</Label>
            <Input type="mail" id="email" className="w-full" />
          </div>
          <div className="w-full">
            <Label htmlFor="role">Role</Label>
            <Select>
              <SelectTrigger id="role" className="w-full">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="unavailable">Out of stock</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="mt-[20px]">Update</Button>
      </div>
    </div>
  );
};

export default Settings;
