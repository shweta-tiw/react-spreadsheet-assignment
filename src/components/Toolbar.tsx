export default function Toolbar() {
  const handleClick = (label: string) => {
    console.log(`${label} clicked`);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">
      <div className="flex space-x-4 text-sm text-gray-700 font-medium">
        {["File", "Edit", "View", "Insert", "Format", "Data"].map((tab) => (
          <button key={tab} onClick={() => handleClick(tab)} className="hover:underline">
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <button onClick={() => handleClick("Bold")} className="font-bold">
          B
        </button>
        <button onClick={() => handleClick("Italic")} className="italic">
          I
        </button>
        <button onClick={() => handleClick("Underline")} className="underline">
          U
        </button>
        <input
          type="color"
          onChange={(e) => console.log("Color picked:", e.target.value)}
          title="Fill Color"
        />
      </div>
    </div>
  );
}
