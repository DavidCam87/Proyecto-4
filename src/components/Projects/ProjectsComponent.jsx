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
  Tag,
  AspectRatio,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import data from '../../../data';

const MotionBox = motion(Box);

const ProjectCard = ({ proj, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isPrivateRepo = !proj.link.startsWith('http');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <VStack
        h="full"
        p={0}
        bg="white"
        boxShadow="lg"
        borderRadius="xl"
        overflow="hidden"
        spacing={0}
        borderWidth="1px"
        borderColor="gray.200"
        transition="all 0.3s"
        _hover={{
          transform: 'translateY(-8px)',
          boxShadow: '2xl',
          borderColor: 'green.300',
        }}
      >
        {/* Imagen del proyecto */}
        <AspectRatio ratio={16 / 9} w="full">
          <Image
            src={proj.preview}
            alt={proj.title}
            objectFit="cover"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
          />
        </AspectRatio>

        {/* Contenido */}
        <VStack p={6} spacing={4} align="stretch" flex="1">
          <Heading size="md" color="blue.700" noOfLines={2}>
            {proj.title}
          </Heading>

          <Text
            fontSize="sm"
            color="gray.600"
            noOfLines={4}
            flex="1"
          >
            {proj.description}
          </Text>

          {/* Tags si el proyecto está en desarrollo */}
          {proj.description.includes('desarrollo') && (
            <Tag colorScheme="orange" size="sm" w="fit-content">
              🚧 En desarrollo
            </Tag>
          )}

          {/* Botones de acción */}
          <HStack spacing={3} pt={2}>
            {proj.livePrev.startsWith('http') ? (
              <Button
                as={Link}
                href={proj.livePrev}
                isExternal
                colorScheme="green"
                size="sm"
                flex="1"
                leftIcon={<ExternalLinkIcon />}
                _hover={{ textDecoration: 'none' }}
              >
                Ver Demo
              </Button>
            ) : (
              <Button
                colorScheme="gray"
                size="sm"
                flex="1"
                onClick={() => alert('Backend - Usa Insomnia/Postman para probar')}
              >
                Backend 🔧
              </Button>
            )}

            {isPrivateRepo ? (
              <Button
                variant="outline"
                colorScheme="blue"
                size="sm"
                flex="1"
                onClick={onOpen}
                leftIcon={<ExternalLinkIcon />}
              >
                Código
              </Button>
            ) : (
              <Button
                as={Link}
                href={proj.link}
                isExternal
                variant="outline"
                colorScheme="blue"
                size="sm"
                flex="1"
                leftIcon={<ExternalLinkIcon />}
                _hover={{ textDecoration: 'none' }}
              >
                Código
              </Button>
            )}
          </HStack>
        </VStack>
      </VStack>

      {/* Modal para repositorios privados */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent mx={4}>
          <ModalHeader color="blue.700">Repositorio Privado</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="start">
              <Text fontWeight="semibold">📝 Proyecto: {proj.title}</Text>
              <Text color="gray.600">{proj.link}</Text>
              <Box
                p={4}
                bg="blue.50"
                borderRadius="md"
                borderLeft="4px solid"
                borderColor="blue.400"
                w="full"
              >
                <Text fontSize="sm" color="blue.800">
                  💼 Este proyecto contiene código confidencial del cliente.
                  Estaré encantado de discutir la arquitectura, decisiones técnicas
                  y desafíos superados en una entrevista.
                </Text>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Entendido
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

export default function Projects() {
  return (
    <Box id="projects" mt={16} as="section">
      <Heading
        size="xl"
        mb={2}
        bgGradient="linear(to-r, blue.600, green.400)"
        bgClip="text"
      >
        🚀 Proyectos Destacados
      </Heading>
      <Text mb={8} fontSize="lg" color="gray.600">
        Algunos de mis trabajos más recientes y relevantes
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {data.projects.map((proj, i) => (
          <ProjectCard key={i} proj={proj} index={i} />
        ))}
      </SimpleGrid>
    </Box>
  );
}