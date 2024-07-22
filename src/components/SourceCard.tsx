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

import { useState } from "react";

const SourceCard = ({ inputData }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const documentID = localStorage.getItem("documentId");
  return (
    <Box>
      <Card>
        <CardHeader>
          <Heading size="md">Sources</Heading>
        </CardHeader>
        <CardBody>
          <Heading size={"sm"}>Total detected characters</Heading>
          <Text marginBottom={6}>{inputData.length}/4,00,000 limit</Text>
          {inputData && !isOpen && (
            <Button marginBottom={4} onClick={() => setIsOpen(true)}>
              Generate Link
            </Button>
          )}

          {isOpen && (
            <Flex>
              <Link
                href={`http://localhost:3000/chatbot?id=${documentID}`}
                isExternal
              >
                <Text fontWeight="bold">
                  http://localhost:3000/chatbot?id={documentID}
                </Text>
              </Link>

              <IconButton
                aria-label="Copy"
                icon={<CopyIcon />}
                onClick={() => {
                  navigator.clipboard.writeText(
                    `http://localhost:3000/chatbot?id=${documentID}`
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
