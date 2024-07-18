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

const AdminTextSpace = () => {
  const [inputData, setInputData] = useState<string>("");
  const [isEditId, setIsEditId] = useState<string>("");
  const [dataId , setDataId] = useState<string>(" ")

  console.log(inputData, "inputDasdfdsfta");

  const fetchData = async () => {
    const response = await axiosInstance.get(`/user/text`);
    console.log(response?.data, "resposdnseresponse");
    setInputData(response?.data?.text);
    setIsEditId(response?.data?._id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async () => {
    const response = await axiosInstance.post(`/user/text`, {
      text: inputData,
    });

    fetchData()
    setDataId
    console.log(response, "response");
  };

  const handleUpdate = async () => {
    const response = await axiosInstance.patch(`/user/text`, {
      text: inputData,
      _id: isEditId,
    });
    console.log(response, "responseresponse");
    fetchData()
  };

  return (
    <Box >
      <Card className={styles.textSpaceWrapper} align="center">
        <CardHeader>
          <Heading size="md" textAlign={"start"} pt={"0px!important"}>
            {" "}
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
