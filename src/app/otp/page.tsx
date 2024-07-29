"use client";
import { Box, Text } from "@chakra-ui/react";
import React, { Suspense } from "react";
import styles from "./otp.module.css";
import Image from "next/image";
import Otp from "@/components/Otp";

const page = () => {
  return (
    <Box className={styles.loginContainer}>
      <Box className={styles.leftlogin}>
        <Text as="b" p={3} fontSize={36} color={"white"}>
          Enter verification code
        </Text>
        <Suspense>
          <Otp />
        </Suspense>
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
  );
};

export default page;
