import {
  Box, Heading, Text, Stack, Flex, Badge, Link,
  SimpleGrid, VStack, HStack, Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import data from '../../../data'

const MotionBox = motion(Box)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function About() {
  return (
    <Box id="about" mt={16} as="section">
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Stack spacing={12}>
          {/* Sobre Mí */}
          <MotionBox variants={itemVariants}>
            <Heading
              size="xl"
              mb={6}
              bgGradient="linear(to-r, blue.600, green.400)"
              bgClip="text"
            >
              Sobre Mí
            </Heading>
            <Text
              fontSize="lg"
              lineHeight="tall"
              color="gray.700"
              textAlign="justify"
            >
              {data.aboutMe}
            </Text>
          </MotionBox>

          <Divider />

          {/* Experiencia */}
          <MotionBox variants={itemVariants}>
            <Heading size="xl" mb={6}>
              💼 Experiencia Laboral
            </Heading>
            <Stack spacing={6}>
              {data.workExperience.map((exp, i) => (
                <MotionBox
                  key={i}
                  p={6}
                  borderWidth="1px"
                  borderRadius="xl"
                  borderColor="gray.200"
                  bg="white"
                  boxShadow="md"
                  sx={{ transition: 'all 0.3s' }}
                  _hover={{
                    boxShadow: 'xl',
                    borderColor: 'green.300',
                    transform: 'translateY(-4px)'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    gap={4}
                  >
                    <VStack align="start" flex="1" spacing={3}>
                      <Heading size="md" color="blue.700">
                        {exp.position}
                      </Heading>
                      <HStack>
                        <Text fontSize="md" color="gray.600" fontWeight="semibold">
                          🏢 {exp.company}
                        </Text>
                      </HStack>
                      <Text fontSize="sm" color="gray.600" whiteSpace="pre-line">
                        {exp.description}
                      </Text>
                    </VStack>

                    <VStack align={{ base: 'start', md: 'end' }} spacing={2} minW="150px">
                      <Badge colorScheme="green" fontSize="sm" px={3} py={1} borderRadius="full">
                        {exp.workday}
                      </Badge>
                      <Text fontSize="sm" color="gray.500" fontWeight="medium">
                        📅 {exp.startDate} — {exp.endDate}
                      </Text>
                    </VStack>
                  </Flex>
                </MotionBox>
              ))}
            </Stack>
          </MotionBox>

          <Divider />

          {/* Educación */}
          <MotionBox variants={itemVariants}>
            <Heading size="xl" mb={6}>
              🎓 Educación y Formación
            </Heading>

            <Stack spacing={6}>
              {/* Bootcamp destacado */}
              <Box
                p={6}
                borderWidth="2px"
                borderRadius="xl"
                borderColor="green.300"
                bg="green.50"
                boxShadow="lg"
              >
                <VStack align="start" spacing={4}>
                  <HStack>
                    <Box bg="green.500" px={3} py={1} borderRadius="full">
                      <Text fontSize="xs" fontWeight="bold" color="white">
                        BOOTCAMP
                      </Text>
                    </Box>
                  </HStack>

                  <Box>
                    <Heading size="md" color="green.700" mb={2}>
                      {data.education.bootcamp.name}
                    </Heading>
                    <Text fontWeight="semibold" fontSize="lg" color="gray.700">
                      🚀 {data.education.bootcamp.school}
                    </Text>
                    <Text fontSize="sm" color="gray.600" mt={1}>
                      📅 {data.education.bootcamp.period}
                    </Text>
                    <Text fontSize="md" color="gray.600" mt={3}>
                      {data.education.bootcamp.description}
                    </Text>
                  </Box>

                  <Divider />

                  {/* Certificaciones */}
                  <Box w="full">
                    <Text fontSize="sm" fontWeight="semibold" color="gray.700" mb={3}>
                      📜 Certificaciones obtenidas:
                    </Text>
                    <Stack spacing={2}>
                      {[
                        { label: 'Frontend Development', url: data.education.bootcamp.credential_frontend },
                        { label: 'Backend Development', url: data.education.bootcamp.credential_backend },
                        { label: 'FullStack Development', url: data.education.bootcamp.credential_fullstack },
                      ].map(({ label, url }) => (
                        <HStack key={label} justify="space-between" flexWrap="wrap">
                          <Text fontSize="sm" fontWeight="medium">{label}:</Text>
                          <Link
                            href={url}
                            isExternal
                            color="blue.600"
                            fontWeight="semibold"
                            fontSize="sm"
                            _hover={{ color: 'green.600', textDecoration: 'underline' }}
                          >
                            Ver certificado <ExternalLinkIcon mx="2px" />
                          </Link>
                        </HStack>
                      ))}
                    </Stack>
                  </Box>
                </VStack>
              </Box>

              {/* Otras formaciones */}
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box
                  p={5}
                  borderWidth="1px"
                  borderRadius="xl"
                  borderColor="gray.200"
                  bg="white"
                  boxShadow="md"
                >
                  <Text fontSize="sm" color="gray.500" mb={2}>Educación Básica</Text>
                  <Text fontWeight="semibold" fontSize="md">
                    📚 {data.education.estudies}
                  </Text>
                  <Text fontSize="sm" color="gray.600" mt={1}>
                    {data.education.institute}
                  </Text>
                  <Text fontSize="xs" color="gray.500" mt={1}>
                    {data.education.graduationYear}
                  </Text>
                </Box>

                <Box
                  p={5}
                  borderWidth="1px"
                  borderRadius="xl"
                  borderColor="blue.200"
                  bg="blue.50"
                  boxShadow="md"
                >
                  <Text fontSize="sm" color="gray.500" mb={2}>Formación Actual</Text>
                  <Text fontWeight="semibold" fontSize="md" color="blue.700">
                    💻 Aprendiendo {data.education.actualCourses}
                  </Text>
                  <Text fontSize="sm" color="gray.600" mt={2}>
                    Continúo ampliando mis conocimientos en desarrollo frontend
                  </Text>
                </Box>
              </SimpleGrid>
            </Stack>
          </MotionBox>
        </Stack>
      </MotionBox>
    </Box>
  )
}
