import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { LuBell, LuSearch } from "react-icons/lu";

const Header = () => {
  return (
    <div className="sticky top-0 w-full z-[3] bg-sec flex py-4 px-6 justify-between items-center border-b border-b-pry">
      <div className="relative w-[40%] h-[40px]">
        <LuSearch className="absolute top-1/2 -translate-y-1/2 left-[12px]" />
        <Input
          className="absolute top-0 left-0 w-full h-[40px] pl-[40px]"
          placeholder="Search products"
        />
      </div>

      <div className="flex items-center gap-5">
        <Button className="bg-transparent h-[40px] w-[40px] hover:bg-pry">
          <LuBell className="text-[20px]" />
        </Button>

        <div className="flex items-center gap-[4px]">
          <div className="size-[40px] bg-[aqua] relative overflow-hidden rounded-full">
            <Image
              src="/avatar.jpg"
              fill
              alt="avatar"
              className="object-cover object-center"
            />
          </div>
          <div>
            <p className="text-[14px] font-medium">Victor Osimhen</p>
            <p className="text-[10px]">Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
