'use client'

import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter()

  return <>
    <Heading>Dashboard</Heading>
    <Box>
      <Button onClick={() => router.push('/dashboard/register')}>go to Register</Button>
      <Button onClick={() => router.push('/dashboard/edit')}>go to edit</Button>
    </Box>
    <Button onClick={() => router.replace('/')}>go to top</Button>
  </>
}