import React from "react";
import { Box, Heading, IconButton, Spacer, Text } from "@chakra-ui/react";
import styles from "../app/adminpanel/admin.module.css";

import axiosInstance from "@/utils/axiosInstance";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AdminHeader = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.delete(`user/logout`);
      if (response?.data) {
        router.push("/login");
        Cookies.remove("authToken");
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  return (
    <Box>
      <Box className={styles.adminHeaderWrapper}>
        <Box className={styles.subheadingAdmin}>
          <Heading fontSize="xl" fontWeight="bold">
            Chat BOT
          </Heading>
          <Spacer />
          <Box>
            {/* <Link href={""}>Home</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Services</Link> */}
            <Text
              fontSize="xl"
              fontWeight="bold"
              cursor="pointer"
              onClick={handleLogout}
            >
              Logout
            </Text>
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
