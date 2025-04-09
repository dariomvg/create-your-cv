import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import PageCreatePDF from "./components/PageCreatePDF";
import { Download } from "./components/Download";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create-cv" element={<PageCreatePDF />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  );
}
