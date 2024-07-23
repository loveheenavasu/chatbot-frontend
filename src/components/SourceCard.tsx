"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { toast } from "react-toastify";

import { useState, useEffect } from "react";
import { getLocalStorageItem } from "@/utils/localStorage";
import { useRouter } from "next/navigation";

const SourceCard = ({ inputData }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const documentID = getLocalStorageItem("documentId");
  const authToken = getLocalStorageItem("authToken");
  useEffect(() => {
    if (!authToken) {
      router.push("/login");
    }
  }, [authToken]);


  return (
    <Box>
      <Card>
        <CardHeader>
          <Heading size="md">Sources</Heading>
        </CardHeader>
        <CardBody>
          <Heading size={"sm"}>Total detected characters</Heading>
          <Text marginBottom={6}>{inputData?.length}</Text>
          {!inputData && !isOpen && (
            <Button marginBottom={4} onClick={() => setIsOpen(true)}>
              Generate Link
            </Button>
          )}

          {inputData && (
            <Flex>
              <Link
                href={`${process.env.NEXT_PUBLIC_LIVE_URL}/chatbot/${documentID}`}
                isExternal
              >
                <Text fontWeight="bold">
                  {`${process.env.NEXT_PUBLIC_LIVE_URL}/chatbot/${documentID}`}
                </Text>
              </Link>

              <IconButton
                aria-label="Copy"
                icon={<CopyIcon />}
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${process.env.NEXT_PUBLIC_LIVE_URL}/chatbot/${documentID}`
                  );
                  toast.success("Text copied");
                }}
              />
            </Flex>
          )}
        </CardBody>
      </Card>
    </Box>
  );
};

export default SourceCard;
