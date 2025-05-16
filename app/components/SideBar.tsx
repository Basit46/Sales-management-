"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  LuClipboard,
  LuHouse,
  LuMessageCircleQuestion,
  LuSettings,
  LuTruck,
  LuUsers,
  LuWarehouse,
} from "react-icons/lu";

const SideBar = () => {
  return (
    <div className="w-[15%] sticky top-0 bg-sec h-screen px-[20px] pt-[20px] flex flex-col">
      <div className="pl-[10px] flex items-center font-medium gap-[8px]">
        <Image className="" src="/logo.png" width={30} height={30} alt="logo" />
        <p>Asọ̀jà</p>
      </div>

      <div className="flex-1 mt-[50px] pb-[30px] flex flex-col justify-between">
        <div className="space-y-[8px]">
          <Item icon={<LuHouse />} name="Dashboard" path="/" />
          <Item icon={<LuWarehouse />} name="Products (10)" path="/products" />
          <Item icon={<LuClipboard />} name="Orders" path="/orders" />
          <Item icon={<LuUsers />} name="Customers" path="/customers" />
          <Item icon={<LuTruck />} name="Couriers" path="/couriers" />
        </div>

        <div className="mt-[50px] space-y-[8px]">
          <Item icon={<LuSettings />} name="Settings" path="/settings" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

const Item = ({
  icon,
  name,
  path,
}: {
  icon: React.ReactNode;
  name: string;
  path: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname == path;
  return (
    <Link
      href={path}
      className={`${
        isActive ? "bg-pry" : ""
      } px-[10px] w-full h-[40px] flex items-center gap-[8px] hover:bg-pry duration-200 [&>svg]:text-[18px]`}
    >
      {icon}
      <p className="leading-none">{name}</p>
    </Link>
  );
};
