import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { LuSearch } from "react-icons/lu";
import ProductList from "./components/ProductList";

const Products = () => {
  return (
    <div className="w-full">
      <h1 className="text-[24px] font-medium">Products</h1>

      <div className="mt-[20px]">
        <div className="w-full h-[376px] px-[40px] bg-[#DBFAE6] flex items-center">
          <div className="w-[40%]">
            <h1 className="text-[#1D2939] text-[44px] font-extrabold leading-[1.2]">
              Track and Manage <br /> Your Products
            </h1>
            <p className="mt-[10px] text-[#667085]">
              Manage your product catalog, track inventory levels, and monitor
              sales performance.
            </p>
          </div>

          <Image
            className="absolute right-0"
            src="/truck.png"
            width={604}
            height={604}
            alt="truck"
            priority
          />
        </div>

        <div className="relative z-[2] h-[500px] mt-[30px] flex gap-[20px]">
          <div className="w-[25%] bg-sec p-3">
            <p className="text-[20px] font-medium">Items Package</p>

            <div className="mt-[10px] mb-[30px] relative w-full h-[40px]">
              <LuSearch className="absolute top-1/2 -translate-y-1/2 left-[12px]" />
              <Input
                className="absolute top-0 left-0 w-full h-[40px] pl-[40px]"
                placeholder="Search products"
              />
            </div>

            <div className="">
              <div className="w-full h-[76px] border border-[#1F1C27] p-[10px] flex flex-col justify-between">
                <p className="font-medium">Chair</p>
                <div className="w-full flex items-center gap-[4px]">
                  <div className="w-[85%] h-[20px] flex">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className={`${
                          i < 10 ? "bg-green" : "bg-pry"
                        } w-full h-full border-r border-r-sec last:border-r-0`}
                      />
                    ))}
                  </div>
                  <div className="flex-1 text-end text-[12px] font-medium">
                    267
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-sec">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
