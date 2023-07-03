import About from "./components/About/About";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {
  return (
    <div className="max-w-[1500px] md:grid grid-cols-6 px-3 md:px-0">
      <div className="md:col-span-1 h-screen">
        <Sidebar></Sidebar>
      </div>
      <div className="md:col-span-4  md:pl-16 ">
        <Home />
        <About />
      </div>
    </div>
  );
};

export default App;