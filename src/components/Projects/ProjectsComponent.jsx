import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Link,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import data from '../../../data';

const ProjectCard = ({ proj }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack p={4} bg="white" boxShadow="md" borderRadius="lg" spacing={4} justifyContent="space-between">
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

          {proj.link.startsWith('http') ? (
            <Link href={proj.link} isExternal>
              Código <ExternalLinkIcon mx="2px" />
            </Link>
          ) : (
            <Link onClick={onOpen} cursor="pointer">
              Código <ExternalLinkIcon mx="2px" />
            </Link>
          )}
        </HStack>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Información del Repositorio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{proj.link}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default function Projects() {
  return (
    <Box id="projects" mt={16} as="section">
      <Heading size="lg" mb={4}>
        Proyectos
      </Heading>
      <Text mb={6}>Estos son algunos de mis proyectos.</Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {data.projects.map((proj, i) => (
          <ProjectCard key={i} proj={proj} />
        ))}
      </SimpleGrid>
    </Box>
  );
}