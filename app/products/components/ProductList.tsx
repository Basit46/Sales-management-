"use client";

import * as React from "react";
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
import { LuPencil, LuTrash2 } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import { SelectStatus } from "./SelectStatus";
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

const data = [
  {
    _id: "01920",
    name: "Sneakers",
    price: 100,
    sales: 600,
    quantity: 1000,
    status: "available",
  },
  {
    _id: "01320",
    name: "Running Shoes",
    price: 120,
    sales: 450,
    quantity: 800,
    status: "available",
  },
  {
    _id: "03920",
    name: "High Tops",
    price: 90,
    sales: 300,
    quantity: 500,
    status: "unavailable",
  },
  {
    _id: "010920",
    name: "Loafers",
    price: 110,
    sales: 150,
    quantity: 200,
    status: "available",
  },
  {
    _id: "05420",
    name: "Slides",
    price: 40,
    sales: 700,
    quantity: 1500,
    status: "available",
  },
  {
    _id: "07210",
    name: "Boots",
    price: 150,
    sales: 100,
    quantity: 500,
    status: "unavailable",
  },
  {
    _id: "08211",
    name: "Sandals",
    price: 60,
    sales: 350,
    quantity: 700,
    status: "available",
  },
  {
    _id: "09222",
    name: "Slip-Ons",
    price: 80,
    sales: 220,
    quantity: 600,
    status: "unavailable",
  },
];

const columns: ColumnDef<(typeof data)[0]>[] = [
  {
    accessorKey: "_id",
    header: "Product",
    cell: ({ row }) => (
      <div className="w-[200px]">
        <p className="text-[12px] text-green">{row.original._id}</p>
        <p>{row.original.name}</p>
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
    accessorKey: "sales",
    header: "Sales",
    cell: ({ row }) => (
      <div>
        <p>{row.original.sales}</p>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div>
        <Badge
          variant={
            row.original.status == "available" ? "default" : "destructive"
          }
        >
          {row.original.status == "available" ? "Available" : "Out of stock"}
        </Badge>
      </div>
    ),
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
        <Dialog>
          <DialogTrigger asChild>
            <button>
              <LuPencil />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Edit product</DialogTitle>
              <DialogDescription>
                Make changes to your {row.original.name}. Click save when you're
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-[16px]">
              <div>
                <Label id="name">Product name</Label>
                <Input
                  id="name"
                  className="w-full"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <Label id="price">Price (₦)</Label>
                <Input
                  id="price"
                  type="number"
                  className="w-full"
                  placeholder="Enter price"
                />
              </div>

              <div>
                <Label id="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  className="w-full"
                  placeholder="Enter quantity available"
                />
              </div>
              <div>
                <Label id="sold">Quantity sold</Label>
                <Input
                  id="sold"
                  type="number"
                  className="w-full"
                  placeholder="Enter quantity sold"
                />
              </div>
              <div>
                <Label id="sold">Status</Label>
                <SelectStatus className="w-full" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    ),
  },
];

export default function ProductList() {
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
    <div className="w-full h-full bg-sec p-3 flex flex-col gap-[12px]">
      <div className="flex items-center justify-between">
        <p className="font-medium">Products</p>

        <div className="flex gap-[12px]">
          <SelectStatus />
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
  );
}
