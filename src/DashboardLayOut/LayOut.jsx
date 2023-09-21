import React from "react";
import Drawer from "../Components/Pages/Dashboard/Sections/Drawer";
import Nav from "../Components/Pages/Dashboard/Sections/Nav";
import DashboardHome from "../Components/Pages/Dashboard/DashboardHome";

const LayOut = () => {
  return (
    <section className="flex">
      {/* sidebar */}
      
        <Drawer></Drawer>
      
      {/* nav and body */}
      <div className="flex-1">
        <Nav></Nav>
        <DashboardHome></DashboardHome>
      </div>
    </section>
  );
};

export default LayOut;
