import { css } from "@emotion/react";
import { Box } from "@mui/material";

const myCss = css({
  backgroundColor: "green",
  height: "150px",
  width: "150px",
});

const Test = () => <Box css={myCss} />;

export default Test;
