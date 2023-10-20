import { useReducer } from "react";
import {
  Box,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import * as css from "../Styles/UpperSide";

const UpperSide = () => {
  const [{ isLoading, contentType }, dispatch] = useReducer(reducer, init);

  return (
    <Box css={css.Outer}>
      <Box>
        <Text>{contentType} Generator</Text>

        <Box>
          <Menu>
            <MenuButton>{contentType}</MenuButton>
            <MenuList>
              {contentTypes.map((item, ind) => (
                <MenuItem
                  onClick={() =>
                    dispatch({ type: "CHANGECONTENT", payload: item })
                  }
                  key={item + ind}
                >
                  {item}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Button>
            {isLoading ? "Generating" : "Generate"} {contentType}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UpperSide;

const init = {
  isLoading: false,
  isError: false,
  contentType: "Shayari",
  result: "",
};

const reducer = (state = init, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "ERROR": {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case "SUCCESS": {
      return {
        ...state,
        isLoading: false,
        result: payload,
      };
    }
    case "CHANGECONTENT": {
      return {
        ...state,
        contentType: payload,
      };
    }
    default: {
      return init;
    }
  }
};

const contentTypes = ["Shayari", "Joke", "Story", "Quote"];
