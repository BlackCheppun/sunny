import Button from "./Button.js";
import Menu from "../CollapseMenu/Menu.js";

const Header = () => {
  return (
    <header className="flex justify-between w-screen pt-3 px-6">
      <div>
        <a href="#" className="font-black text-white text-3xl phone:text-xl">
          sunnyside
        </a>
      </div>
      <div>
        <Menu />
      </div>
      <div className="flex justify-between phone:invisible">
        <Button title="About" />
        <Button title="Services" />
        <Button title="Projects" />

        <button
          href="#"
          className="px-5 py-2 mx-1 text-lg font-black rounded-3xl text-black bg-white uppercase hover:bg-active-blue hover:text-white hover:duration-300 font-fraunces"
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
