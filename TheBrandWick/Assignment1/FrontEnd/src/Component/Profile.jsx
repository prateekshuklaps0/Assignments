import * as css from "../Styles/ProfileStyles";
import { LOGOUT } from "../Redux/Action";
import { Vortex } from "react-loader-spinner";

import { Box, Button, Text, Image, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const Profile = ({ userName, handleLogout }) => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <Box css={css.Outer}>
      <Text>{`Hello ${userName}!`}</Text>

      <Button
        bg="orangeA"
        color="whiteA"
        borderColor="orangeA"
        _hover={{
          bg: "whiteA",
          color: "orangeA",
        }}
        onClick={handleLogout}
        isDisabled={isLoading}
      >
        {isLoading ? (
          <Vortex
            visible={true}
            height="40"
            width="40"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        ) : (
          "LOG OUT"
        )}
      </Button>
    </Box>
  );
};

export default Profile;
