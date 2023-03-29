import { Link } from "@mui/material";

function Main() {
  return (
    <div>
      <header>
        <h2>Оглавление</h2>
      </header>
      <ul>
        <li>
          <div>
            <h3>
              <Link>Общие вопросы:</Link>
            </h3>
            <ul>
              <li>
                <Link>Что такое KISS, DRY, YAGNI и т.д.</Link>
              </li>
              <li>
                <Link>Принципы SOLID.</Link>
              </li>
              <li>
                <Link>Паттерны проектирования.</Link>
              </li>
              <li>
                <Link>Структуры данных.</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Main;
