import Head from "next/head";
import Chat from "../components/Chat";
import { Box } from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";

export default function Home() {
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
