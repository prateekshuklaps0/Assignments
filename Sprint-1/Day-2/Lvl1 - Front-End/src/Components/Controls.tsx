import * as css from "../Styles/ControlsStyles";
import JavascriptIcon from "../Assets/Icons/Node.svg";
import JavaIcon from "../Assets/Icons/Java.svg";
import PythonIcon from "../Assets/Icons/Python.svg";
import CplusIcon from "../Assets/Icons/C++.svg";
import RubyIcon from "../Assets/Icons/Ruby.svg";

import { useState } from "react";
import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Controls = () => {
  const [currentLang, setCurrLang] = useState({
    title: "JavaScript",
    value: "java",
    icon: JavaIcon,
  });

  return (
    <Box css={css.Outer}>
      <Box css={css.ControlsCont}>
        <Menu>
          <MenuButton as={Button}>
            Convert to {currentLang.title}
            <Image w={["20px"]} h={["20px"]} src={currentLang.icon} />
          </MenuButton>
          <MenuList>
            {LangArray.map((item: any, ind: any) => (
              <MenuItem
                onClick={() =>
                  setCurrLang({
                    title: item.name,
                    value: item.value,
                    icon: item.icon,
                  })
                }
                css={css.MenuitemsCss}
                key={ind + item.name}
              >
                {item.name}
                <Image src={item.icon} />
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

const LangArray = [
  {
    name: "JavaScript",
    icon: JavascriptIcon,
    value: "javascript",
  },
  {
    name: "Python",
    icon: PythonIcon,
    value: "python",
  },
  {
    name: "Java",
    icon: JavaIcon,
    value: "java",
  },
  {
    name: "C++",
    icon: CplusIcon,
    value: "c++",
  },
  {
    name: "Ruby",
    icon: RubyIcon,
    value: "ruby",
  },
];
