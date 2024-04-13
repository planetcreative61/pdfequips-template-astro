import { useCallback, useEffect, useRef, useState } from "react";
import type { nav_content } from "../navbar";
import { useNavState } from "../src/useNavState";
import NavList from "./NavList";
import { SideBarToggler } from "./SideBarToggler";

export const SideBar = ({ content }: { content: nav_content }) => {
  const { expandSideNav, setExpandSideNav } = useNavState();
  const sideBarRef = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  // Create a ref to store the window height
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(document.documentElement.scrollHeight);
    document.addEventListener("mousedown", handleClickOutside);
    // Add an event listener for window resize
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleWindowResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Remove the event listener on cleanup
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleWindowResize);
    };
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        (expandSideNav &&
          !sideBarRef?.current?.contains(event.target as Node)) ||
        event.target === overlay.current
      ) {
        setExpandSideNav(false);
      }
    },
    [expandSideNav]
  );

  // Define a function to update the window height
  const handleWindowResize = () => {
    setWindowHeight(document.documentElement.scrollHeight);
  };

  return (
    <div
      className={`sidebar${expandSideNav ? " expanded" : ""}`}
      ref={sideBarRef}
      // Set the height to the window height
      style={{ height: windowHeight }}
    >
      <div className="content">
        <div className="toggler-wrapper">
          <SideBarToggler sidebar={content.sidebar} />
        </div>
        <NavList content={content} isSideBar />
      </div>
      <div className="navbar-overlay" ref={overlay}></div>
    </div>
  );
};
