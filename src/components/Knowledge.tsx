import "./Knowledge.css"

export function Knowledge() {
  return (
    <div className="knowledgeCard">
      <div className="knowledgeTitle">
        <h1 style={{ color: "white" }}>Conocimientos</h1>
      </div>
      <div className="knowledgeList">
          <div>
            <h2>Front End</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div>
            <h2>Back End</h2>
            <ul>
              <li>NodeJS</li>
              <li>NestJS</li>
              <li>Java</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div>
            <h2>Full Stack</h2>
            <ul>
              <li>NextJS</li>
            </ul>
          </div>
      </div>
    </div>
  );
}
