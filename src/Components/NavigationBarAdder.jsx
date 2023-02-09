import React from "react";

// import Navbar
import { NavigationBar } from "./NavigationBar";

const NavigationBarAdder = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <NavigationBar />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

// Pages to add navigation to
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Home/Projects";

// Run NavigationBarAdder on pages
export const NavHome = NavigationBarAdder(Home);
export const NavContact = NavigationBarAdder(Contact);
export const NavProject = NavigationBarAdder(Projects);
