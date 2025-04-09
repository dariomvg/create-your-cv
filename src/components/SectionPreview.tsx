import { Link } from "react-router-dom";
import iconArrowBack from "../assets/arrow-back.svg";
import { useEffect, useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { PreviewPDF } from "./PreviewPDF";
import { useContextPDF } from "../context/ContextPDF";
import "../styles/section-preview.css";

export const SectionPreview = ({
  active,
  handlePreview,
}: {
  active: boolean;
  handlePreview: () => void;
}) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const { cv } = useContextPDF();

  useEffect(() => {
    const generateBlob = async () => {
      const blob = await pdf(<PreviewPDF cv={cv} />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };

    generateBlob();

    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [cv]);

  return (
    <div className={`container-preview ${active ? "active-preview" : ""}`}>
      <button className="button-preview-mobile" onClick={handlePreview}>
        <img src={iconArrowBack} alt="icon arrow back" width={20} height={20} />
        Cerrar vista
      </button>
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      ) : (
        <p>Generando vista previa...</p>
      )}
      <Link to="/download" className="link-download">
        Descargar PDF
      </Link>
    </div>
  );
};
