import {
  Box, Heading, Text, VStack, HStack, Link, Image,
  Button, SimpleGrid, Icon
} from '@chakra-ui/react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import data from '../../../data'

const MotionBox = motion(Box)

const social = [
  {
    name: 'GitHub',
    icon: '/assets/GitHub.svg',
    url: data.github,
    color: 'gray.700'
  },
  {
    name: 'Twitter/X',
    icon: '/assets/X.svg',
    url: data.twitter,
    color: 'blue.400'
  },
  {
    name: 'LinkedIn',
    icon: '/assets/linkedin.svg',
    url: data.linkedin,
    color: 'blue.600'
  }
]

export default function Contact() {
  return (
    <MotionBox
      id="contact"
      mt={16}
      as="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box
        p={{ base: 8, md: 12 }}
        bg="white"
        borderRadius="2xl"
        boxShadow="2xl"
        borderWidth="1px"
        borderColor="gray.200"
        textAlign="center"
      >
        <Heading
          size="xl"
          mb={3}
          bgGradient="linear(to-r, blue.600, green.400)"
          bgClip="text"
        >
          📬 ¿Hablamos?
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={8}>
          Estoy disponible para nuevos proyectos y oportunidades
        </Text>

        {/* Información de contacto principal */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={6}
          mb={8}
          maxW="600px"
          mx="auto"
        >
          <MotionBox
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={`mailto:${data.email}`}
              _hover={{ textDecoration: 'none' }}
            >
              <HStack
                p={4}
                bg="blue.50"
                borderRadius="lg"
                spacing={3}
                justify="center"
                transition="all 0.3s"
                _hover={{ bg: 'blue.100', boxShadow: 'md' }}
              >
                <Icon as={EmailIcon} boxSize={5} color="blue.600" />
                <VStack spacing={0} align="start">
                  <Text fontSize="xs" color="gray.500">Email</Text>
                  <Text fontSize="sm" fontWeight="semibold" color="blue.700">
                    {data.email}
                  </Text>
                </VStack>
              </HStack>
            </Link>
          </MotionBox>

          <MotionBox
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={`tel:${data.phone}`}
              _hover={{ textDecoration: 'none' }}
            >
              <HStack
                p={4}
                bg="green.50"
                borderRadius="lg"
                spacing={3}
                justify="center"
                transition="all 0.3s"
                _hover={{ bg: 'green.100', boxShadow: 'md' }}
              >
                <Icon as={PhoneIcon} boxSize={5} color="green.600" />
                <VStack spacing={0} align="start">
                  <Text fontSize="xs" color="gray.500">Teléfono</Text>
                  <Text fontSize="sm" fontWeight="semibold" color="green.700">
                    {data.phone}
                  </Text>
                </VStack>
              </HStack>
            </Link>
          </MotionBox>
        </SimpleGrid>

        {/* Redes sociales */}
        <VStack spacing={4}>
          <Text fontSize="md" color="gray.600" fontWeight="medium">
            Encuéntrame también en:
          </Text>
          <HStack spacing={6} justify="center">
            {social.map((s, i) => (
              <MotionBox
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={s.url}
                  isExternal
                  _hover={{ textDecoration: 'none' }}
                >
                  <VStack spacing={2}>
                    <Box
                      p={3}
                      bg="gray.50"
                      borderRadius="lg"
                      boxShadow="md"
                      transition="all 0.3s"
                      _hover={{
                        bg: 'gray.100',
                        boxShadow: 'lg'
                      }}
                    >
                      <Image
                        boxSize="35px"
                        src={s.icon}
                        alt={s.name}
                        filter="grayscale(0%)"
                      />
                    </Box>
                    <Text fontSize="xs" color="gray.500">
                      {s.name}
                    </Text>
                  </VStack>
                </Link>
              </MotionBox>
            ))}
          </HStack>
        </VStack>

        {/* CTA adicional */}
        <Box mt={8}>
          <Button
            as={Link}
            href={`mailto:${data.email}`}
            size="lg"
            colorScheme="green"
            leftIcon={<EmailIcon />}
            _hover={{ textDecoration: 'none', transform: 'translateY(-2px)' }}
            transition="all 0.3s"
            boxShadow="md"
          >
            Enviar un mensaje
          </Button>
        </Box>
      </Box>
    </MotionBox>
  )
}