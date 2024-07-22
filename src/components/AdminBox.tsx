"use client";

import { Box, Button, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../app/adminpanel/admin.module.css";
import axiosInstance from "@/utils/axiosInstance";
import AdminDataBox from "./AdminDataBox";

const AdminBox = () => {
  const [inputData, setInputData] = useState<string>("");

  const handleAdd = async () => {
    const response = await axiosInstance.post(`/user/text`, {
      text: inputData,
    });
    setInputData("");
  };

  return (
    <Box className={styles.mainWrapper}>
      <Box className={styles.subWrapper}>
        <Box className={styles.textAreaWrapper}>
          <Textarea
            placeholder="Feed data"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            size={"lg"}
            rows={10}
          />
          <Box className={styles.buttonWrapper}>
            <Button
              size="sm"
              colorScheme="cyan"
              onClick={handleAdd}
              color={"white"}
            >
              {" "}
              Add Data
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className={styles.subWrapper}>
        <AdminDataBox />
      </Box>
    </Box>
  );
};

export default AdminBox;
