import {
  DocumentTextIcon,
  LockOpenIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useNavState } from "../src/useNavState";
import StampIcon from "../icons/StampIcon";
import NumbersIcon from "../icons/Numbers";
import type { nav_content } from "../navbar";
import { useEffect, useRef } from "react";
import { usePrependLangToUrl } from "../src/prependLangToUrl";
import RemovePagesIcon from "../icons/RemovePagesIcon";

const EditTools = ({ content }: { content: nav_content["edit"] }) => {
  const { showEditMenu, setEditMenuRef } = useNavState();
  const editMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setEditMenuRef(editMenuRef);
  }, [editMenuRef.current]);
  const prependLangToUrl = usePrependLangToUrl();
  return (
    <div
      className={`edit-tools drop-down-container${
        showEditMenu ? " animate show" : " animate hide"
      }`}
      ref={editMenuRef}
    >
      <ul className="nav-list convert-tools vertical-list">
        <li className="nav-list-item">
          <a href={prependLangToUrl("/read-pdf")} className="nav-link">
            <bdi>
              <DocumentTextIcon className="icon read" />
              &nbsp;
              {content.read}
            </bdi>
          </a>
        </li>
        <li className="nav-list-item">
          <a href={prependLangToUrl("/remove-pages")} className="nav-link">
            <bdi>
              <RemovePagesIcon className="icon remove" />
              &nbsp;
              {content.remove}
            </bdi>
          </a>
        </li>
        <li className="nav-list-item">
          <a href={prependLangToUrl("/add-watermark")} className="nav-link">
            <bdi>
              <StampIcon className="icon watermark" />
              &nbsp;{content.watermark}
            </bdi>
          </a>
        </li>
        <li className="nav-list-item">
          <a href={prependLangToUrl("/number-pdf")} className="nav-link">
            <bdi>
              <NumbersIcon className="icon number" />
              &nbsp;
              {content.number}
            </bdi>
          </a>
        </li>
        <li className="nav-list-item">
          <a href={prependLangToUrl("/rotate-pdf")} className="nav-link">
            <bdi>
              <RefreshIcon className="icon rotate" />
              &nbsp;
              {content.rotate}
            </bdi>
          </a>
        </li>
        <li className="nav-list-item">
          <a href={prependLangToUrl("/lock-pdf")} className="nav-link">
            <bdi>
              <LockClosedIcon className="icon lock" />
              &nbsp;
              {content.lock}
            </bdi>
          </a>
        </li>
        <li className="nav-list-item">
          <a href={prependLangToUrl("/unlock-pdf")} className="nav-link">
            <bdi>
              <LockOpenIcon className="icon unlock" />
              &nbsp;
              {content.unlock}
            </bdi>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default EditTools;
