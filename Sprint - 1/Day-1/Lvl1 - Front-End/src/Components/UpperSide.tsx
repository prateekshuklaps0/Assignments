import * as css from "../Styles/UpperSideStyles";
import { CHANGECURRENTTYPE, CHANGECONTEXT } from "../Redux/actionTypes";

import { useDispatch, useSelector } from "react-redux";
import {
  Box,
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
      <Box>
        <Menu>
          <MenuButton>{currentType}</MenuButton>
          <MenuList>
            {contentTypes.map((item: any, ind: number) => (
              <MenuItem
                onClick={() =>
                  dispatch({ type: CHANGECURRENTTYPE, payload: item })
                }
                key={item + ind}
              >
                {item}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        Generator
      </Box>

      <Box>
        <InputGroup size="sm">
          <Input
            value={context}
            onChange={(e) =>
              dispatch({ type: CHANGECONTEXT, payload: e.target.value })
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
