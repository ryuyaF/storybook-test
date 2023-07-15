'use client'

import { Box, ChakraProvider } from '@chakra-ui/react'
import './globals.css'
import { Inter } from 'next/font/google'
import { CacheProvider } from '@chakra-ui/next-js'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <CacheProvider>
          <ChakraProvider>
            <Box w='100dvh' h='100dvh'>
              {children}
            </Box>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
