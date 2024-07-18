import { Box, Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import React from "react";
import styles from "../app/adminpanel/admin.module.css";
import Link from "next/link";

const AdminHeader = () => {
  return (
    <Box>
      <Box className={styles.adminHeaderWrapper}>
        <Box className={styles.subheadingAdmin}>
          <Heading fontSize="xl" fontWeight="bold">
            Chat BOT
          </Heading>
          <Spacer />
          <Box className={styles.navbar}>
            <Link href={""}>Home</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Services</Link>
            <Link href={""}>Contact</Link>
          </Box>
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            //   icon={<HamburgerIcon />}
            bg="transparent"
            color="white"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminHeader;
