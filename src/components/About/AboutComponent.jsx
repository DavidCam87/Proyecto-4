import { Box, Heading, Text, Stack, Flex, Badge, Link } from '@chakra-ui/react'
import data from '../../../data'

export default function About() {
  return (
    <Box id="about" mt={16} as="section">
      <Stack spacing={8}>
        {/* Sobre Mi */}
        <Box>
          <Heading size="lg">Sobre Mi</Heading>
          <Text mt={4}>{data.aboutMe}</Text>
        </Box>

        {/* Experiencia */}
        <Box>
          <Heading size="lg" mt={16}>Experiencia de Trabajo</Heading>
          <Stack spacing={4} mt={4}>{data.workExperience.map((exp, i) => (
            <Flex key={i} justify="space-between" p={4} borderWidth="1px" borderRadius="md">
              <Box flex="1" >
                <Text fontWeight="bold">{exp.position}</Text>
                <Text fontSize="sm" color="gray.600">🏢 {exp.company}</Text>
                <Text fontSize="sm" color="gray.600">📝 {exp.description}</Text>
              </Box>
              <Box textAlign="right">
                <Badge colorScheme="green">{exp.workday}</Badge>
                <Text fontSize="sm" color="gray.500">
                  📅 {exp.startDate} – {exp.endDate}
                </Text>
              </Box>
            </Flex>
          ))}
          </Stack>
        </Box>

        {/* Educación */}
        <Box>
          <Heading size="lg" mt={16}>Educación</Heading>
          <Stack spacing={3} mt={4}>
            <Text>📚 {data.education.estudies} en {data.education.institute} ({data.education.graduationYear})</Text>
            <Text>🎓 Curso: {data.education.relevantCourses}</Text>
            <Text>💻 Actualmente: {data.education.actualCourses}</Text>
            <Text>
              Certificación FrontEnd:{' '}
              <Link
                href={data.education.credential}
                isExternal
                transition="all 0.2s ease-in-out"
                _hover={{ color: 'green.400', textDecoration: 'underline', fontSize: 'lg' }}
              >
                Ver
              </Link>
            </Text>
            <Text>
              Certificación BackEnd:{' '}
              <Link
                href={data.education.credential2}
                isExternal
                transition="all 0.2s ease-in-out"
                _hover={{ color: 'green.400', textDecoration: 'underline', fontSize: 'lg' }}
              >
                Ver
              </Link>
            </Text>
            <Text>
              Certificación Fulltack:{' '}
              <Link
                href={data.education.credential3}
                isExternal
                transition="all 0.2s ease-in-out"
                _hover={{ color: 'green.400', textDecoration: 'underline', fontSize: 'lg' }}
              >
                Ver
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
