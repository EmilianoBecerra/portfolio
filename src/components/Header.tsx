import { Typography } from "@mui/material";
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
      <div className="headerLeft">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQFjLvcQ8cgEYg/profile-displayphoto-shrink_200_200/0/1712937319579?e=2147483647&v=beta&t=WPxxuMrPCcA0FG8Q_VUcJsFAb4wEBcM7odAZM63jJyU"
          alt=""
        />
        <Typography component={'h1'} variant="h3">
            Portfolio
        </Typography>
      </div>
      <div className="headerRigth">
        {button.map((btn, index) => (
          <button
            onClick={(e) => btn.function()}
            className="btn-header"
            key={index}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
