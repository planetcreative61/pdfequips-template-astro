import NavList from "./components/NavList";
import { SideBar } from "./components/SideBar";
import { SideBarToggler } from "./components/SideBarToggler";
import LanguageDropdown from "./components/LanguageDropdown";
import { useEffect } from "react";
import { useNavState } from "./src/useNavState";
import { getNavContent } from "./getNavContent";

const Navbar = ({
  path,
  shadow = true,
  lang,
}: {
  path: string;
  shadow?: boolean;
  lang?: string;
}) => {
  const { setPath } = useNavState();
  const content = getNavContent(lang || "");
  useEffect(() => {
    setPath(path);
  }, []);
  return (
    <nav className={`navbar${!shadow ? " no-shadow" : ""}`}>
      <SideBarToggler lang={lang} sidebar={content.sidebar} />
      <SideBar content={content} />
      <NavList content={content} />
      <LanguageDropdown language={content.language} />
    </nav>
  );
};

export default Navbar;
