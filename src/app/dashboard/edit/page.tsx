'use client'

import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Edit() {

    const router = useRouter()

  return <Box >
    <Heading>Edit</Heading>
    <Button onClick={() => router.back()}>前の画面に戻る</Button>
  </Box>
}