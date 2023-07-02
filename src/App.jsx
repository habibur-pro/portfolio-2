import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {
  return (
    <div className="max-w-[1500px] md:grid grid-cols-6">
      <div className="col-span-1 h-screen">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-3 md: pl-16 pt-10">
        <Home />
      </div>
    </div>
  );
};

export default App;