import { Box, Heading, Text, SimpleGrid, VStack, Image, Link, HStack, Icon } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import data from '../../../data'

export default function Projects() {
  return (
    <Box id="projects" mt={16} as="section">
      <Heading size="lg" mb={4}>Proyectos</Heading>
      <Text mb={6}>Estos son algunos de mis proyectos.</Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {data.projects.map((proj, i) => (
          <VStack key={i} p={4} bg="white" boxShadow="md" borderRadius="lg" spacing={4}>
            <Image
              src={proj.preview}
              alt={proj.title}
              borderRadius="md"
              boxSize="260px"
              objectFit="contain"
            />
            <Heading size="md">{proj.title}</Heading>
            <Text textAlign="center">{proj.description}</Text>
            <HStack spacing={4}>
              {proj.livePrev.startsWith('http') ? (
                <Link href={proj.livePrev} isExternal>
                  Live <ExternalLinkIcon mx="2px" />
                </Link>
              ) : (
                <Link onClick={() => alert('Backend, ver con Insomnia/Postman')}>
                  Backend Info
                </Link>
              )}
              <Link href={proj.link} isExternal>
                Código <ExternalLinkIcon mx="2px" />
              </Link>
            </HStack>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}
