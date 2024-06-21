import { Typography } from "@mui/material";
import "./Presentation.css";
import { useEffect, useState } from "react";

/* 
useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavBar(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [])
 */

export function Presentation() {
  const [show, setShow] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
        setShowPortfolio(true);
    }, 2200);
  }, []);

  return (
    <div className="Presentation">
      <Typography component={"h1"} variant="h3" fontWeight={40} style={{fontWeight: 'bold'}} color={"white"}>
        Hola
      </Typography>
      <Typography component={"h1"} variant="h2" style={{fontWeight: 'bold'}}  color={"#025E73"}>
        Soy Emiliano
      </Typography>
      {
      show ? (
        <Typography component={"h1"} variant="h3" style={{fontWeight: 'bold'}} color={"white"}>
          Soy desarollador Full Stack
        </Typography>
      ) : null
      }
      {
      showPortfolio ? (
        <Typography component={"h1"} variant="h3" style={{fontWeight: 'bold'}} color={"white"}>
          y este es mi porfolio :)
        </Typography>
      ) : null
      }
    </div>
  );
}
