
import './App.css'
import TopBar from "./components/TopBar";
import Toolbar from "./components/Toolbar";
import Spreadsheet from "./components/Spreadsheet";
  
function App() {
  return (
    <div className="h-screen w-full bg-gray-50">
      <TopBar />
      <Toolbar />
      <Spreadsheet />
    </div>
  );
}

export default App;
