import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { Link2 } from "lucide-react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

type RowData = {
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  duedate: string;
  estvalue: string;
};

const defaultData: RowData[] = [
  {
    jobRequest: "Launch social media campaign for product",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "https://aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    duedate: "20-11-2024",
    estvalue: "6,200,000 ₹",
  },
  {
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "https://irfankhan.org",
    assigned: "Tejas Pandey",
    priority: "High",
    duedate: "30-10-2024",
    estvalue: "3,500,000 ₹",
  },
  {
    jobRequest: "Finalize user testing feedback for app",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "https://markjohnson.dev",
    assigned: "Rachel Lee",
    priority: "Medium",
    duedate: "10-12-2024",
    estvalue: "4,750,000 ₹",
  },
  {
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "https://emilygreen.dev",
    assigned: "Tom Wright",
    priority: "Low",
    duedate: "15-01-2025",
    estvalue: "5,900,000 ₹",
  },
  {
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "https://jessicabrown.org",
    assigned: "Kevin Smith",
    priority: "Low",
    duedate: "30-01-2025",
    estvalue: "2,800,000 ₹",
  },
];

const defaultColumns: ColumnDef<RowData>[] = [
  { accessorKey: "jobRequest", header: "Job Request" },
  { accessorKey: "submitted", header: "Submitted" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "submitter", header: "Submitter" },
  { accessorKey: "url", header: "URL" },
  { accessorKey: "assigned", header: "Assigned" },
  { accessorKey: "priority", header: "Priority" },
  { accessorKey: "duedate", header: "Due Date" },
  { accessorKey: "estvalue", header: "Est. Value" },
];

export default function Spreadsheet() {
  const [data] = useState<RowData[]>(defaultData);

  const table = useReactTable({
    data,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const getStatusBadge = (status: string) => {
    const map: Record<string, string> = {
      "In-process": "bg-yellow-100 text-yellow-800",
      "Need to start": "bg-gray-100 text-gray-800",
      "Complete": "bg-green-100 text-green-800",
      "Blocked": "bg-red-100 text-red-800",
    };
    return map[status] || "bg-gray-100 text-gray-800";
  };

  const getPriorityBadge = (priority: string) => {
    const map: Record<string, string> = {
      "High": "text-red-600 font-semibold",
      "Medium": "text-yellow-600",
      "Low": "text-blue-600",
    };
    return map[priority] || "text-gray-600";
  };

  return (
    <div className="bg-white">
      <table className="min-w-full text-sm border-separate border-spacing-0">
        <thead>
          {/* SheetTab Row */}
          <tr>
            <th colSpan={table.getAllLeafColumns().length + 1} className="p-0">
              <div className="grid grid-cols-12 w-full border-b border-gray-200 bg-gray-50 px-4 py-2">
                {/* Left Side */}
                <div className="col-span-7 flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-md text-xs text-gray-700 font-medium">
                  <Link2 className="w-4 h-4 text-[#1A8CFF]" />
                  <span className="text-[#545454]">Q3 Financial Overview</span>
                  <ArrowPathIcon className="w-4 h-4 text-[#FA6736]" />
                </div>

                {/* Right Side */}
                <div className="col-span-5 flex items-center justify-end gap-2 font-medium">
                  <div className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1.5 rounded">
                    ABC
                  </div>
                  <div className="flex items-center gap-1 bg-purple-100 text-purple-800 px-3 py-1.5 rounded">
                    Answer a question
                  </div>
                  <div className="flex items-center gap-1 bg-[#FAC2AF] text-[#695149] px-3 py-1.5 rounded">
                    Extract
                  </div>
                  <div className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded cursor-pointer">
                    +
                  </div>
                </div>
              </div>
            </th>
          </tr>

          {/* Table Headers */}
          <tr className="bg-white">
            <th className="sticky left-0 z-10 bg-white border-r border-dotted border-blue-300 w-10">
              #
            </th>
            {table.getHeaderGroups()[0].headers.map((header) => (
              <th
                key={header.id}
                className="px-4 py-2 border-r border-dotted border-blue-300 text-left bg-white"
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row, idx) => (
            <tr
              key={row.id}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="sticky left-0 z-0 bg-white border-r border-dotted border-blue-300 text-gray-500 text-center w-10">
                {idx + 1}
              </td>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-4 py-2 border-r border-dotted border-blue-300"
                >
                  {cell.column.id === "status" ? (
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(
                        cell.getValue() as string
                      )}`}
                    >
                      {cell.getValue() as string}
                    </span>
                  ) : cell.column.id === "priority" ? (
                    <span
                      className={`text-xs font-medium ${getPriorityBadge(
                        cell.getValue() as string
                      )}`}
                    >
                      {cell.getValue() as string}
                    </span>
                  ) : cell.column.id === "url" ? (
                    <a
                      href={cell.getValue() as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {cell.getValue() as string}
                    </a>
                  ) : (
                    cell.getValue() as string
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
