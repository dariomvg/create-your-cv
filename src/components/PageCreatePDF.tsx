import { FormCreate } from "./FormCreate";
import "../styles/page-create-pdf.css";
import SectionPreview from "./SectionPreview";
import { Link } from "react-router-dom";

export default function PageCreatePDF() {
  return (
    <main className="page-create-pdf">
      <div className="container-create-pdf">
        <FormCreate />
        <Link to="/download" className="link-download-page-create">
          Descargar PDF
        </Link>
      </div>
      <SectionPreview />
    </main>
  );
}
