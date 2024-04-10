import React from "react";
import Header from "../header";
import NavLeft from "../navLeft";
import Detail from "../../pages/detail";
import { Outlet } from "react-router-dom";

type Props = {};

const LayoutAdmin = (props: Props) => {
  return (
    <>
      <Header />
      <div className="flex">
        <NavLeft />
        {/* <Detail /> */}
        <Outlet/>
      </div>
    </>
  );
};

export default LayoutAdmin;
