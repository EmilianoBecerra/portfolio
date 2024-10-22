import "./Presentation.css";
import project2 from "../img/mi-proyecto-2.jpg";
import project3 from "../img/To-DoList.png";
import project4 from "../img/music-player.png";
import project5 from "../img/proyectoClima.jpg";
import project6 from "../img/password.png";
import project7 from "../img/todoList.jpg";
import imgBackground from "../img/img-fondo.png";
import htmlIcon from "../img/html-5.png";
import cssIcon from "../img/css-3.png";
import JSIcon from "../img/js.png";
import reactIcon from "../img/react-original-wordmark.svg";
import TSIcon from "../img/ts.png";
import sassIcon from "../img/sass.png";

const projects = [
  {
    id: 1,
    link: "https://emilianobecerra.github.io/Tarea8_EducacionIT/",
    image: {
      title: "Inscripción GYM JavaScript",
      url: project2,
      alt: "Imagen segundo proyecto hecho con HTML, CSS y JavaScript",
    },
  },
  {
    id: 2,
    link: "https://github.com/EmilianoBecerra/To-Do-List-CLI-Node",
    image: {
      title: "To-do list Cli NodeJS",
      url: project3,
      alt: "Imagen tercer proyecto hecho con Node.js",
    },
  },
  {
    id: 3,
    link: "https://emilianobecerra.github.io/MusicPlayerApp",
    image: {
      title: "Musica Player app JavaScript",
      url: project4,
      alt: "Imagen cuarto proyecto hecho con JavaScript",
    },
  },
  {
    id: 4,
    link: "https://emilianobecerra.github.io/WeatherApp/",
    image: {
      title: "Wather app JavaScript",
      url: project5,
      alt: "Imagen quinto proyecto hecho con JavaScript",
    },
  },
  {
    id: 5,
    link: "https://emilianobecerra.github.io/PassGeneratorApp/",
    image: {
      title: "Pass Generator app JavaScript",
      url: project6,
      alt: "Imagen sexto proyecto hecho con JavaScript",
    },
  },
  {
    id: 6,
    link: "https://emilianobecerra.github.io/to-do-List-App/",
    image: {
      title: "To-do list JavaScript",
      url: project7,
      alt: "Imagen septimo proyecto hecho con JavaScript",
    },
  },
];
export function Presentation() {
  return (
    <div className="Presentation">
      <header className="welcome">
        <h2>Hola, soy</h2>
        <h2 className="nametitle">Emiliano</h2>
        <h2>Desarrollador Front End.</h2>
      </header>
      <main className="info">
        <img className="img-svg" src={imgBackground} alt="" />
        <section className="personal-info">
          <ul>
            <li>Estudiante interesado por la tecnología.</li>
            <li>Me considero una persona sociable y con gran capacidad para
              trabajar en equipo.
            </li>
            <li>Disfruto de los debates y el intercambio de ideas.</li>
            <li>Considero que el aprendizaje continuo es esencial para mantener
              una mente activa.
            </li>
          </ul>
        </section>
        <section className="info-img-project">
          <ul className="images-list">
            {projects.map((project) => (
              <li key={project.link}>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    title={project.image.title}
                    src={project.image.url}
                    alt={project.image.alt}
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="box-icon-list">
          <ul className="icon-list">
            <li>
              <img src={htmlIcon} alt="HTML icon" />
            </li>
            <li>
              <img src={cssIcon} alt="CSS icon" />
            </li>
            <li>
              <img src={sassIcon} alt="Sass icon" />
            </li>
            <li>
              <img src={JSIcon} alt="JavaScript icon" />
            </li>
            <li>
              <img src={TSIcon} alt="TypeScript icon" />
            </li>
            <li>
              <img src={reactIcon} alt="React icon" />
            </li>
          </ul>
        </section>
      </main>
      <footer className="presentation-footer">
        Desarrollado por Emiliano Becerra
      </footer>
    </div>
  );
}
