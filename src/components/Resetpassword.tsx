"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../app/resetPassword/resetpassword.module.css";
import { toast } from "react-toastify";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
} from "@/utils/localStorage";

export default function Resetpassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const uniqueCode = getLocalStorageItem("uniqueCode");
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        return toast.error("please enter the same password");
      }
      if (formData.password.length < 4) {
        return toast.error("your password is too small ");
      }
      setLoading(true);
      const response = await axiosInstance.post("user/reset", {
        uniqueCode,
        password: formData.password,
      });
      toast.success(response?.data?.message);
      if (response.status === 200) {
        removeLocalStorageItem();
        router.push(`/login`);

        setLoading(true);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <Box className={styles.cardContainer} as="form" onSubmit={handleSubmit}>
      <FormControl id="password" mb={6}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id="confirmPassword" mb={6}>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </FormControl>

      <Button
        colorScheme="cyan"
        color={"white"}
        width="full"
        type="submit"
        isLoading={loading}
      >
        Confirm
      </Button>
      {/* <Text
        cursor={"pointer"}
        as="b"
        p={4}
        display={"flex"}
        justifyContent={"center"}
      >
        Don't have an Account?{" "}
        <Text
          color="#0bc5ea"
          as="b"
          marginLeft={1}
          onClick={() => router.push("/login")}
        >
          Login{" "}
        </Text>
      </Text> */}
    </Box>
  );
}
