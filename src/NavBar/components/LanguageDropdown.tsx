import { useEffect, useRef } from "react";
import LanguageIcon from "../icons/LanguageIcon";
import { useNavState } from "../src/useNavState";
import { getLanguage, setLanguage } from "../src/language";
const LanguageDropdown = ({ removeTrailingSlash = false, language, ...props }: { removeTrailingSlash?: boolean, language?: string } & React.ComponentProps<"div">) => {

  const { path, showLangMenu, setShowLangMenu } = useNavState();
  const langMenuRef = useRef<HTMLDivElement>(null);
  const langWrapperRef = useRef<HTMLDivElement>(null);
  const toggle = () => setShowLangMenu(!showLangMenu);
  useEffect(() => {
    if (typeof getLanguage() === "undefined") {
      setLanguage("");
    }
    let t = setTimeout(() => {
      if (langWrapperRef.current?.classList.contains("hide")) {
        langWrapperRef.current.classList.add("none");
      }
    }, 300);
    return () => {
      clearTimeout(t);
    };
  }, [langMenuRef.current, showLangMenu]);
  return (
    <div
      {...props}
      className={`language-dropdown${props.className ? " " + props.className : ""
        }`}
      ref={langMenuRef}
    >
      <button
        className="langugage-dropdown-toggler"
        onClick={toggle}
        onBlur={(e) => {
          if (!langMenuRef.current?.contains(e.relatedTarget)) {
            setShowLangMenu(false);
          }
        }}
        title={language}
        type="button"
      >
        <LanguageIcon className="icon" />
      </button>
      {/* check if this element has a hide class then add a .none class to it */}
      <div
        className={`dropdown-wrapper drop-down-container${showLangMenu ? " animate show" : " animate hide"
          }`}
        ref={langWrapperRef}
      >
        <ul className="nav-list vertical-list">
          <li className="nav-list-item">
            <a
              href={`/${path}`}
              className="nav-link"
              onClick={() => {
                setLanguage("");
              }}
            >
              English
            </a>
          </li>
          <li className="nav-list-item">
            <a
              href={`/ar${removeTrailingSlash ? "" : "/"}${path}`}
              className="nav-link"
              onClick={() => {
                setLanguage("ar");
              }}
            >
              العربية
            </a>
          </li>
          {/* spanish route */}
          <li className="nav-list-item">
            <a
              href={`/es${removeTrailingSlash ? "" : "/"}${path}`}
              className="nav-link"
              onClick={() => {
                setLanguage("es");
              }}
            >
              Español
            </a>
          </li>
          {/* french route */}
          <li className="nav-list-item">
            <a
              href={`/fr${removeTrailingSlash ? "" : "/"}${path}`}
              className="nav-link"
              onClick={() => {
                setLanguage("fr");
              }}
            >
              Français
            </a>
          </li>
          {/* hindi route */}
          <li className="nav-list-item">
            <a
              href={`/hi${removeTrailingSlash ? "" : "/"}${path}`}
              className="nav-link"
              onClick={() => {
                setLanguage("hi");
              }}
            >
              हिन्दी
            </a>
          </li>
          {/* chinease route */}
          <li className="nav-list-item">
            <a
              href={`/zh${removeTrailingSlash ? "" : "/"}${path}`}
              className="nav-link"
              onClick={() => {
                setLanguage("zh");
              }}
            >
              中文
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageDropdown;
