import { memo } from "react";
import iconAdd from "../assets/add.svg";
import "../styles/button-add-form.css";

export const ButtonAddForm = memo(({ onclick }: { onclick: () => void }) => {
  return (
    <button className="button-icon-add" onClick={onclick}>
      <img
        src={iconAdd}
        alt="icon plus"
        width={25}
        height={25}
        loading="lazy"
        className="icon-add"
      />
    </button>
  );
});
