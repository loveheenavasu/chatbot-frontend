import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import styles from "../app/adminpanel/admin.module.css"

const WebsiteCard = () => {
  return (
    <Box className={styles.fileCardWrapper}>
    <Card className={styles.textSpaceWrapper} align="center">
      <CardHeader>
        <Heading size="md" textAlign={"start"} pt={"0px!important"}>
          {" "}
          Website
        </Heading>
      </CardHeader>
      <CardBody pt={"0px !important"} width={"100%"}>
        <Input placeholder='https://example.com/'/>
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
            {"Fetch links"}
          </Button>
        </Box>
      </CardFooter>
    </Card>
  </Box>
  )
}

export default WebsiteCard