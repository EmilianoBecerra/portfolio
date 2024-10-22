import "./Header.css";
import { Dispatch, SetStateAction } from "react";
import iconNavBar from "../img/navBar.png";

type Props = {
  view: string;
  setView: Dispatch<SetStateAction<string>>;
};

export function Header(props: Props) {
  const { setView } = props;

  const button = [
    { label: "Presentacion", function: () => setView("Presentation") },
    { label: "Conocimientos", function: () => setView("Knowledge") },
    {
      label: "Contacto",
      function: () => {
        setView("Contact");
      },
    },
  ];

  return (
    <div className="Header-header">
      <h1>Portfolio</h1>
      <div className="dropdown">
        <input type="checkbox" className="check" />
        <img src={iconNavBar} alt="icon navbar" />
        <nav className="nav">
          {button.map((element, index) => (
            <button
              key={index}
              onClick={element.function}
              className="btn-header"
            >
              {element.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
