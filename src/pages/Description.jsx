import { Box, Typography } from "@mui/material";

import { data } from "../data/dataBase";

const items = (arr) =>
  arr.map((item) => {
    const { name, table, decr, link } = item;

    return (
      <Box key={name}>
        <Typography id={link} variant="h6" component="h3">
          {name}
        </Typography>
        <Typography mt={1} variant="p" component="p">
          {decr}
        </Typography>
        {table ? <ul>{items(table)}</ul> : ""}
      </Box>
    );
  });

const elements = items(data);

function Description() {
  return <div>{elements}</div>;
}

export default Description;
