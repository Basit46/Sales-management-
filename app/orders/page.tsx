"use client";

import React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LuPencil, LuSearch, LuTrash2 } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SelectStatus } from "../products/components/SelectStatus";
import { Input } from "@/components/ui/input";
import AddNewOrder from "./AddNewOrder";

const data = [
  {
    _id: "01920",
    product: "Sneakers",
    price: 100,
    quantity: 24,
    status: "shipped",
    customerName: "James Odedele",
    driverId: "DRV1001",
    address: "12 Adekunle Street, Yaba",
    state: "Lagos",
  },
  {
    _id: "02345",
    product: "Running Shoes",
    price: 120,
    quantity: 28,
    status: "delivered",
    customerName: "Chinaza Nwosu",
    driverId: "DRV1002",
    address: "45 Ugbowo Road, Benin City",
    state: "Edo",
  },
  {
    _id: "03456",
    product: "Boots",
    price: 150,
    quantity: 22,
    status: "cancelled",
    customerName: "Aisha Lawal",
    driverId: "DRV1003",
    address: "8 Challenge Junction, Ibadan",
    state: "Oyo",
  },
  {
    _id: "04567",
    product: "Loafers",
    price: 90,
    quantity: 26,
    status: "shipped",
    customerName: "Samuel Ajayi",
    driverId: "DRV1004",
    address: "17 Kaduna Road, Barnawa",
    state: "Kaduna",
  },
  {
    _id: "05678",
    product: "Slides",
    price: 70,
    quantity: 21,
    status: "delivered",
    customerName: "Grace Obi",
    driverId: "DRV1005",
    address: "3 Okpanam Road, Asaba",
    state: "Delta",
  },
];

const columns: ColumnDef<(typeof data)[0]>[] = [
  {
    accessorKey: "_id",
    header: "ID",
    cell: ({ row }) => (
      <div className="">
        <p className="text-[12px] text-green">{row.original._id}</p>
      </div>
    ),
  },
  {
    accessorKey: "Product",
    header: "Product",
    cell: ({ row }) => (
      <div className="w-[200px]">
        <p>{row.original.product}</p>
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <div>
        <p>₦{row.original.price.toFixed(2)}</p>
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div>
        <p>{row.original.quantity}</p>
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Invoice",
    cell: ({ row }) => (
      <div>
        <p>
          ₦
          {(Number(row.original.quantity) * Number(row.original.price)).toFixed(
            2
          )}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "customerName",
    header: "Customer",
    cell: ({ row }) => (
      <div>
        <p>{row.original.customerName}</p>
      </div>
    ),
  },
  {
    accessorKey: "address",
    header: "Delivery Address",
    cell: ({ row }) => (
      <div>
        <p>{row.original.address}</p>
      </div>
    ),
  },
  {
    accessorKey: "driverId",
    header: "Driver",
    cell: ({ row }) => (
      <div>
        <p>{row.original.driverId}</p>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <div>
          <Badge
            className="capitalize"
            variant={
              status == "delivered"
                ? "default"
                : status == "shipped"
                ? "warning"
                : "destructive"
            }
          >
            {status}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "_id",
    header: () => (
      <div className="flex items-center justify-center">
        <p>Actions</p>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-[8px] justify-center">
        <button>
          <LuPencil />
        </button>
        <button>
          <LuTrash2 />
        </button>
      </div>
    ),
  },
];

const Orders = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full space-y-[20px]">
      <h1 className="text-[24px] font-medium">Orders</h1>

      <div className="w-full h-full bg-sec p-3 flex flex-col gap-[12px]">
        <div className="flex items-center justify-between">
          <div className="relative w-[40%] h-9">
            <LuSearch className="absolute top-1/2 -translate-y-1/2 left-[12px]" />
            <Input
              className="absolute top-0 left-0 w-full h-full pl-[40px]"
              placeholder="Search orders"
            />
          </div>

          <div className="flex gap-[12px]">
            <SelectStatus />
            <AddNewOrder />
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <Table>
            <TableHeader className="h-[64px]">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
