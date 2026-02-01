import { Box, Text, Flex, Link, HStack, Divider } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import data from '../../../data'

const MotionBox = motion(Box)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <MotionBox
      as="footer"
      bg="gray.50"
      py={8}
      mt={16}
      borderTop="1px solid"
      borderColor="gray.200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        maxW="container.xl"
        mx="auto"
        px={4}
        gap={4}
      >
        <Text fontSize="sm" color="gray.600">
          © {currentYear} {data.name} - Todos los derechos reservados
        </Text>

        <HStack spacing={2} fontSize="sm" color="gray.600">
          <Text>Desarrollado con</Text>
          <Text color="red.500">❤️</Text>
          <Text>y</Text>
          <Text fontWeight="semibold" color="blue.600">React</Text>
        </HStack>

        <HStack spacing={6}>
          <Link
            href="#hero"
            fontSize="sm"
            color="gray.600"
            _hover={{ color: 'green.500' }}
          >
            Volver arriba ↑
          </Link>
        </HStack>
      </Flex>

      <Divider my={4} maxW="container.xl" mx="auto" />

      <Text
        textAlign="center"
        fontSize="xs"
        color="gray.500"
        maxW="container.xl"
        mx="auto"
        px={4}
      >
        Portfolio diseñado y desarrollado desde cero utilizando React, Chakra UI y Framer Motion
      </Text>
    </MotionBox>
  )
}