"use client";

import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../app/login/login.module.css";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "jsonwebtoken";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

type LoginData = {
  email: string;
  name: string;
  image: string;
  socialToken: string;
  isAdmin: boolean;
};

type ResponseMessage = {
  credential?: string;
  clientId?: string;
  select_by?: string;
};

interface CustomJwtPayload extends JwtPayload {
  email: string;
  name: string;
  picture: string;
}

const LoginCard = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const isLoggedIn = localStorage.getItem("authToken");

  const authen = async (data: LoginData) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
        data
      );
      const { socialToken } = response.data;
      localStorage.setItem("authToken", socialToken);
      router.replace("/adminpanel");
    } catch (error) {
      console.error(error, "Error during authentication");
    }
  };

  const responseMessage = (response: ResponseMessage) => {
    if (response.credential != null) {
      console.log();
      const USER_CREDENTIAL = jwtDecode(
        response.credential
      ) as CustomJwtPayload;
      const newLoginData = {
        email: USER_CREDENTIAL?.email,
        name: USER_CREDENTIAL?.name,
        image: USER_CREDENTIAL?.picture,
        socialToken: response.credential,
        isAdmin: true,
      };

      authen(newLoginData);

      if (newLoginData) {
        router.push("/adminpanel");
      }
    }
  };
  const errorMessage = (error?: string) => {
    console.log(error, "sdafjhse");
  };

  return (
    <Box className={styles.cardContainer}>
      <FormControl id="username" mb={4}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={loginData?.username}
          onChange={(e) =>
            setLoginData({ ...loginData, username: e.target.value })
          }
        />
      </FormControl>
      <FormControl id="password" mb={6}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={loginData?.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
      </FormControl>
      <Button colorScheme="cyan" color={"white"} width="full">
        Login
      </Button>
      <Box className={styles.googlelogin}>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </Box>
    </Box>
  );
};

export default LoginCard;
