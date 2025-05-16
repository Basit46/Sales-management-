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

const data = [
  {
    _id: "01920",
    driverName: "James Odedele",
    address: "12 Adekunle Street, Yaba",
    state: "Lagos",
    vehicleRegNo: "LAG-230JK",
    status: "available",
    contact: "+2347067668093",
    wahalaLevel: "Plenty wahala",
  },
  {
    _id: "01921",
    driverName: "Chinaza Nwosu",
    address: "22 Works Layout, Owerri",
    state: "Imo",
    vehicleRegNo: "IMO-543HT",
    status: "unavailable",
    contact: "+2348031234567",
    wahalaLevel: "E no too get",
  },
  {
    _id: "01922",
    driverName: "Aisha Lawal",
    address: "8 Challenge Junction, Ibadan",
    state: "Oyo",
    vehicleRegNo: "OYO-328AB",
    status: "available",
    contact: "+2348023456789",
    wahalaLevel: "Soft guy",
  },
  {
    _id: "01923",
    driverName: "Samuel Ajayi",
    address: "17 Kaduna Road, Barnawa",
    state: "Kaduna",
    vehicleRegNo: "KAD-112CD",
    status: "available",
    contact: "+2347012345678",
    wahalaLevel: "Wahala be like bicycle",
  },
  {
    _id: "01924",
    driverName: "Grace Obi",
    address: "3 Okpanam Road, Asaba",
    state: "Delta",
    vehicleRegNo: "DT-775XZ",
    status: "unavailable",
    contact: "+2349098765432",
    wahalaLevel: "Plenty wahala",
  },
  {
    _id: "01925",
    driverName: "Ibrahim Musa",
    address: "10 Sardauna Crescent, Kano",
    state: "Kano",
    vehicleRegNo: "KN-883TY",
    status: "available",
    contact: "+2348145678910",
    wahalaLevel: "E no too get",
  },
  {
    _id: "01926",
    driverName: "Adaeze Okonkwo",
    address: "33 Zik Avenue, Awka",
    state: "Anambra",
    vehicleRegNo: "AN-992YY",
    status: "available",
    contact: "+2348161122334",
    wahalaLevel: "Soft guy",
  },
  {
    _id: "01927",
    driverName: "Tunde Bakare",
    address: "5 Ring Road, Ibadan",
    state: "Oyo",
    vehicleRegNo: "OYO-445AA",
    status: "unavailable",
    contact: "+2348172233445",
    wahalaLevel: "Wahala be like bicycle",
  },
  {
    _id: "01928",
    driverName: "Mariam Abdullahi",
    address: "18 Offa Road, Ilorin",
    state: "Kwara",
    vehicleRegNo: "KW-223PP",
    status: "available",
    contact: "+2348133344556",
    wahalaLevel: "Soft guy",
  },
  {
    _id: "01929",
    driverName: "Emeka Uche",
    address: "21 Abak Road, Uyo",
    state: "Akwa Ibom",
    vehicleRegNo: "AK-112GG",
    status: "available",
    contact: "+2348184455667",
    wahalaLevel: "Plenty wahala",
  },
  {
    _id: "01930",
    driverName: "Fatima Sule",
    address: "4 Bello Street, Minna",
    state: "Niger",
    vehicleRegNo: "NG-101QR",
    status: "unavailable",
    contact: "+2348125566778",
    wahalaLevel: "E no too get",
  },
];

const columns: ColumnDef<(typeof data)[0]>[] = [
  {
    accessorKey: "_id",
    header: "Driver ID",
    cell: ({ row }) => (
      <div className="">
        <p>{row.original._id}</p>
      </div>
    ),
  },
  {
    accessorKey: "driverName",
    header: "Driver",
    cell: ({ row }) => (
      <div className="w-[200px]">
        <p>{row.original.driverName}</p>
      </div>
    ),
  },

  {
    accessorKey: "vehicleRegNo",
    header: "Vehicle Reg No",
    cell: ({ row }) => (
      <div className="">
        <p>{row.original.vehicleRegNo}</p>
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
    accessorKey: "wahalaLevel",
    header: "Wahala Level",
    cell: ({ row }) => (
      <div>
        <p>{row.original.wahalaLevel}</p>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const variant = status === "available" ? "default" : "destructive";

      return (
        <Badge variant={variant} className="capitalize">
          {status}
        </Badge>
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

const CouriersTable = () => {
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
            <Button>Add new driver</Button>
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

export default CouriersTable;
