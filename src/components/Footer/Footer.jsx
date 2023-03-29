import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "primary.main",
        color: "white",
        padding: 2,
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        Подвал
      </Typography>
    </Box>
  );
}
