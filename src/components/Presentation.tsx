import "./Presentation.css";
import project1 from "../img/mi-proyecto-1.jpg";
import project2 from "../img/mi-proyecto-2.png";
import project3 from "../img/mi-proyecto-3.jpg";
import project4 from "../img/mi-proyecto-4.jpg";
import imgBackground from "../img/img-fondo.png";

export function Presentation() {
  return (
    <div className="Presentation">
      <header className="welcome">
        <h2>Hola, soy</h2>
        <h2 className="nametitle">Emiliano</h2>
        <h2>Desarrollador Full Stack.</h2>
      </header>
      <main className="info">
        <section className="info-img">
          <ul>
            <li>Estudiante interesado por la tecnología.</li>
            <li>
              Me considero una persona sociable y con gran capacidad para
              trabajar en equipo.
            </li>
            <li> Disfruto de los debates y el intercambio de ideas.</li>
            <li>
              Considero que el aprendizaje continuo es esencial para mantener
              una mente activa.
            </li>
          </ul>
          <img className="img-svg" src={imgBackground} alt="" />
        </section>
        <section className="info-img-project">
          <ul className="images-list">
            <li>
              <img
                title={"Primer Proyecto"}
                src={project1}
                alt={"Imagen primer proyecto hecho con HTML y CSS"}
                onClick={() => {
                  console.log("click imagen");
                }}
              />
            </li>
            <li>
              <img
                title={"Segundo Proyecto"}
                src={project2}
                alt={"Imagen segundo proyecto hecho con HTML, CSS y JavaScript"}
                onClick={() => {
                  console.log("click imagen");
                }}
              />
            </li>
            <li>
              <img
                title={"Tercer Proyecto"}
                src={project3}
                alt={
                  "Imagen tercer proyecto hecho con HTML,CSS,JavaScript, NodeJS, Base de datos"
                }
                onClick={() => {
                  console.log("click imagen");
                }}
              />
            </li>
            <li>
              <img
                title={"Cuarto Proyecto"}
                src={project4}
                alt={"Imagen cuarto proyecto hecho con React"}
                onClick={() => {
                  console.log("click imagen");
                }}
              />
            </li>
          </ul>
        </section>

        <footer></footer>
      </main>
    </div>
  );
}
