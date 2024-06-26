import { Dispatch, SetStateAction } from "react";
import { Presentation } from "./Presentation";
import { Learning } from "./Learning";
import { Language } from "./Language";
import { Contact } from "./Contact";

import "./Main.css";

type Props = {
  view: string;
  setView: Dispatch<SetStateAction<string>>;
};

export function Main(props: Props) {
  const { view } = props;
  return (
    <div className="Main">
      {view === "Presentation" ? <Presentation /> : null}
      {view === "Learning" ? <Learning /> : null}
      {view === "Language" ? <Language /> : null}
      {view === "Contact" ? <Contact /> : null}
    </div>
  );
}
