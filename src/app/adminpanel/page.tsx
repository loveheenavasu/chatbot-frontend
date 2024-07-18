"use client"
import AdminBox from "@/components/AdminBox";
import AdminHeader from "@/components/AdminHeader";
import AdminTextSpace from "@/components/AdminTextSpace";
import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../adminpanel/admin.module.css";
import AdminSideBar from "@/components/AdminSideBar";
import SourceCard from "@/components/SourceCard";
import { CiFileOn, CiGlobe, CiTextAlignLeft } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import FIlesCard from "@/components/FIlesCard";
import WebsiteCard from "@/components/WebsiteCard";

const Admin = () => {

  const [activeButton , setActive] = useState<string>("Text")
  console.log(activeButton,"activeButton")

  const renderCards = () => {
    switch(activeButton){
      case "Website":
        return (<WebsiteCard/>);
      case "Files":
    
        return (<FIlesCard />);  
      default:

        return (<AdminTextSpace />)
    }
  }
  
  return (
    <>
      <AdminHeader />
      <Box height={"80px"}>


      </Box>
      {/* <AdminBox/> */}
      <Box display={"flex"} className={styles.adminWrapper}>
        <Box className={styles.adminLeftWrapper}>
          <AdminSideBar activeButton={activeButton} setActive={setActive} />
        </Box>
        <Box className={styles.adminCenterWrapper}>
       { renderCards()}
        </Box>
        <Box className={styles.adminRightWrapper} > 
        <SourceCard/>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
