"use client";

import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../app/signUp/signup.module.css";
import { toast } from "react-toastify";
export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.password || !formData.email) {
      toast.error("Please fill all the fields");
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Please enter same password");
    }
  };

  return (
    <Box className={styles.cardContainer} as="form" onSubmit={handleSubmit}>
      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="text" value={formData.email} onChange={handleChange} />
      </FormControl>
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

      <Button colorScheme="cyan" color={"white"} width="full" type="submit">
        Sign Up
      </Button>
    </Box>
  );
}
