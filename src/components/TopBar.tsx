import {  Search,Bell, MoreHorizontal,ChevronRight } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-white shadow-sm">
      {/* Left side */}
      
      <div className="flex items-center space-x-3 text-sm text-gray-700">

         <div className="relative w-5 h-4 rounded-sm overflow-hi
         dden border border-gray-400 flex-shrink-0">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[#618666]"></div>
    </div>
        <span className="text-gray-300 font-semibold">Workspace</span>
         <ChevronRight className="w-4 h-4 flex-shrink-0 text-gray-300 font-semibold" />
        <span className="text-gray-300 font-semibold">Folder 2</span>
        <ChevronRight className="w-4 h-4 flex-shrink-0 text-gray-300 font-semibold" />
        <span className="font-semibold text-gray-900">Spreadsheet 3</span>
        <MoreHorizontal className="w-4 h-4 text-gray-500 ml-2 cursor-pointer" />
      </div>

      {/* Right side */}
     <div className="flex items-center gap-4">
  {/* Search bar */}
  <div className="relative">
    <input
      type="text"
      placeholder="Search within sheet"
      className="pl-8 pr-3 py-1.5 text-sm rounded-md bg-gray-100 border border-gray-300 placeholder-gray-400 text-gray-700 w-52"
    />
    <Search className="w-4 h-4 absolute left-2 top-2 text-gray-500" />
  </div>

  {/* Notification bell with green badge */}
  <div className="relative p-2 rounded-md  bg-white">
    <Bell className="w-5 h-5 text-gray-700" />
    <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-semibold shadow">
      2
    </span>
  </div>

  {/* Profile container */}
  <div className="flex items-center bg-white px-2 py-1 ">
    <img
      className="w-7 h-7 rounded-full mr-2"
      src="https://i.pravatar.cc/100?img=45"
      alt="John Doe"
    />
    <div className="text-sm leading-tight">
      <p className="text-gray-800 font-medium">John Doe</p>
      <p className="text-gray-500 text-xs truncate w-24">john.doe@email.com</p>
    </div>
  </div>
</div>

    </div>
  );
}