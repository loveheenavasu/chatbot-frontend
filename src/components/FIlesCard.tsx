"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../app/adminpanel/admin.module.css";
import { MdOutlineFileUpload } from "react-icons/md";
import axiosInstance from "@/utils/axiosInstance";
import { DeleteIcon } from "@chakra-ui/icons";
import { toast } from "react-toastify";
import { FileUploader } from "react-drag-drop-files";

const FIlesCard = () => {
  const [file, setFile] = useState<any>({});
  const [data, setData] = useState<any>(null);
  const [loading, setIsLoading] = useState(true);
  const [deleteFileLoading, setDeleteFileLoading] = useState("");
  const [isFileUpload, setIsFileUpload] = useState(false);

  const handleUpload = (file: any) => {
    setFile(file);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/files`
      );
      setData(response?.data?.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleDeleteFile = async (id: string, docNo: number) => {
    try {
      const response = await axiosInstance.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/files/?documentId=${id}&docNo=${docNo}`
      );
      if (response?.data) {
        toast.success(response?.data?.message);
      }

      setDeleteFileLoading("");
      fetchData();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setDeleteFileLoading("");
    }
  };

  const handleUploadFile = async () => {
    try {
      if (Object.keys(file)) {
        toast.error("No file selected");
        return;
      }
      setIsFileUpload(true);
      const token = localStorage.getItem("authToken");
      const headers = new Headers();
      headers.append("token", `Bearer ${token}`);
      const formData = new FormData();
      formData.append("file", file as any);

      const response = await axiosInstance.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/upload`,
        formData
      );
      if (response.data) {
        toast.success(response?.data?.message);
        setFile({});
        fetchData();
      }

      setIsFileUpload(false);
    } catch (err) {
      setIsFileUpload(false);

      console.error("Upload failed", err);
    }
  };
  const fileTypes = ["DOC", "PDF", "DOCX", "TXT", "CSV"];

  return (
    <Box className={styles.fileCardWrapper}>
      <Card className={styles.textSpaceWrapper} align="center">
        <CardHeader>
          <Heading size="md" textAlign={"start"} pt={"0px!important"}>
            {" "}
            Files
          </Heading>
        </CardHeader>
        <CardBody
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          pt={"0px !important"}
          width={"100%"}
        >
          <FileUploader
            handleChange={handleUpload}
            name="file"
            types={fileTypes}
            onDrop={handleUpload}
          />
        </CardBody>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"10px"}
        >
          <Button
            sx={{ color: "white", backgroundColor: "#5188b9" }}
            colorScheme="blue"
            onClick={handleUploadFile}
            isLoading={isFileUpload}
          >
            {"Upload file"}
          </Button>
        </Box>

        <CardFooter flexDirection={"column"} width={"100%"}>
          <Box>
            {file.name && (
              <>
                <Text fontWeight={"bold"} textAlign={"center"}>
                  Attached Files
                </Text>
                <Text textAlign={"center"} fontWeight={"bold"}>
                  {file?.name}
                </Text>
              </>
            )}
          </Box>

          <Box>
            {!loading ? (
              <>
                <Divider padding={1} />
                {data?.length > 0 && (
                  <Text fontWeight={"bold"} textAlign={"center"} padding={4}>
                    Already Selected File
                  </Text>
                )}

                {data?.map((item: any) => {
                  return (
                    <Flex
                      width={"80%"}
                      margin={"auto"}
                      alignItems="center"
                      gap="2"
                      padding={2}
                    >
                      <Box p="2">
                        <Heading size="md">{item.fileName}</Heading>
                      </Box>
                      <Spacer />
                      <ButtonGroup gap="2">
                        <Button
                          colorScheme="blue"
                          isLoading={deleteFileLoading === item?._id}
                          onClick={() => {
                            setDeleteFileLoading(item?._id);
                            handleDeleteFile(item.documentId, item?.docNo);
                          }}
                        >
                          <DeleteIcon />
                        </Button>
                      </ButtonGroup>
                    </Flex>
                  );
                })}
              </>
            ) : (
              <Box display={"flex"} justifyContent={"center"}>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="md"
                />
              </Box>
            )}
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default FIlesCard;
