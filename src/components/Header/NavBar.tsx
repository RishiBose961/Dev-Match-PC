import { Circle } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

const NavBar = () => {
  return (
    <nav className=" border-gray-200 ">
      <div className=" space-x-3 flex p-1 ring-1 rounded-3xl w-fit ">
        <button onClick={() => window.electronAPI.close()}>
          {" "}
          <Circle className="text-red-500 fill-red-500 size-5 " />
        </button>
        <button onClick={() => window.electronAPI.minimize()}>
          {" "}
          <Circle className="text-green-600 fill-green-600 size-5" />
        </button>
        <button onClick={() => window.electronAPI.maximize()}>
          {" "}
          <Circle className="text-yellow-500 fill-yellow-500 size-5" />
        </button>
      </div>
      <div className=" flex justify-center text-center space-x-1 items-center mx-auto p-4">
        <img src="/dev.png" className="pt-1" alt="Flowbite Logo" />
        <p className="text-2xl font-bold whitespace-nowrap dark:text-white">
          DevMatch
        </p>
        <div className="mx-3">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
