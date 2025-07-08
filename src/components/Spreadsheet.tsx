import  {
  useReactTable,
  getCoreRowModel,
  flexRender,

} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';

type RowData = {
  [key: string]: string;
};

const defaultData: RowData[] = [
  {
    A: "Launch social media campaign",
    B: "05-12-2024",
    C: "In-process",
    D: "Aisha Patel",
    E: "https://aishapatel.com",
  },
  {
    A: "Update press kit",
    B: "10-11-2024",
    C: "Need to start",
    D: "Irfan Khan",
    E: "https://irfankhan.org",
  },
  // Add more rows as needed
];



const defaultColumns: ColumnDef<RowData>[] = [
  { accessorKey: 'A', header: 'A' },
  { accessorKey: 'B', header: 'B' },
  { accessorKey: 'C', header: 'C' },
  { accessorKey: 'D', header: 'D' },
  { accessorKey: 'E', header: 'E' },
];

export default function Spreadsheet() {
  const [data, setData] = useState<RowData[]>(defaultData);

  const table = useReactTable({
    data,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleChange = (rowIndex: number, columnId: string, value: string) => {
    const updated = [...data];
    updated[rowIndex][columnId] = value;
    setData(updated);
  };

  return (
    <div className="overflow-auto p-4 bg-white">
      <table className="border border-gray-300 w-full">
       <thead className="bg-gray-100 text-sm text-gray-700">
  {table.getHeaderGroups().map((headerGroup) => (
    <tr key={headerGroup.id}>
      {headerGroup.headers.map((header) => (
        <th
          key={header.id}
          className="border border-gray-200 px-4 py-2 text-left font-medium bg-gray-50"
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
        </th>
      ))}
    </tr>
  ))}
</thead>
<tbody>
  {table.getRowModel().rows.map((row) => (
    <tr key={row.id} className="hover:bg-gray-50">
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id} className="border border-gray-200 px-4 py-2 text-sm">
          <input
            value={cell.getValue() as string}
            onChange={(e) =>
              handleChange(row.index, cell.column.id, e.target.value)
            }
            className="w-full outline-none bg-transparent"
          />
        </td>
      ))}
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}
