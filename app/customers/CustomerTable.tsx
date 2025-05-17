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
import AddNewCustomer from "./components/AddNewCustomer";

const data = [
  {
    _id: "01920",
    customerName: "James Odedele",
    address: "12 Adekunle Street, Yaba",
    state: "Lagos",
    spent: 1000000,
    contact: "+2347067668093",
  },
  {
    _id: "01921",
    customerName: "Chinaza Nwosu",
    address: "22 Works Layout, Owerri",
    state: "Imo",
    spent: 420000,
    contact: "+2348031234567",
  },
  {
    _id: "01922",
    customerName: "Aisha Lawal",
    address: "8 Challenge Junction, Ibadan",
    state: "Oyo",
    spent: 310000,
    contact: "+2348023456789",
  },
  {
    _id: "01923",
    customerName: "Samuel Ajayi",
    address: "17 Kaduna Road, Barnawa",
    state: "Kaduna",
    spent: 860000,
    contact: "+2347012345678",
  },
  {
    _id: "01924",
    customerName: "Grace Obi",
    address: "3 Okpanam Road, Asaba",
    state: "Delta",
    spent: 540000,
    contact: "+2349098765432",
  },
  {
    _id: "01925",
    customerName: "Ibrahim Musa",
    address: "10 Sardauna Crescent, Kano",
    state: "Kano",
    spent: 250000,
    contact: "+2348145678910",
  },
  {
    _id: "01926",
    customerName: "Adaeze Okonkwo",
    address: "33 Zik Avenue, Awka",
    state: "Anambra",
    spent: 720000,
    contact: "+2348161122334",
  },
  {
    _id: "01927",
    customerName: "Tunde Bakare",
    address: "5 Ring Road, Ibadan",
    state: "Oyo",
    spent: 980000,
    contact: "+2348172233445",
  },
  {
    _id: "01928",
    customerName: "Mariam Abdullahi",
    address: "18 Offa Road, Ilorin",
    state: "Kwara",
    spent: 300000,
    contact: "+2348133344556",
  },
  {
    _id: "01929",
    customerName: "Emeka Uche",
    address: "21 Abak Road, Uyo",
    state: "Akwa Ibom",
    spent: 460000,
    contact: "+2348184455667",
  },
  {
    _id: "01930",
    customerName: "Fatima Sule",
    address: "4 Bello Street, Minna",
    state: "Niger",
    spent: 610000,
    contact: "+2348125566778",
  },
];

const columns: ColumnDef<(typeof data)[0]>[] = [
  {
    accessorKey: "customerName",
    header: "Customer",
    cell: ({ row }) => (
      <div className="w-[200px]">
        <p>{row.original.customerName}</p>
      </div>
    ),
  },

  {
    accessorKey: "contact",
    header: "Contact",
    cell: ({ row }) => (
      <div>
        <p>{row.original.contact}</p>
      </div>
    ),
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => (
      <div>
        <p>{row.original.address}</p>
      </div>
    ),
  },
  {
    accessorKey: "state",
    header: "State",
    cell: ({ row }) => (
      <div>
        <p>{row.original.state}</p>
      </div>
    ),
  },
  {
    accessorKey: "spent",
    header: "Total Spent",
    cell: ({ row }) => (
      <div>
        <p>₦{row.original.spent.toFixed(2)}</p>
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

const CustomerTable = () => {
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
      <div className="w-full h-full bg-sec p-3 flex flex-col gap-[12px]">
        <div className="flex items-center justify-between">
          <div className="relative w-[40%] h-9">
            <LuSearch className="absolute top-1/2 -translate-y-1/2 left-[12px]" />
            <Input
              className="absolute top-0 left-0 w-full h-full pl-[40px]"
              placeholder="Search customers"
            />
          </div>

          <div className="flex gap-[12px]">
            <AddNewCustomer />
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

export default CustomerTable;
