import ConvertTo from "./ConvertTo";
import ConvertFrom from "./ConvertFrom";
import type { nav_content } from "../navbar";
import { useNavState } from "../src/useNavState";
import { useEffect, useRef } from "react";

const ConvertTools = ({ content }: { content: nav_content }) => {
  const { showConvertMenu } = useNavState();
  const convertToolsRef = useRef<HTMLDivElement>(null);
  const { setConvertToolsRef } = useNavState();
  useEffect(() => {
    setConvertToolsRef(convertToolsRef);
  }, [convertToolsRef.current]);
  return (
    <div
      className={`drop-down-container${
        showConvertMenu ? " animate show" : " animate hide"
      }`}
      ref={convertToolsRef}
    >
      <ConvertTo
        convert_to={content.convert_to}
        title={content.convert_to_pdf}
      />
      <ConvertFrom
        convert_from={content.convert_from}
        title={content.convert_from_pdf}
      />
    </div>
  );
};

export default ConvertTools;
