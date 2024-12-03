import {
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoLinkedin,
  // IoLogoDribbble,
} from "react-icons/io5";

function SideBar() {
  const handleRedirect = (url) => {
    window.open(url, "blank"); // Open URL in a new tab
  };

  return (
    <div
      className="w-[90px] border-r-[1px] dark:bg-slate-800
    h-screen fixed flex flex-col justify-around items-center mt-[90px]"
    >
      <h2 className="-rotate-90 tracking-widest">HOMEPAGE</h2>
      <div className="flex flex-col gap-7 mb-10 text-[20px]">
        <IoLogoGithub
          className="cursor-pointer hover:scale-110 transition-all ease-in-out"
          onClick={() => handleRedirect("https://github.com/TheBMPatil")}
        />
        <IoLogoYoutube
          className="cursor-pointer hover:scale-110 transition-all ease-in-out"
          onClick={() => handleRedirect("https://www.youtube.com/@bmpatiltechs4452")}
        />
        <IoLogoLinkedin
          className="cursor-pointer hover:scale-110 transition-all ease-in-out"
          onClick={() => handleRedirect("https://linkedin.com/in/thebmpatil/")}
        />
        {/* <IoLogoDribbble
          className="cursor-pointer hover:scale-110 transition-all ease-in-out"
          onClick={() => handleRedirect("https://dribbble.com/yourprofile")}
        /> */}
      </div>
    </div>
  );
}

export default SideBar;
