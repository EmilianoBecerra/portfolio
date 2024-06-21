import {Header} from "./components/Header";

import './App.css'
import { useState } from "react";
import { Main } from "./components/Main";


export function App() {
  const [view, setView] = useState('Presentation');
  
  return (
   <div className="App">
      <Header setView={setView} view={view}/>
      <Main setView={setView} view={view}/>
      
   </div>
  )
}


