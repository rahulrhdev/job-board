import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar, SmallSideBar, Navbar } from "../components";
import { checkDefaultTheme } from "../App";

const DashboardContext = createContext();

const DashBoardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    console.log(newDarkTheme, 'new')
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme', newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  };

  const toggleSidebar = () => {
    console.log('log')
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logout user");
  };

  // temp
  const user = {
    name: "john",
  };
  return (
    <DashboardContext.Provider value={{ user,showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSideBar />
          <BigSideBar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext)

export default DashBoardLayout;
