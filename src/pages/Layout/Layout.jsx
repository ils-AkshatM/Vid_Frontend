import React from "react";
import SideNavbar from "../../components/SideNavbar";
import Search from "../../components/SearchBox/Search";
import Button from "../../components/Buttons/Button";

const Layout = () => {
  return (
    <>
    <div className="flex">
      <SideNavbar />
      {/* <div className="pl-60 flex justify-between w-full bg-white shadow h-16 border-none">
        <div className="mt-2">
        <Search />
        </div>
        <div className="flex mt-3 gap-4 justify-between mr-4">
        <Button label="Upload Button" />
        <Button label="Login" />
        </div>
      </div> */}
    </div>
    </>
  );
};

export default Layout;
