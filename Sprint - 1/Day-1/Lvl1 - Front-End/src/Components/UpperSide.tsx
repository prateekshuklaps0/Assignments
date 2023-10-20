import * as css from "../Styles/UpperSideStyles";
import { CHANGECURRENTTYPE, CHANGECONTEXT } from "../Redux/actionTypes";
import { SendRequest } from "../Redux/action";

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
  const dispatch: any = useDispatch();
  const isLoading = useSelector((state: any) => state.reducer.isLoading);
  const context = useSelector((state: any) => state.reducer.context);
  const currentType = useSelector((state: any) => state.reducer.currentType);
  const contentTypes = useSelector((state: any) => state.reducer.contentTypes);

  const handleSubmit = () => {
    dispatch(SendRequest(currentType, context));
  };

  return (
    <Box css={css.Outer}>
      <Box css={css.TitleCss}>
        <Menu>
          <MenuButton>{currentType}</MenuButton>
          <MenuList bg="red">
            {contentTypes.map((item: any, ind: number) => (
              <MenuItem
                color="black"
                bg="pink.50"
                _hover={{
                  color: "grey",
                  bg: "white",
                }}
                fontSize="20px"
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
        {` Generator`}
      </Box>

      <Box css={css.InpCont}>
        <InputGroup size={["sm", "md", "lg"]}>
          <Input
            value={context}
            onChange={(e) =>
              dispatch({ type: CHANGECONTEXT, payload: e.target.value })
            }
            placeholder="Context"
          />
          <InputRightAddon
            as={Button}
            isDisabled={context == ""}
            onClick={handleSubmit}
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
