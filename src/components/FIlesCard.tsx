"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import styles from "../app/adminpanel/admin.module.css";
import { MdOutlineFileUpload } from "react-icons/md";

const   FIlesCard = () => {
  const fileInputRef: any = useRef(null);

  const handleUpload = (e: any) => {
    console.log(e.target.files, "eghrerewrjew");
  };

  const handleClick = () => {
    fileInputRef?.current?.click();
  };
  return (
    <Box className={styles.fileCardWrapper}>
      <Card className={styles.textSpaceWrapper} align="center">
        <CardHeader>
          <Heading size="md" textAlign={"start"} pt={"0px!important"}>
            {" "}
            Files
          </Heading>
        </CardHeader>
        <CardBody pt={"0px !important"} width={"100%"}>
          <Box className={styles.cardWrapper} height={"100px"}>
            <Card width={"100%"} onClick={handleClick}>
              <CardBody className={styles.fileWrapper}>
                <MdOutlineFileUpload fontSize={20} />
                Click to select files
              </CardBody>
            </Card>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onClick={handleUpload}
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
            <Button
              sx={{ color: "white", backgroundColor: "#5188b9" }}
              colorScheme="blue"
            >
              {"Upload file"}
            </Button>
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default FIlesCard;
