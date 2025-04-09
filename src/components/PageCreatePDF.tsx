import { FormCreate } from "./FormCreate";
import "../styles/page-create-pdf.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import iconReturn from "../assets/return.svg";
import iconDoc from "../assets/doc.svg";
import { SectionPreview } from "./SectionPreview";

export default function PageCreatePDF() {
  const [activePreview, setActivePreview] = useState<boolean>(false);
  const handlePreview = () => setActivePreview(!activePreview);

  return (
    <main className="page-create-pdf">
      <div className="container-form">
        <div className="header-container-form">
          <Link to="/" className="link-container-form">
            <img src={iconReturn} alt="icon return" width={20} height={20} />
            Volver
          </Link>
          <button className="button-preview" onClick={handlePreview}>
            {activePreview ? "Cerrar vista" : "Vista previa"}
            <img src={iconDoc} alt="icon doc" width={20} height={20} />
          </button>
        </div>
        <hr />
        <FormCreate />
      </div>
      <SectionPreview active={activePreview} handlePreview={handlePreview} />
    </main>
  );
}
