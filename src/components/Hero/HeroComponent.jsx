import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import data from '../../../data'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

export default function Hero() {
  return (
    <MotionFlex
      id="hero"
      mt={{ base: 20, md: 24 }}
      align="center"
      justify="space-between"
      gap={8}
      wrap={{ base: 'wrap-reverse', md: 'nowrap' }}
      px={4}
      py={8}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <MotionBox
        maxW="lg"
        textAlign={{ base: 'center', md: 'left' }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Heading as="h1" size="2xl" lineHeight="1.2">
          Hola, soy{' '}
          <Text
            as="span"
            bgGradient="linear(to-r, blue.600, green.400)"
            bgClip="text"
            display="inline-block"
          >
            {data.name}
          </Text>
        </Heading>
        <Text mt={6} fontSize="xl" color="gray.600">
          Desarrollador FullStack especializado en MERN
        </Text>
        <Text mt={2} fontSize="md" color="gray.500">
          Creando experiencias web modernas y funcionales
        </Text>
      </MotionBox>

      <MotionBox
        position="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Círculos decorativos animados */}
        <Box
          position="absolute"
          top="-10px"
          right="-10px"
          width="120px"
          height="120px"
          borderRadius="full"
          bgGradient="linear(to-r, blue.400, green.300)"
          opacity="0.2"
          filter="blur(20px)"
          animation="pulse 3s ease-in-out infinite"
        />
        <Box
          position="absolute"
          bottom="-10px"
          left="-10px"
          width="100px"
          height="100px"
          borderRadius="full"
          bgGradient="linear(to-r, green.400, blue.300)"
          opacity="0.2"
          filter="blur(20px)"
          animation="pulse 3s ease-in-out infinite 1.5s"
        />

        {/* Borde degradado con efecto hover */}
        <Box
          p="5px"
          bgGradient="linear(to-r, #002c5c, #bbd501)"
          borderRadius="full"
          transition="all 0.3s ease"
          _hover={{ transform: 'scale(1.05)', boxShadow: '0 8px 30px rgba(0, 44, 92, 0.3)' }}
        >
          <Image
            src={data.avatar}
            alt={`${data.name} - Desarrollador FullStack`}
            borderRadius="full"
            boxSize={{ base: '240px', md: '320px' }}
            objectFit="cover"
            loading="eager"
            border="4px solid white"
          />
        </Box>
      </MotionBox>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }
      `}</style>
    </MotionFlex>
  )
}