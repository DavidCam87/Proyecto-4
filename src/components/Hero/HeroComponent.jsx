import { Flex, Box, Heading, Text, Image, HStack, Button, Badge } from '@chakra-ui/react'
import { DownloadIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import data from '../../../data'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

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
      {/* Texto izquierdo */}
      <MotionBox
        maxW="lg"
        textAlign={{ base: 'center', md: 'left' }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Badge de disponibilidad */}
        <HStack
          mb={4}
          justify={{ base: 'center', md: 'flex-start' }}
        >
          <Box
            display="inline-flex"
            alignItems="center"
            gap={2}
            bg="green.50"
            border="1px solid"
            borderColor="green.200"
            px={3}
            py={1}
            borderRadius="full"
          >
            <span className="available-dot" />
            <Text fontSize="xs" fontWeight="semibold" color="green.700" letterSpacing="wide">
              DISPONIBLE PARA TRABAJAR
            </Text>
          </Box>
        </HStack>

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

        {/* CTAs */}
        <HStack
          mt={8}
          spacing={4}
          justify={{ base: 'center', md: 'flex-start' }}
          wrap="wrap"
        >
          <Button
            as="a"
            href={data.cv}
            download
            size="lg"
            colorScheme="green"
            leftIcon={<DownloadIcon />}
            boxShadow="md"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
              textDecoration: 'none'
            }}
            transition="all 0.25s"
          >
            Descargar CV
          </Button>

          <Button
            size="lg"
            variant="outline"
            colorScheme="blue"
            rightIcon={<ChevronDownIcon />}
            onClick={scrollToProjects}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'md'
            }}
            transition="all 0.25s"
          >
            Ver proyectos
          </Button>
        </HStack>
      </MotionBox>

      {/* Foto */}
      <MotionBox
        position="relative"
        mx={{ base: 'auto', md: 0 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Círculos decorativos — usan clases CSS globales para el keyframe */}
        <Box
          className="pulse-glow"
          position="absolute"
          top="-10px"
          right="-10px"
          width="120px"
          height="120px"
          borderRadius="full"
          bgGradient="linear(to-r, blue.400, green.300)"
          filter="blur(20px)"
          pointerEvents="none"
        />
        <Box
          className="pulse-glow-delayed"
          position="absolute"
          bottom="-10px"
          left="-10px"
          width="100px"
          height="100px"
          borderRadius="full"
          bgGradient="linear(to-r, green.400, blue.300)"
          filter="blur(20px)"
          pointerEvents="none"
        />

        {/* Avatar con borde degradado */}
        <Box
          p="5px"
          bgGradient="linear(to-r, #002c5c, #bbd501)"
          borderRadius="full"
          transition="all 0.3s ease"
          _hover={{
            transform: 'scale(1.05)',
            boxShadow: '0 8px 30px rgba(0, 44, 92, 0.3)'
          }}
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
    </MotionFlex>
  )
}
