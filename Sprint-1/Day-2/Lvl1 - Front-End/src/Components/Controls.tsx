import * as css from "../Styles/ControlsStyles";

import { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

const Controls = () => {
  const [currentLang, setCurrLang] = useState("JavaScript");

  return (
    <Box css={css.Outer}>
      <Box css={css.ControlsCont}>
        <Menu>
          <MenuButton as={Button}>Convert to {currentLang}</MenuButton>
          <MenuList>
            {LangArray.map((item: any, ind: any) => (
              <MenuItem onClick={() => setCurrLang(item)} key={ind + item}>
                {item}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        {ButtonData.map((item: any, ind: number) => (
          <Button key={ind + item.title}>{item.title}</Button>
        ))}
      </Box>
    </Box>
  );
};

export default Controls;

const ButtonData = [
  {
    title: "Convert",
  },
  {
    title: "Debug",
  },
  {
    title: "Check Quality",
  },
];

const LangArray = ["JavaScript", "Python", "C++", "Java", "Ruby"];
