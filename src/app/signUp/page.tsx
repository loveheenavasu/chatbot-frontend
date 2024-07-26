"use client";
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import styles from "./signup.module.css";

import Signup from "@/components/Signup";

const signup = () => {
  return (
    <Box className={styles.loginContainer}>
      <Box className={styles.leftlogin}>
        <Signup />
      </Box>
      <Box className={styles.rightlogin}>
        <Box className={styles.imageWrapper}>
          <Image
            className={styles.mainPhoto}
            objectFit="cover"
            src="/signup.png"
            alt="mainPhoto"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default signup;
