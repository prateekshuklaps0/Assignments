import * as css from "../Styles/UpperSideStyles";

import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputRightAddon,
  Input,
} from "@chakra-ui/react";

const UpperSide = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.reducer.isLoading);
  const context = useSelector((state: any) => state.reducer.context);
  const currentType = useSelector((state: any) => state.reducer.currentType);
  const contentTypes = useSelector((state: any) => state.reducer.contentTypes);

  return (
    <Box css={css.Outer}>
      <Text>
        <Menu>
          <MenuButton>{currentType}</MenuButton>
          <MenuList>
            {contentTypes.map((item: any, ind: number) => (
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
        Generator
      </Text>

      <Box>
        <InputGroup size="sm">
          <Input
            value={context}
            onChange={(e) =>
              dispatch({ type: "CHANGECONTEXT", payload: e.target.value })
            }
            placeholder="Context"
          />
          <InputRightAddon
            as={Button}
            children={
              isLoading
                ? `Processing ${currentType}`
                : `Generate ${currentType}`
            }
          />
        </InputGroup>
      </Box>
    </Box>
  );
};

export default UpperSide;
