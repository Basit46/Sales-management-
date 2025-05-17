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
import { cn } from "@/lib/utils";

export function SelectStatus({
  data,
  className,
}: {
  data?: { value: string; label: string }[];
  className?: string;
}) {
  const defaultData = [
    {
      value: "available",
      label: "Available",
    },
    {
      value: "unavailable",
      label: "Out of stock",
    },
  ];

  const fdata = data ? data : defaultData;
  return (
    <Select>
      <SelectTrigger className={cn("w-[180px]", className)}>
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {fdata.map((item, i) => (
            <SelectItem key={i} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
