"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../app/adminpanel/admin.module.css";
import axiosInstance from "@/utils/axiosInstance";
import { toast } from "react-toastify";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";

const AdminTextSpace = ({ inputData, setInputData }: any) => {
  const [isEditId, setIsEditId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const userId = getLocalStorageItem("userId");
      const response = await axiosInstance.get(`/user/text/${userId}`);
      if (response.data) {
        setLocalStorageItem("documentId", response.data.documentId);
        // localStorage.setItem("documentId", response.data.documentId);
        setInputData(response?.data?.text);
        setIsEditId(response?.data?._id);
      }
    } catch (error) {
      console.log(error, "23423424234");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleAdd = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(`/user/text`, {
        text: inputData,
      });

      if (response?.data) {
        toast(response?.data?.messgage);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error adding data:", error);
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.patch(`/user/text`, {
        text: inputData,
        _id: isEditId,
      });
      if (response?.data) {
        toast.success(response?.data?.message);
      }
      setLoading(false);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  };

  // const handleUpdate = async () => {
  //   const response = await axiosInstance.patch(`/user/text`, {
  //     text: inputData,
  //     _id: isEditId,
  //   });
  //   fetchData();
  // };

  return (
    <Box>
      <Card className={styles.textSpaceWrapper} align="center">
        <CardHeader>
          <Heading size="md" textAlign={"start"} pt={"0px!important"}>
            Text
          </Heading>
        </CardHeader>
        <CardBody pt={"0px !important"} width={"100%"}>
          <Box>
            <Textarea
              placeholder="Enter Text"
              onChange={(e) => setInputData(e.target.value)}
              height={300}
              value={inputData}
            />
          </Box>
        </CardBody>
        <CardFooter>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={"10px"}
          >
            <Text fontSize={12}>
              {inputData ? inputData?.length : 0} characters
            </Text>
            <Button
              sx={{ color: "white", backgroundColor: "#5188b9" }}
              onClick={isEditId ? handleUpdate : handleAdd}
              isLoading={loading}
              colorScheme="blue"
            >
              {isEditId ? "Update data" : "Add data"}
            </Button>
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default AdminTextSpace;
