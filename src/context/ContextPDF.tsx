import { createContext, ReactNode, useCallback, useContext, useState } from "react";

import {
  UseContextPDF,
  PropertiesPDF,
  Education,
  Experience,
  Lenguage,
} from "../types/types";
import { curriculum } from "../utils/cv";

const ContextPDF = createContext<UseContextPDF | null>(null);

export const useContextPDF = (): UseContextPDF => {
  const context = useContext(ContextPDF);
  if (!context) throw new Error("Sin context");
  return context;
};

export default function ProviderContext({ children }: { children: ReactNode }) {
  const [cv, setCv] = useState<PropertiesPDF>(curriculum);

  const addSkill = useCallback((skill: string) => {
    setCv((prevState) => ({
      ...prevState,
      skills: [...prevState.skills, { skill, id: Date.now() }],
    }));
  }, []);

  const addContact = useCallback((contact: string) => {
    setCv((prevState) => {
      if (prevState.contacts.length >= 4) {
        console.log("Límite alcanzado. Máx 4");
        return prevState;
      }
      return {
        ...prevState,
        contacts: [...prevState.contacts, { contact, id: Date.now() }],
      };
    });
  }, []);

  const addExperience = useCallback((value: Experience) => {
    setCv((prevState) => ({
      ...prevState,
      experiences: [
        ...(prevState.experiences || []),
        { ...value, id: Date.now() },
      ],
    }));
  }, []);

  const addEducation = useCallback((value: Education) => {
    setCv((prevState) => ({
      ...prevState,
      educations: [...prevState.educations, { ...value, id: Date.now() }],
    }));
  }, []);

  const addLenguage = useCallback((value: Lenguage) => {
    setCv((prevState) => ({
      ...prevState,
      lenguages: [...prevState.lenguages, { ...value, id: Date.now() }],
    }));
  }, []);

  const addTitle = useCallback((value: string) => {
    setCv((prevState) => ({ ...prevState, title: value }));
  }, []);

  const addSubtitle = useCallback((value: string) => {
    setCv((prevState) => ({ ...prevState, subtitle: value }));
  }, []);

  const addResume = useCallback((value: string) => {
    setCv((prevState) => ({ ...prevState, resume: value }));
  }, []);

  const removeSkill = useCallback((id: number) => {
    setCv((prevState) => ({
      ...prevState,
      skills: prevState.skills.filter((skill) => skill.id !== id),
    }));
  }, []);

  const removeContact = useCallback((id: number) => {
    setCv((prevState) => ({
      ...prevState,
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  }, []);

  const removeExperience = useCallback((id: number) => {
    setCv((prevState) => ({
      ...prevState,
      experiences: prevState.experiences?.filter(
        (experience) => experience.id !== id
      ),
    }));
  }, []);

  const removeEducation = useCallback((id: number) => {
    setCv((prevState) => ({
      ...prevState,
      educations: prevState.educations.filter(
        (education) => education.id !== id
      ),
    }));
  }, []);

  const removeLenguage = useCallback((id: number) => {
    setCv((prevState) => ({
      ...prevState,
      lenguages: prevState.lenguages.filter((lenguage) => lenguage.id !== id),
    }));
  }, []);

  return (
    <ContextPDF.Provider
      value={{
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
      }}>
      {children}
    </ContextPDF.Provider>
  );
}
