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
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const data = [
  {
    _id: "01920",
    name: "Sneakers",
    price: 100,
    sales: 600,
    quantity: 1000,
  },
  {
    _id: "01320",
    name: "Sneakers",
    price: 100,
    sales: 600,
    quantity: 1000,
  },
  {
    _id: "03920",
    name: "Sneakers",
    price: 100,
    sales: 600,
    quantity: 1000,
  },
  {
    _id: "010920",
    name: "Sneakers",
    price: 100,
    sales: 600,
    quantity: 1000,
  },
];

const columns: ColumnDef<(typeof data)[0]>[] = [
  {
    accessorKey: "_id",
    header: "Product",
    cell: ({ row }) => (
      <div>
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
    <div className="w-full col-span-2 row-span-2 h-[calc(var(--grid-height)*2+20px)] bg-sec p-3 flex flex-col gap-[12px]">
      <div className="flex items-center justify-between">
        <p className="font-medium">Products</p>
        <Link
          href="/products"
          className="flex items-center gap-[4px] hover:text-green duration-200"
        >
          <p>Show all</p>
          <LuArrowUpRight className="size-[20px]" />
        </Link>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="">
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
}
