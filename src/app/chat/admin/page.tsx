"use client";
import AdminHeader from "@/components/AdminHeader";
import AdminSideBar from "@/components/AdminSideBar";
import AdminTextSpace from "@/components/AdminTextSpace";
import FIlesCard from "@/components/FIlesCard";
import WebsiteCard from "@/components/WebsiteCard";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../admin/admin.module.css";
import SourceCard from "@/components/SourceCard";
import { useRouter } from "next/navigation";

const Admin = () => {
  const [activeButton, setActive] = useState<string>("Text");
  const [inputData, setInputData] = useState<string>("");
  //   const router = useRouter();

  //   const authToken = localStorage.getItem("authToken");
  //   useEffect(() => {
  //     if (!authToken) {
  //       router.push("/login");
  //     }
  //   }, [authToken]);

  const renderCards = () => {
    switch (activeButton) {
      case "Website":
        return <WebsiteCard />;
      case "Files":
        return <FIlesCard />;
      default:
        return (
          <AdminTextSpace inputData={inputData} setInputData={setInputData} />
        );
    }
  };

  return (
    <>
      <AdminHeader />
      <Box height={"80px"}></Box>
      <Box display={"flex"} className={styles.adminWrapper}>
        <Box className={styles.adminLeftWrapper}>
          <AdminSideBar activeButton={activeButton} setActive={setActive} />
        </Box>
        <Box className={styles.adminCenterWrapper}>{renderCards()}</Box>
        <Box className={styles.adminRightWrapper}>
          <SourceCard inputData={inputData} />
        </Box>
      </Box>
    </>
  );
};

export default Admin;
