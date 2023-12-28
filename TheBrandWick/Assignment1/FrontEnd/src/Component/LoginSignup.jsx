import * as css from "../Styles/LoginSignupStyles";
import {
  INPCHANGE,
  RESETINP,
  TOGGLELOGINCOMPONENT,
} from "../Redux/ActionTypes";
import { LOGIN, SIGNUP } from "../Redux/Action";

import { useEffect } from "react";
import { Box, Text, Image, Center, Button, useToast } from "@chakra-ui/react";
import {
  FaFacebookF as FbIcon,
  FaLinkedinIn as LinkedInIcon,
} from "react-icons/fa";
import { FaGoogle as GoogleIcon } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Vortex } from "react-loader-spinner";

const LoginSignup = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const userName = useSelector((state) => state.userName);
  const password = useSelector((state) => state.password);
  const phone = useSelector((state) => state.phone);
  const emailOrPhone = useSelector((state) => state.emailOrPhone);
  const isLoading = useSelector((state) => state.isLoading);
  const showLogin = useSelector((state) => state.showLogin);

  useEffect(() => {
    dispatch({ type: RESETINP });
  }, [showLogin]);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!isLoading) {
      const obj = {
        userName,
        email,
        phone,
        password,
      };
      dispatch(SIGNUP(toast, obj));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!isLoading) {
      const obj = { emailOrPhone, password };
      dispatch(LOGIN(toast, obj));
    }
  };

  return !showLogin ? (
    <Box bg="whiteA" boxShadow="shadowB" css={css.Outer}>
      <Center
        fontFamily="ver"
        bg="orangeA"
        color="whiteA"
        css={css.GreetContainerDivs}
      >
        <Text fontFamily="k2d" css={css.HeadingGreetText}>
          Welcome Back!
        </Text>
        <Text css={css.SubGreetHeadings}>To stay connected with us</Text>
        <Text css={css.SubGreetHeadings}>
          please login with your personal info
        </Text>
        <Button
          bg="orangeA"
          color="whiteA"
          borderColor="whiteA"
          _hover={{
            bg: "whiteA",
            color: "orangeA",
          }}
          onClick={() => dispatch({ type: TOGGLELOGINCOMPONENT })}
          css={css.ToggleBtns}
          isDisabled={isLoading}
        >
          LOG IN
        </Button>
      </Center>
      <Box css={css.FormsDiv}>
        <Text fontFamily="k2d" css={css.TopFormHeading}>
          Create Account
        </Text>
        <Box css={css.IconsContDiv}>
          <Center
            _hover={{
              boxShadow: "shadowA",
            }}
          >
            <Image as={FbIcon} />
          </Center>
          <Center
            _hover={{
              boxShadow: "shadowA",
            }}
          >
            <Image as={GoogleIcon} />
          </Center>
          <Center
            _hover={{
              boxShadow: "shadowA",
            }}
          >
            <Image as={LinkedInIcon} />
          </Center>
        </Box>
        <Text color="greyA" fontFamily="ver" css={css.OrText}>
          or use your email for registration
        </Text>
        <Box css={css.InpContainerDiv}>
          <form onSubmit={handleSignup}>
            <input
              value={userName}
              onChange={(e) =>
                dispatch({
                  type: INPCHANGE,
                  name: e.target.name,
                  payload: e.target.value,
                })
              }
              type="text"
              name="userName"
              placeholder="Username"
            />
            <input
              value={email}
              onChange={(e) =>
                dispatch({
                  type: INPCHANGE,
                  name: e.target.name,
                  payload: e.target.value,
                })
              }
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              value={phone}
              onChange={(e) =>
                dispatch({
                  type: INPCHANGE,
                  name: e.target.name,
                  payload: e.target.value,
                })
              }
              type="number"
              name="phone"
              placeholder="Phone No."
            />
            <input
              value={password}
              onChange={(e) =>
                dispatch({
                  type: INPCHANGE,
                  name: e.target.name,
                  payload: e.target.value,
                })
              }
              type="password"
              name="password"
              placeholder="Password"
            />
            <Button
              bg="orangeA"
              color="whiteA"
              borderColor="orangeA"
              _hover={{
                bg: "whiteA",
                color: "orangeA",
              }}
              type="submit"
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
                  colors={[
                    "red",
                    "green",
                    "blue",
                    "yellow",
                    "orange",
                    "purple",
                  ]}
                />
              ) : (
                "SIGN UP"
              )}
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box bg="whiteA" boxShadow="shadowB" css={css.Outer}>
      <Box css={css.FormsDiv}>
        <Text fontFamily="k2d" css={css.TopFormHeading}>
          Log In
        </Text>
        <Box css={css.IconsContDiv}>
          <Center
            _hover={{
              boxShadow: "shadowA",
            }}
          >
            <Image as={FbIcon} />
          </Center>
          <Center
            _hover={{
              boxShadow: "shadowA",
            }}
          >
            <Image as={GoogleIcon} />
          </Center>
          <Center
            _hover={{
              boxShadow: "shadowA",
            }}
          >
            <Image as={LinkedInIcon} />
          </Center>
        </Box>
        <Text color="greyA" fontFamily="ver" css={css.OrText}>
          or use your account
        </Text>
        <Box css={css.InpContainerDiv}>
          <form onSubmit={handleLogin}>
            <input
              value={emailOrPhone}
              onChange={(e) =>
                dispatch({
                  type: INPCHANGE,
                  name: e.target.name,
                  payload: e.target.value,
                })
              }
              type="text"
              name="emailOrPhone"
              placeholder="Email or Phone No."
            />
            <input
              value={password}
              onChange={(e) =>
                dispatch({
                  type: INPCHANGE,
                  name: e.target.name,
                  payload: e.target.value,
                })
              }
              type="password"
              name="password"
              placeholder="Password"
            />
            <Text>Forgot your password?</Text>
            <Button
              bg="orangeA"
              color="whiteA"
              borderColor="orangeA"
              _hover={{
                bg: "whiteA",
                color: "orangeA",
              }}
              type="submit"
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
                  colors={[
                    "red",
                    "green",
                    "blue",
                    "yellow",
                    "orange",
                    "purple",
                  ]}
                />
              ) : (
                "LOG IN"
              )}
            </Button>
          </form>
        </Box>
      </Box>
      <Center
        bg="orangeA"
        color="whiteA"
        fontFamily="ver"
        css={css.GreetContainerDivs}
      >
        <Text fontFamily="k2d" css={css.HeadingGreetText}>
          Hello, Friend!
        </Text>
        <Text css={css.SubGreetHeadings}>Enter details and</Text>
        <Text css={css.SubGreetHeadings}>Start your journey with us</Text>
        <Button
          bg="orangeA"
          color="whiteA"
          borderColor="whiteA"
          _hover={{
            bg: "whiteA",
            color: "orangeA",
          }}
          onClick={() => dispatch({ type: TOGGLELOGINCOMPONENT })}
          css={css.ToggleBtns}
          isDisabled={isLoading}
        >
          SIGN UP
        </Button>
      </Center>
    </Box>
  );
};

export default LoginSignup;
