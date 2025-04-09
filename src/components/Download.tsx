import "../styles/download.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PreviewPDF } from "./PreviewPDF";
import { useContextPDF } from "../context/ContextPDF";

export const Download = () => {
  const { cv } = useContextPDF();
  return (
    <main className="main-download">

      <PDFDownloadLink
        document={<PreviewPDF cv={cv} />}
        fileName="mi_cv.pdf"
        className="button-download">
        {({ loading }) =>
          loading ? "Generando PDF..." : "Descargar currículum"
        }
      </PDFDownloadLink>
    </main>
  );
};
