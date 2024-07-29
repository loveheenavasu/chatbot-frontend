"use client";
import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import styles from "./forgetpassword.module.css";
import LoginCard from "@/components/LoginCard";
import Image from "next/image";
import ForgetPasswordCard from "../../components/ForgetPassword";

const ForgetPassword = () => {
  return (
    <>
      <Box className={styles.loginContainer}>
        <Box className={styles.leftlogin}>
          <ForgetPasswordCard />
        </Box>
        <Box className={styles.rightlogin}>
          <Box className={styles.imageWrapper}>
            <Image
              className={styles.mainPhoto}
              objectFit="cover"
              layout="fill"
              src="/chatbot2.jpg"
              alt="mainPhoto"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ForgetPassword;
