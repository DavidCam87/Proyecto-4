import { Box, Text, Flex } from '@chakra-ui/react'
import data from '../../../data'

export default function Footer() {
  return (
    <Box as="footer" bg="gray.100" py={4} mt={12}>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
        <Text>CopyRight© 2024 DCI - All Rights Reserved</Text>
        <Text>Desarrollado por {data.name} con pasión y paciencia</Text>
      </Flex>
    </Box>
  )
}
