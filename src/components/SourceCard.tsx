"use client"
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "../app/adminpanel/admin.module.css";
import { useRouter } from "next/navigation";

const SourceCard = () => {
    const router = useRouter()
  return (
    <Box>
      <Card>
        <CardHeader>
          <Heading size="md">Sources</Heading>
        </CardHeader>
        <CardBody>
          <Heading size={"sm"}>Total detected characters</Heading>
          <Text>40/4,00,000 limit</Text>
        </CardBody>
        <CardFooter>
          <Button onClick={() => router.push("/chatbot")} className={styles.retrain}>Lets Chat</Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default SourceCard;
