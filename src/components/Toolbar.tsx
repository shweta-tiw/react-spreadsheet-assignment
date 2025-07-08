import { ChevronDoubleRightIcon } from "@heroicons/react/16/solid";
import {
  EyeOff,
  ArrowDownUp,
  ListFilter,
  ArrowUpToLine,
  ArrowDownToLine,
} from "lucide-react";

export default function Toolbar() {
  return (
    <div className="flex justify-between items-center px-[8px] py-[6px] h-12 border-b border-[#EEEEEE] bg-white text-sm w-full">
      {/* Left Side */}
      <div className="flex items-center gap-2 text-[#545454]">
        {/* Toolbar label */}
        <div className="flex items-center gap-1">
          <span className="text-[14px] text-[#121212]" >Tool bar</span>
          <ChevronDoubleRightIcon className="w-6 h-5 text-[#121212]"  />
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-gray-200 mx-2" />

        {/* Hide fields */}
        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 px-2 py-[5px] rounded">
          <EyeOff className="w-[14px] h-[14px] text-gray-500" />
          <span className="text-[13px] leading-none">Hide fields</span>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 px-2 py-[5px] rounded">
          <ArrowDownUp className="w-[14px] h-[14px] text-gray-500" />
          <span className="text-[13px] leading-none">Sort</span>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 px-2 py-[5px] rounded">
          <ListFilter className="w-[14px] h-[14px] text-gray-500" />
          <span className="text-[13px] leading-none">Filter</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2">
        {/* Import */}
        <button className="flex items-center gap-1 border border-gray-300 text-gray-700 text-[13px] px-3 py-[5px] rounded hover:bg-gray-100">
          <ArrowDownToLine className="w-[14px] h-[14px] text-gray-500" />
          Import
        </button>

        {/* Export */}
        <button className="flex items-center gap-1 border border-gray-300 text-gray-700 text-[13px] px-3 py-[5px] rounded hover:bg-gray-100">
          <ArrowUpToLine className="w-[14px] h-[14px] text-gray-500" />
          Export
        </button>

        {/* Share */}
        <button className="flex items-center gap-1 border border-gray-300 text-gray-700 text-[13px] px-3 py-[5px] rounded hover:bg-gray-100">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.62231 3.33333H8.50915C8.85433 3.33333 9.13415 3.61316 9.13415 3.95833C9.13415 4.27475 8.89902 4.53624 8.59396 4.57763L8.50915 4.58333H5.62231C4.62993 4.58333 3.81761 5.3543 3.75164 6.32996L3.74731 6.45833V14.375C3.74731 15.3674 4.51828 16.1797 5.49394 16.2457L5.62231 16.25H13.5396C14.532 16.25 15.3443 15.479 15.4103 14.5034L15.4146 14.375V13.9602C15.4146 13.615 15.6944 13.3352 16.0396 13.3352C16.356 13.3352 16.6175 13.5703 16.6589 13.8754L16.6646 13.9602V14.375C16.6646 16.0452 15.3543 17.4094 13.7056 17.4957L13.5396 17.5H5.62231C3.9521 17.5 2.58792 16.1897 2.50165 14.541L2.49731 14.375V6.45833C2.49731 4.78812 3.80762 3.42394 5.45635 3.33767L5.62231 3.33333H8.50915H5.62231ZM12.084 5.43321V3.125C12.084 2.60503 12.673 2.32496 13.0731 2.6165L13.1416 2.67395L18.1371 7.46562C18.3703 7.68924 18.3915 8.04843 18.2008 8.29673L18.1372 8.36765L13.1417 13.1609C12.7665 13.5209 12.1565 13.2897 12.0899 12.7991L12.084 12.7099V10.4388L11.7977 10.4639C9.79799 10.6725 7.88129 11.5732 6.0356 13.1811C5.60301 13.558 4.93374 13.2017 5.00488 12.6324C5.55888 8.19942 7.8771 5.75608 11.8345 5.44959L12.084 5.43321V3.125V5.43321ZM13.334 4.59054V6.04167C13.334 6.38685 13.0542 6.66667 12.709 6.66667C9.48114 6.66667 7.48062 8.06344 6.61625 10.9643L6.55037 11.1965L6.84386 10.9991C8.7076 9.781 10.6654 9.16667 12.709 9.16667C13.0254 9.16667 13.2869 9.4018 13.3283 9.70686L13.334 9.79167V11.244L16.8017 7.91674L13.334 4.59054Z" fill="#545454"/>
</svg>

          Share
        </button>

        {/* New Action */}
        <button className="flex items-center gap-1 bg-[#4B6A4F] text-white text-[13px] px-3 py-[5px] rounded h-[32px]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00006 0.5C8.34524 0.5 8.62506 0.779822 8.62506 1.125V5.91667H10.7046C11.9702 5.91667 12.9963 6.94268 12.9963 8.20833V13.368L14.4334 11.9328C14.6777 11.6888 15.0734 11.6891 15.3173 11.9334C15.5612 12.1776 15.5609 12.5733 15.3167 12.8172L12.8129 15.3177C12.5688 15.5615 12.1733 15.5613 11.9293 15.3174L9.42889 12.8169C9.18482 12.5729 9.18482 12.1771 9.42889 11.9331C9.67297 11.689 10.0687 11.689 10.3128 11.9331L11.7463 13.3665V8.20833C11.7463 7.63304 11.2799 7.16667 10.7046 7.16667H5.29165C4.71635 7.16667 4.24998 7.63304 4.24998 8.20833V13.3665L5.68346 11.9331C5.92754 11.689 6.32327 11.689 6.56734 11.9331C6.81142 12.1771 6.81142 12.5729 6.56734 12.8169L4.06692 15.3174C3.82285 15.5614 3.42712 15.5614 3.18304 15.3174L0.682574 12.8169C0.438494 12.5729 0.43849 12.1771 0.682566 11.9331C0.926641 11.689 1.32237 11.689 1.56645 11.9331L2.99998 13.3666V8.20833C2.99998 6.94268 4.026 5.91667 5.29165 5.91667H7.37506V1.125C7.37506 0.779822 7.65488 0.5 8.00006 0.5Z" fill="white"/>
</svg>

          New Action
        </button>
      </div>
    </div>
  );
}
