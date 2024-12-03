import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import ProfilePic from './Components/ProfilePic';
import ProgressBar from './Components/ProgressBar';
import Services from './Components/Services';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="w-screen">
      <Header />
      <SideBar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
        {/* Main Content */}
        <div className="col-span-2 p-5 mt-[90px]">
          <Introduction />
          <About />
          <Services />
        </div>
        {/* Sidebar Content for Larger Screens */}
        <div className="hidden md:block">
          <ProgressBar />
          <ProfilePic />
        </div>
      </div>
    </div>
  );
}

export default App;
