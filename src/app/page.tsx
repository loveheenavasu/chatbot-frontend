import Head from "next/head";
import Chat from "../components/Chat";
import { Box } from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";

import { redirect } from "next/navigation";
export default function Home() {
  // Logic to determine if a redirect is needed
  // const accessDenied = true;
  // if (accessDenied) {
  //   redirect("/login");
  // } else {
  //   redirect("/chat/admin");
  // }

  return (
    <div>
      <Head>
        <title>Chatbot</title>
        <meta name="description" content="Chatbot for my site" />
      </Head>
      <main>
        <Box>
          <div></div>
        </Box>
      </main>
    </div>
  );
}
