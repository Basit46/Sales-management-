"use client";
import React from "react";

const CustomerMap = () => {
  return (
    <div className="col-span-2 row-span-3 h-[calc(var(--grid-height)*3+40px)] bg-sec p-3 flex flex-col gap-[10px]">
      <div className="flex items-center justify-between">
        <p className="font-medium">Customer Locations</p>
        <Link
          href="/customers"
          className="flex items-center gap-[4px] hover:text-green duration-200"
        >
          <p>Show all</p>
          <LuArrowUpRight className="size-[20px]" />
        </Link>
      </div>
      <div className="w-full flex-1">
        <NigeriaMap />
      </div>
    </div>
  );
};

export default CustomerMap;

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

type PriceLevel = "High" | "Medium" | "Low";

const NigeriaMap = () => {
  interface DataType {
    name: string;
    coordinates: [number, number];
    customers: number;
  }

  const priceData: DataType[] = [
    { name: "Lagos", coordinates: [3.6015, 6.5244], customers: 320 }, // Near geographic center
    { name: "Kano", coordinates: [8.5167, 12.1217], customers: 275 }, // Closer to Kano state's center
    { name: "Rivers", coordinates: [6.9112, 4.8671], customers: 198 }, // More central
    { name: "Kaduna", coordinates: [7.4384, 10.5105], customers: 222 }, // Center of state, not city
    { name: "Oyo", coordinates: [3.9321, 7.8408], customers: 160 },
    { name: "Delta", coordinates: [6.2, 5.5], customers: 144 },
    { name: "FCT", coordinates: [7.4913, 9.0579], customers: 188 },
    { name: "Borno", coordinates: [13.151, 11.846], customers: 130 },
    { name: "Enugu", coordinates: [7.5, 6.5], customers: 105 },
    { name: "Anambra", coordinates: [6.9167, 6.3333], customers: 150 },
    { name: "Osun", coordinates: [4.5, 7.5], customers: 95 },
    { name: "Benue", coordinates: [8.741, 7.3369], customers: 112 },
    { name: "Sokoto", coordinates: [5.2333, 13.0667], customers: 89 },
    { name: "Edo", coordinates: [5.6167, 6.5], customers: 148 },
    { name: "Ekiti", coordinates: [5.25, 7.6667], customers: 102 },
    { name: "Bauchi", coordinates: [10.3, 9.8333], customers: 91 },
    { name: "Katsina", coordinates: [7.6, 12.9833], customers: 110 },
    { name: "Niger", coordinates: [6.5667, 9.6], customers: 87 },
    { name: "Ondo", coordinates: [5.05, 7.1], customers: 120 },
    { name: "Plateau", coordinates: [8.9, 9.9], customers: 76 },
  ];

  return (
    <div className="relative w-full h-fit">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 3500,
          center: [9, 9.3],
        }}
      >
        <Geographies geography="/nigeria.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="var(--pry)"
                stroke="var(--grey-200)"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "green", fill: "#252f3f" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {priceData.map(({ coordinates, customers, name }, i) => {
          return (
            <Popover key={i}>
              <PopoverTrigger asChild>
                <Marker coordinates={coordinates}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 60 60"
                    style={{
                      transform: "translate(-50%, -50%)", // center the marker
                      transformOrigin: "center",
                    }}
                  >
                    <circle
                      cx="30"
                      cy="30"
                      r="20"
                      fill="var(--green-200)"
                      opacity={0.8}
                      stroke="#FFFFFF"
                      className="zoomOut"
                      strokeWidth={0.5}
                      style={{ cursor: "pointer" }}
                    />
                    <text
                      x="30"
                      y="34"
                      textAnchor="middle"
                      fill="#fff"
                      fontSize="10"
                      pointerEvents="none"
                    >
                      {customers}
                    </text>
                  </svg>
                </Marker>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-2 z-50 bg-sec text-content rounded-none border-gray-600">
                <p>{name}, Nigeria</p>
                <p className="text-[14px]">
                  Customers: <span className="text-green">{customers}</span>
                </p>
              </PopoverContent>
            </Popover>
          );
        })}
      </ComposableMap>
    </div>
  );
};
