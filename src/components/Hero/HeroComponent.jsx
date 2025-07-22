import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react'
import data from '../../../data'

export default function Hero() {
  return (
    <Flex
      id="hero"
      mt={16}
      align="center"
      justify="space-between"
      wrap={{ base: 'column', md: 'row' }}
      px={4}
      py={8}

    >
      <Box maxW="lg" textAlign={{ base: 'center', md: 'left' }}>
        <Heading as="h2" size="xl">
          Hola, soy{' '}
          <Text
            as="span"
            bgGradient="linear(to-r, blue.800, green.400)"
            bgClip="text"
          >
            {data.name}
          </Text>
        </Heading>
        <Text mt={4}>Programador FullStack y estudiante de Angular.</Text>
      </Box>

      <Box
        // este Box crea el “borde degradado”
        p="4px"
        bgGradient="linear(to-r, #002c5c, #bbd501)"
        borderRadius="full"
      >
        <Image
          src={data.avatar}
          alt="Avatar"
          borderRadius="full"
          boxSize={{ base: '240px', md: '300px' }}
          objectFit="cover"
        />
      </Box>
    </Flex>
  )
}
