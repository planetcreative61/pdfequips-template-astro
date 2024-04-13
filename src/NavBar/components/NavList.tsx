import React, { useCallback, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import ConvertTools from "./ConvertTools";
import EditTools from "./EditTools";
import type { nav_content } from "../navbar";
import { useNavState } from "../src/useNavState";
import { usePrependLangToUrl } from "../src/prependLangToUrl";
const NavList = ({
  content,
  isSideBar = false,
}: {
  content: nav_content;
  isSideBar?: boolean;
}): React.JSX.Element => {
  const {
    showConvertMenu,
    setShowConvertMenu,
    showEditMenu,
    setShowEditMenu,
    convertToolsRef,
    editMenuRef,
    setShowLangMenu,
  } = useNavState();
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      // Close all opened menus
      setShowConvertMenu(false);
      setShowEditMenu(false);
      setShowLangMenu(false);
    }
  };
  const prependLangToUrl = usePrependLangToUrl();

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    if (screen.width <= 768) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      if (screen.width <= 768) {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        showConvertMenu &&
        !convertToolsRef?.current?.contains(event.target as Node)
      ) {
        setShowConvertMenu(false);
      }

      if (
        showEditMenu &&
        !editMenuRef?.current?.contains(event.target as Node)
      ) {
        setShowEditMenu(false);
      }
    },
    [showConvertMenu, showEditMenu]
  );
  return (
    <ul className={`nav-list${!isSideBar ? " hide-xs" : ""}`}>
      {/* <li className="nav-list-item">
        <a href={prependLangToUrl("#")} className="nav-link">
          Tools
        </a>
      </li> */}
      <li className="nav-list-item">
        <a href={prependLangToUrl("/compress-pdf")} className="nav-link">
          {content.compress}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/merge-pdf")} className="nav-link">
          {content.merge}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/split-pdf")} className="nav-link">
          {content.split}
        </a>
      </li>
      <li className="nav-list-item subnav-container">
        <a
          href="#"
          className="nav-link dropdown-toggler"
          onClick={(e) => {
            e.preventDefault();
            setShowConvertMenu(!showConvertMenu);
          }}
          onBlur={(e) => {
            if (
              showConvertMenu &&
              !convertToolsRef?.current?.contains(e.relatedTarget as Node)
            ) {
              if (screen.width >= 768) {
                setShowConvertMenu(false);
              }
            }
          }}
        >
          {content.convert}{" "}
          <ChevronUpIcon
            className={`icon chevron ${showConvertMenu ? "" : "flip"}`}
          />
        </a>
        <ConvertTools content={content} />
      </li>
      <li className="nav-list-item subnav-container">
        <a
          href="#"
          className="nav-link dropdown-toggler"
          onClick={(e) => {
            e.preventDefault();
            setShowEditMenu(!showEditMenu);
          }}
          onBlur={(e) => {
            if (
              showEditMenu &&
              !editMenuRef?.current?.contains(e.relatedTarget as Node)
            ) {
              if (screen.width >= 768) {
                setShowEditMenu(false);
              }
            }
          }}
        >
          {content.edit.title}{" "}
          <ChevronUpIcon
            className={`icon chevron ${showEditMenu ? "" : "flip"}`}
          />
        </a>
        <EditTools content={content.edit} />
      </li>
    </ul>
  );
};

export default NavList;
