import { Link } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { PreviewPDF } from "./PreviewPDF";
import { useContextPDF } from "../context/ContextPDF";
import "../styles/section-preview.css";

function SectionPreview ()  {
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
    <div className="container-preview">
      {pdfUrl ? (
        <object
          data={pdfUrl}
          type="application/pdf"
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

export default memo(SectionPreview);