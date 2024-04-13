import {
  PhotographIcon,
  DocumentIcon,
  PresentationChartBarIcon,
  TableIcon,
  CodeIcon,
  GlobeIcon,
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

const ConvertTo = ({
  convert_to,
  title,
}: {
  convert_to: nav_content["convert_to"];
  title: string;
}) => {
  const prependLangToUrl = usePrependLangToUrl();

  return (
    <ul className="nav-list convert-tools vertical-list">
      <li className="_h6">
        <bdi>{title}</bdi>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/jpg-to-pdf")} className="nav-link">
          <PhotographIcon className="icon inline-block mr-2 img" />{" "}
          <bdi>{convert_to.jpg_to_pdf}</bdi>
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/word-to-pdf")} className="nav-link">
          <DocumentIcon className="icon inline-block mr-2 word" />{" "}
          <bdi>{convert_to.word_to_pdf}</bdi>
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/powerpoint-to-pdf")} className="nav-link">
          <PresentationChartBarIcon className="icon inline-block mr-2 ppt" />{" "}
          <bdi>{convert_to.powerpoint_to_pdf}</bdi>
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/excel-to-pdf")} className="nav-link">
          <TableIcon className="icon inline-block mr-2 excel" />{" "}
          <bdi>{convert_to.excel_to_pdf}</bdi>
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/html-to-pdf")} className="nav-link">
          <CodeIcon className="icon inline-block mr-2 html" />{" "}
          <bdi>{convert_to.html_to_pdf}</bdi>
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/web-to-pdf")} className="nav-link">
          <GlobeIcon className="icon inline-block mr-2 web" />{" "}
          <bdi>{convert_to.web_to_pdf}</bdi>{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/markdown-to-pdf")} className="nav-link">
          <MarkdownIcon className="icon inline-block mr-2 web" />{" "}
          <bdi>{convert_to.markdown_to_pdf}</bdi>{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/png-to-pdf")} className="nav-link">
          <TbFileTypePng className="icon inline-block mr-2 png" />{" "}
          <bdi>{convert_to.png_to_pdf}</bdi>{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/gif-to-pdf")} className="nav-link">
          <MdOutlineGif className="icon inline-block mr-2 gif" />{" "}
          <bdi>{convert_to.gif_to_pdf}</bdi>{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/tiff-to-pdf")} className="nav-link">
          <BsFiletypeTiff className="icon inline-block mr-2 tiff" />{" "}
          <bdi>{convert_to.tiff_to_pdf}</bdi>{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/bmp-to-pdf")} className="nav-link">
          <BsFiletypeBmp className="icon inline-block mr-2 bmp" />{" "}
          <bdi>{convert_to.bmp_to_pdf}</bdi>{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/svg-to-pdf")} className="nav-link">
          <BsFiletypeSvg className="icon inline-block mr-2 svg" />{" "}
          <bdi>{convert_to.svg_to_pdf}</bdi>{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/webp-to-pdf")} className="nav-link">
          <FaCamera className="icon inline-block mr-2 webp" />{" "}
          <bdi>{convert_to.webp_to_pdf}</bdi>{" "}
        </a>
      </li>
      <li className="nav-list-item">
        <a href={prependLangToUrl("/heif-heic-to-pdf")} className="nav-link">
          <BsFiletypeHeic className="icon inline-block mr-2 heif-heic" />{" "}
          <bdi>{convert_to.heif_heic_to_pdf}</bdi>{" "}
        </a>
      </li>
    </ul>
  );
};

export default ConvertTo;
