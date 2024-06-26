import "./Header.css";
import { Dispatch, SetStateAction } from "react";

type Props = {
  view: string;
  setView: Dispatch<SetStateAction<string>>;
};

export function Header(props: Props) {
  const { setView } = props;

  const button = [
    { label: "Presentacion", function: () => setView("Presentation") },
    { label: "Aprendizaje", function: () => setView("Learning") },
    { label: "Lenguaje", function: () => setView("Language") },
    {
      label: "Contacto",
      function: () => {
        setView("Contact");
      },
    },
  ];

  return (
    <div className="Header">
      <h1>Portfolio</h1>
      <nav className="nav">
        {button.map((element, index) => (
          <button key={index} onClick={element.function} className="btn-header">
            {element.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
