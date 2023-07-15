'use client'

import { Box, Button, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import './provider'

export default function Home() {
  const router = useRouter()

  return <Box>
    <Heading size='4xl'>Top page</Heading>
    <Button onClick={() => router.push('/dashboard')}>go to Dashboard</Button>
    <Button onClick={() => router.push('/login')}>go to Login</Button>
  </Box>
}
