import "../styles/main.css";
import { advantages } from "../utils/advantages";
import iconArrow from "../assets/arrow.svg";
import imageMain from "../assets/image-main.jpg";

export default function Main() {
  return (
    <main className="main">
      <section className="section-main">
        <h1 className="title-section-main">Crea tu propio CV</h1>
        <h2 className="subtitle-section-main">
          Currículum moderno, profesional y más usado
        </h2>
        <a href="/create-cv" className="link-section-main">
          Comenzar
        </a>
        <img
          src={iconArrow}
          alt="arrow down"
          width={25}
          height={25}
          className="icon-arrow-down"
        />
      </section>
      <section className="section-about">
        <h3 className="title-section-about">Ventajas de usarlo...</h3>
        <ul className="list-details-about">
          {advantages.map(({ id, title, details }) => (
            <li className="card-detail-about" key={id}>
              <strong className="title-detail-about">{title}</strong>
              <p className="description-detail-about">{details}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="section-templates" id="templates">
        <h3 className="title-section-templates">Estilo del currículum</h3>
        <img
          src={imageMain}
          alt="image template cv"
          width={400}
          height={550}
          className="image-card-template"
        />
      </section>

      <footer className="footer">
        <p className="title-footer">
          Creado por{" "}
          <a
            href="https://github.com/dariomvg"
            target="_blank"
            rel="noopener noreferrer"
            className="link-footer">
            Dariomvg💗
          </a>
        </p>
        <p className="copyright-footer">Todos los derechos reservados 2025</p>
      </footer>
    </main>
  );
}
