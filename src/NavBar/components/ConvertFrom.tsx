import {
  PhotographIcon,
  DocumentIcon,
  PresentationChartBarIcon,
  TableIcon,
  CodeIcon,
  DocumentAddIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";
import MarkdownIcon from "../icons/Markdown";
import type { nav_content } from "../navbar";
import { usePrependLangToUrl } from "../src/prependLangToUrl";
import { TbFileTypePng } from "react-icons/tb";
import { MdOutlineGif } from "react-icons/md";
import { BsFiletypeTiff } from "react-icons/bs";
import { BsFiletypeBmp } from "react-icons/bs";
import { BsFiletypeSvg } from "react-icons/bs";
import { FaCamera } from "react-icons/fa6";
import { BsFiletypeHeic } from "react-icons/bs";

const ConvertFrom = ({
  convert_from,
  title,
}: {
  convert_from: nav_content["convert_from"];
  title: string;
}) => {
  const prependLangToUrl = usePrependLangToUrl();
  return (
    <ul className="nav-list convert-tools vertical-list">
      <li className="_h6">
        <bdi>{title}</bdi>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-jpg")} className="nav-link">
          <bdi>{convert_from.pdf_to_jpg}</bdi>{" "}
          <PhotographIcon className="icon inline-block mr-2 img" />
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-word")} className="nav-link">
          <bdi>{convert_from.pdf_to_word}</bdi>{" "}
          <DocumentIcon className="icon inline-block mr-2 word" />
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-powerpoint")} className="nav-link">
          <bdi>{convert_from.pdf_to_powerpoint}</bdi>{" "}
          <PresentationChartBarIcon className="icon inline-block mr-2 ppt" />
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-excel")} className="nav-link">
          <bdi>{convert_from.pdf_to_excel}</bdi>{" "}
          <TableIcon className="icon inline-block mr-2 excel" />
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-html")} className="nav-link">
          <bdi>{convert_from.pdf_to_html}</bdi>{" "}
          <CodeIcon className="icon inline-block mr-2 html" />
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-pdf-a")} className="nav-link">
          <bdi>{convert_from.pdf_to_pdf_a}</bdi>{" "}
          <DocumentAddIcon className="icon inline-block mr-2" />
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-text")} className="nav-link">
          <bdi>{convert_from.pdf_to_text}</bdi>{" "}
          <DocumentTextIcon className="icon inline-block mr-2 text" />
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-markdown")} className="nav-link">
          {" "}
          <bdi>{convert_from.pdf_to_markdown}</bdi>{" "}
          <MarkdownIcon className="icon inline-block mr-2 web" />{" "}
        </a>
      </li>

      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-png")} className="nav-link">
          <bdi>{convert_from.pdf_to_png}</bdi>{" "}
          <TbFileTypePng className="icon inline-block mr-2 png" />{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-gif")} className="nav-link">
          <bdi>{convert_from.pdf_to_gif}</bdi>{" "}
          <MdOutlineGif className="icon inline-block mr-2 gif" />{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-tiff")} className="nav-link">
          <bdi>{convert_from.pdf_to_tiff}</bdi>{" "}
          <BsFiletypeTiff className="icon inline-block mr-2 tiff" />{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-bmp")} className="nav-link">
          <bdi>{convert_from.pdf_to_bmp}</bdi>{" "}
          <BsFiletypeBmp className="icon inline-block mr-2 bmp" />{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-svg")} className="nav-link">
          <bdi>{convert_from.pdf_to_svg}</bdi>{" "}
          <BsFiletypeSvg className="icon inline-block mr-2 svg" />{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-webp")} className="nav-link">
          <bdi>{convert_from.pdf_to_webp}</bdi>{" "}
          <FaCamera className="icon inline-block mr-2 webp" />{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/pdf-to-heif-heic")} className="nav-link">
          <bdi>{convert_from.pdf_to_heif_heic}</bdi>{" "}
          <BsFiletypeHeic className="icon inline-block mr-2 heif-heic" />{" "}
        </a>
      </li>
    </ul>
  );
};

export default ConvertFrom;
