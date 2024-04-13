import { MenuIcon } from "@heroicons/react/outline";
import Logo from "../icons/Logo";
import { useNavState } from "../src/useNavState";
import { getLanguage } from "../src/language";
import type { nav_content } from "../navbar";
export const SideBarToggler = ({
  lang,
  sidebar = { menu: "Menu", home: "Home" },
}: {
  lang?: string;
  sidebar: nav_content["sidebar"];
}) => {
  const { expandSideNav, setExpandSideNav } = useNavState();
  const languageToken = getLanguage();
  return (
    <>
      <button
        className="sidebar-toggler"
        onClick={() => {
          setExpandSideNav(!expandSideNav);
        }}
        title={sidebar.menu}
        type="button"
      >
        <MenuIcon className="icon menu" />
      </button>
      <a
        href={`/${
          lang ? lang + "/" : languageToken ? languageToken + "/" : ""
        }`}
        className="home"
      >
        <Logo width={100} height={80} />
        {sidebar.home}
      </a>
    </>
  );
};
