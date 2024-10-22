import { useState } from "react";
import "./Knowledge.css";
import { projects } from "./constants";

interface LanguageSelection {
  HTML: boolean;
  CSS: boolean;
  SASS: boolean;
  JavaScript: boolean;
  TypeScript: boolean;
  React: boolean;
}

export function Knowledge() {
  const [selectLanguage, setSelectLanguage] = useState<LanguageSelection>({
    HTML: true,
    CSS: true,
    SASS: true,
    JavaScript: true,
    TypeScript: true,
    React: true,
  });

  const handleCheckBoxChange = (e: any) => {
    const { name, checked } = e.target;
    setSelectLanguage((prevstate) => ({
      ...prevstate,
      [name]: checked,
    }));
  };

  const filterProjects = projects.filter((project) =>
    project.languages.some(
      (language) => selectLanguage[language as keyof boolean]
    )
  );
  return (
    <div className="knowledgeCard">
      <div className="knowledgeTitle">
        <h1 style={{ color: "white" }}>Conocimientos</h1>
      </div>
      <div className="knowledge">
        <div className="languages-list">
          <input
            type="checkbox"
            name="HTML"
            checked={selectLanguage.HTML}
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="html">HTML</label>
          <input
            type="checkbox"
            name="CSS"
            checked={selectLanguage.CSS}
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="css">CSS</label>
          <input
            type="checkbox"
            name="SASS"
            checked={selectLanguage.SASS}
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="sass">SASS</label>
          <input
            type="checkbox"
            name="JavaScript"
            checked={selectLanguage.JavaScript}
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="JavaScript">JavaScript</label>
          <input
            type="checkbox"
            name="TypeScript"
            checked={selectLanguage.TypeScript}
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="TypeScript">TypeScript </label>
          <input
            type="checkbox"
            name="React"
            checked={selectLanguage.React}
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="react">React</label>
        </div>

        <div className="languages-info">
          {filterProjects.length > 0 ? (
            filterProjects.map((project, index) => (
              <div key={project.link} className="project-Box">
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </a>
                <div className="languages-list-label">
                  {project.languages.map((language, index) => (
                    <span key={index} className="languages-label">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-none">No hay proyectos para mostrar</p>
          )}
        </div>
      </div>
      <footer className="footer">Desarrollado por Emiliano Becerra 8)</footer>
    </div>
  );
}
