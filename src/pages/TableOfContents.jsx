import { Link, Typography } from "@mui/material";

import { data } from "../data/dataBase";

const items = (arr) =>
  arr.map((item) => {
    const { name, link, table } = item;

    return (
      <li key={name}>
        <Link href={`#${link}`}>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
        </Link>
        <ul>{table ? items(table) : ""}</ul>
      </li>
    );
  });

const elements = items(data);

function TableOfContents() {
  return (
    <div>
      <header>
        <Typography variant="h4" component="h2">
          Оглавление
        </Typography>
      </header>
      <ul>{elements}</ul>
    </div>
  );
}

export default TableOfContents;
