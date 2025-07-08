import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import type {ColumnDef} from '@tanstack/react-table'
import { useState } from "react";
import { Link2 } from "lucide-react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

type RowData = {
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
};

const defaultData: RowData[] = [
  { jobRequest: "Launch social media campaign", submitted: "05-12-2024", status: "In-process", submitter: "Aisha Patel", url: "https://aishapatel.com" },
  { jobRequest: "Update press kit", submitted: "10-11-2024", status: "Need to start", submitter: "Irfan Khan", url: "https://irfankhan.org" },
  { jobRequest: "Finalize user testing feedback", submitted: "15-12-2024", status: "Complete", submitter: "Mark Johnson", url: "https://markjohnson.dev" },
  { jobRequest: "Prepare financial report Q4", submitted: "25-01-2025", status: "Blocked", submitter: "Jessica Brown", url: "https://jessicabrown.org" },
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

  return (
    <div className="bg-white">
      <table className="min-w-full text-sm border-separate border-spacing-0">
        <thead>
          {/* SheetTab Row */}
        <tr>
  <th colSpan={6} className="p-0">
    <div className="grid grid-cols-12 border-b border-gray-200  ml-10">
      {/* Left Side: Q3 Overview */}
      <div className="col-span-5 flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-md text-xs text-gray-700 font-medium">
        <Link2 className="w-4 h-4 text-[#1A8CFF]" />
        <span className="text-[#545454]">Q3 Financial Overview</span>
        <ArrowPathIcon className="w-4 h-4 text-[#FA6736]" />
      </div>

      {/* Right Side: Tags + + Button */}
      <div className="col-span-5 flex items-center justify-end gap-2 font-medium">
        <div className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1.5 rounded">ABC</div>
        <div className="flex items-center gap-1 bg-purple-100 text-purple-800 px-3 py-1.5 rounded">Answer a question</div>
        <div className="flex items-center gap-1 bg-[#FAC2AF] text-[#695149] px-3 py-1.5 rounded">Extract</div>
        <div className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded cursor-pointer">+</div>
      </div>
    </div>
  </th>
</tr>

          {/* Table Headers */}
          <tr className="bg-white">
            <th className="sticky left-0 z-10 bg-white border-r border-dotted border-blue-300 w-10">#</th>
            {table.getHeaderGroups()[0].headers.map(header => (
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
            <tr key={row.id} className="border-t border-gray-200 hover:bg-gray-50">
              {/* Row Number Sticky Column */}
              <td className="sticky left-0 z-0 bg-white border-r border-dotted border-blue-300 text-gray-500 text-center w-10">{idx + 1}</td>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-2 border-r border-dotted border-blue-300">
                  {cell.column.id === "status" ? (
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(cell.getValue() as string)}`}>
                      {cell.getValue() as string}
                    </span>
                  ) : cell.column.id === "url" ? (
                    <a href={cell.getValue() as string} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
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
