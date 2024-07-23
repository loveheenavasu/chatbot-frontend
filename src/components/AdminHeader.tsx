import React, { useState } from "react";
import {
  Box,
  Heading,
  IconButton,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";
import styles from "../app/adminpanel/admin.module.css";

import axiosInstance from "@/utils/axiosInstance";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { removeLocalStorageItem } from "@/utils/localStorage";

const AdminHeader = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);

  const handleLogout = async () => {
    try {
      setloading(true);
      const response = await axiosInstance.delete(`user/logout`);
      if (response?.data) {
        router.push("/login");
        Cookies.remove("authToken");
        removeLocalStorageItem();
        toast.success(response.data.message);
      }
      setloading(false);
    } catch (error) {
      toast.error("something went wrong");
      setloading(false);
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
            {!loading ? (
              <Text
                fontSize="xl"
                fontWeight="bold"
                cursor="pointer"
                onClick={handleLogout}
              >
                Logout
              </Text>
            ) : (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="sm"
              />
            )}
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
