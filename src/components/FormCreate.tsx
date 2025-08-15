import { ChangeEvent, useRef, useState } from "react";
import { useContextPDF } from "../context/ContextPDF";
import "../styles/form-create.css";
import {
  objectEducation,
  objectExperience,
  objectLenguague,
} from "../utils/obj_properties";
import { Education, Experience, Lenguage } from "../types/types";
import { ButtonAddForm } from "./ButtonAddForm";
export const FormCreate = () => {
  const {
    cv,
    addSkill,
    addLenguage,
    addContact,
    addExperience,
    addEducation,
    addTitle,
    addSubtitle,
    addResume,
    removeSkill,
    removeContact,
    removeExperience,
    removeEducation,
    removeLenguage,
  } = useContextPDF();

  const refTitle = useRef<HTMLInputElement>(null);
  const refJob = useRef<HTMLInputElement>(null);
  const refContact = useRef<HTMLInputElement>(null);
  const refResume = useRef<HTMLInputElement>(null);
  const refSkill = useRef<HTMLInputElement>(null);

  const [education, setEducation] = useState<Education>(objectEducation);
  const [experience, setExperience] = useState<Experience>(objectExperience);
  const [lenguage, setLenguage] = useState<Lenguage>(objectLenguague);

  const changeEducation = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEducation((prevState) => ({ ...prevState, [name]: value }));
  };
  const changeExperience = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExperience((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <section className="form-create">
      <div className="container-input-create">
        <label htmlFor="title">Nombre y Apellido</label>
        <input
          id="title"
          required
          placeholder="Camila Rodriguez"
          ref={refTitle}
        />
        <ButtonAddForm
          onclick={() => {
            if (!refTitle.current?.value) return;
            addTitle(refTitle.current.value);
            refTitle.current.value = "";
          }}
        />
      </div>

      <div className="container-input-create">
        <label htmlFor="job">Profesión</label>
        <input
          id="job"
          placeholder="Diseñador UX-UI"
          required
          ref={refJob}
        />
        <ButtonAddForm
          onclick={() => {
            if (!refJob.current?.value) return;
            addSubtitle(refJob.current.value);
            refJob.current.value = "";
          }}
        />
      </div>

      <div className="container-input-create">
        <label htmlFor="resume">Sobre ti</label>
        <input
          id="resume"
          required
          ref={refResume}
          placeholder="Sobre ti..."
        />
        <ButtonAddForm
          onclick={() => {
            if (!refResume.current?.value) return;
            addResume(refResume.current.value);
            refResume.current.value = "";
          }}
        />
      </div>
      <hr />
      <div className="container-input-create">
        <label htmlFor="contact">
          Contactos(Máx 4)
          <b className="count-contacts"> Agregados {cv.contacts.length}</b>
        </label>
        <input
          id="contact"
          placeholder="teléfono, e-mail, github, linkedin..."
          required
          ref={refContact}
        />
        <ButtonAddForm
          onclick={() => {
            if (!refContact.current?.value) return;
            addContact(refContact.current.value);
            refContact.current.value = "";
          }}
        />
        <ul>
          {cv.contacts.map(({ id, contact }) => (
            <li className="item" key={id}>
              <p>{contact}</p>
              <button
                onClick={() => removeContact(id)}
                className="button-delete">
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <hr />

      <div className="container-input-create">
        <label htmlFor="skills">Habilidades</label>
        <input
          id="skills"
          required
          placeholder="React, JavaScript, TypeScript..."
          ref={refSkill}
        />
        <ButtonAddForm
          onclick={() => {
            if (!refSkill.current?.value) return;
            addSkill(refSkill.current.value);
            refSkill.current.value = "";
          }}
        />
        <ul>
          {cv.skills.map(({ id, skill }) => (
            <li className="item" key={id}>
              <p>{skill}</p>
              <button onClick={() => removeSkill(id)} className="button-delete">
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="container-input-create">
        <label>Experiencia</label>
        <input
          placeholder="Puesto de trabajo. Por ej: Desarrollador"
          value={experience.name}
          name="name"
          required
          onChange={changeExperience}
        />
        <input
          placeholder="Tus logros, aprendizajes, detalles..."
          value={experience.detail}
          name="detail"
          required
          onChange={changeExperience}
        />
        <input
          placeholder="Nombre de la empresa, institución, organización..m"
          value={experience.company}
          name="company"
          required
          onChange={changeExperience}
        />
        <label htmlFor="experience_start" className="label-date">
          Fecha de inicio
        </label>
        <input
          type="date"
          name="date_start"
          id="date_start"
          required
          className="input-create date"
          value={experience.date_start}
          onChange={changeExperience}
        />
        <label htmlFor="experience_end" className="label-date">
          Fecha de término
        </label>
        <input
          type="date"
          name="date_end"
          id="experience_end"
          required
          className="input-create date"
          value={experience.date_end}
          onChange={changeExperience}
        />
        <button
          onClick={() => {
            addExperience(experience);
            setExperience(objectExperience);
          }}
          className="button-add">
          Agregar
        </button>
        <ul>
          {cv.experiences?.map(({ id, name, date_start, date_end, detail }) => (
            <li className="item item-column" key={id}>
              <h4>{name}</h4>
              <strong>
                {date_start} - {date_end}
              </strong>
              <p>{detail}</p>
              <button
                onClick={() => removeExperience(id)}
                className="button-delete">
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <div className="container-input-create">
        <label htmlFor="name">Educación</label>
        <input
          placeholder="Nombre del curso o título"
          name="name"
          id="name"
          required
          value={education.name}
          onChange={changeEducation}
        />
        <label htmlFor="date_start" className="label-date">
          Fecha de inicio
        </label>
        <input
          type="date"
          className="input-create date"
          id="date_start"
          name="date_start"
          required
          value={education.date_start}
          onChange={changeEducation}
        />

        <label htmlFor="date_end" className="label-date">
          Fecha de término
        </label>
        <input
          type="date"
          className="input-create date"
          id="date_end"
          name="date_end"
          required
          value={education.date_end}
          onChange={changeEducation}
        />
        <button
          onClick={() => {
            addEducation(education);
            setEducation(objectEducation);
          }}
          className="button-add">
          Agregar
        </button>
        <ul>
          {cv.educations.map(({ id, name, date_start, date_end }) => (
            <li className="item" key={id}>
              <h4>{name}</h4>
              <strong>
                {date_start} - {date_end}
              </strong>
              <button
                onClick={() => removeEducation(id)}
                className="button-delete">
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="container-input-create">
        <label htmlFor="">Idiomas</label>
        <input
          placeholder="Inglés, Español, Italiano..."
          name="name"
          required
          value={lenguage.name}
          onChange={(e) =>
            setLenguage((prevState) => ({ ...prevState, name: e.target.value }))
          }
        />
        <select
          onChange={(e) =>
            setLenguage((prevState) => ({
              ...prevState,
              level: e.target.value,
            }))
          }>
          <option value="Principiante">Principiante</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
          <option value="Nativo">Nativo</option>
        </select>
        <button
          onClick={() => {
            addLenguage(lenguage);
            setLenguage(objectLenguague);
          }}
          className="button-add">
          Agregar
        </button>
        <ul>
          {cv.lenguages.map(({ id, name, level }) => (
            <li className="item" key={id}>
              <h4>{name}</h4>
              <strong>{level}</strong>
              <button
                onClick={() => removeLenguage(id)}
                className="button-delete">
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
