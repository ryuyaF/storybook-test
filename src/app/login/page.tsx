'use client'

import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter()

  return <Box >
    <Heading>Login</Heading>
    <Button onClick={() => router.replace('/')}>Topに戻る</Button>
  </Box>
}