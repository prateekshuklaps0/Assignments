import * as css from "../Styles/LowerSideStyles";

import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const LowerSide = () => {
  const result = useSelector((state: any) => state.reducer.result);

  return <Box css={css.Outer}>{result}</Box>;
};

export default LowerSide;
