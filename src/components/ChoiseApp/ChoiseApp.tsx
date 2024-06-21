import { Link } from "react-router-dom";

import classes from "./ChoiseApp.module.scss";

type Props = {
  display: string;
  changeDisplay: () => void;
};

const ChoiseApp: React.FC<Props> = ({ display, changeDisplay }) => {
  const applications = {
    "Угадай СТМ": "/guess-stm",
    "Симулятор переговоров с Клиентами": "/scc",
  };

  return (
    <>
      <button onClick={() => (display !== "block" ? changeDisplay() : false)}>
        ПРОГРАММЫ
      </button>
      <div style={{ display: display }} className={classes.windowApps}>
        <ul>
          {Object.entries(applications).map((el) => (
            <Link to={el[1]}>
              <li>{el[0]}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ChoiseApp;
