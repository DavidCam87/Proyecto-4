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
  Collapse,
  Flex,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { useState } from 'react'
import data from '../../../data'

const MotionBox = motion(Box)

// ─────────────────────────────────────────────
// Tarjeta de proyecto
// ─────────────────────────────────────────────
const ProjectCard = ({ proj, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isPrivateRepo = !proj.link.startsWith('http')
  const isBackend = proj.livePrev === 'BackEnd'
  const isInProgress = proj.description.toLowerCase().includes('en desarrollo')

  return (
    <MotionBox
      h="full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
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
        {/* Imagen */}
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

          <Text fontSize="sm" color="gray.600" noOfLines={4} flex="1">
            {proj.description}
          </Text>

          {/* Tags de tecnología */}
          {proj.tags && (
            <Wrap spacing={1}>
              {proj.tags.map((tag) => (
                <WrapItem key={tag}>
                  <Tag size="sm" colorScheme="blue" variant="subtle">
                    {tag}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          )}

          {/* Badge estado */}
          {isInProgress && (
            <Tag colorScheme="orange" size="sm" w="fit-content">
              🚧 En desarrollo
            </Tag>
          )}

          {/* Botones */}
          <HStack spacing={3} pt={2}>
            {isBackend ? (
              <Button
                colorScheme="gray"
                size="sm"
                flex="1"
                onClick={() => alert('Backend — Usa Insomnia/Postman para probarlo')}
              >
                Backend 🔧
              </Button>
            ) : (
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
            )}

            {isPrivateRepo ? (
              <Button
                variant="outline"
                colorScheme="blue"
                size="sm"
                flex="1"
                onClick={onOpen}
              >
                Privado 🔒
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

      {/* Modal repo privado */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent mx={4}>
          <ModalHeader color="blue.700">Repositorio Privado</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="start">
              <Text fontWeight="semibold">📝 {proj.title}</Text>
              <Box
                p={4}
                bg="blue.50"
                borderRadius="md"
                borderLeft="4px solid"
                borderColor="blue.400"
                w="full"
              >
                <Text fontSize="sm" color="blue.800">
                  {proj.link}
                </Text>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>Entendido</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MotionBox>
  )
}

// ─────────────────────────────────────────────
// Sección principal
// ─────────────────────────────────────────────
export default function Projects() {
  const [showTraining, setShowTraining] = useState(false)

  return (
    <Box id="projects" mt={16} as="section">
      {/* Proyectos profesionales */}
      <Heading
        size="xl"
        mb={2}
        bgGradient="linear(to-r, blue.600, green.400)"
        bgClip="text"
      >
        🚀 Proyectos Destacados
      </Heading>
      <Text mb={8} fontSize="lg" color="gray.600">
        Trabajos reales para clientes y proyectos freelance propios
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {data.professionalProjects.map((proj, i) => (
          <ProjectCard key={proj.title} proj={proj} index={i} />
        ))}
      </SimpleGrid>

      {/* Separador — Proyectos de formación */}
      <Box mt={16}>
        <Flex
          align="center"
          gap={4}
          cursor="pointer"
          onClick={() => setShowTraining(prev => !prev)}
          _hover={{ opacity: 0.8 }}
          transition="opacity 0.2s"
          mb={4}
        >
          <Heading size="lg" color="gray.500">
            📚 Proyectos de Formación
          </Heading>
          <Button
            variant="ghost"
            colorScheme="gray"
            size="sm"
            rightIcon={showTraining ? <ChevronUpIcon /> : <ChevronDownIcon />}
          >
            {showTraining ? 'Ocultar' : 'Ver todos'}
          </Button>
        </Flex>

        <Text fontSize="md" color="gray.500" mb={6}>
          Ejercicios y clones realizados durante el bootcamp para afianzar conocimientos
        </Text>

        <Collapse in={showTraining} animateOpacity>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {data.trainingProjects.map((proj, i) => (
              <ProjectCard key={proj.title} proj={proj} index={i} />
            ))}
          </SimpleGrid>
        </Collapse>

        {!showTraining && (
          <Box
            p={5}
            borderWidth="1px"
            borderRadius="xl"
            borderColor="gray.200"
            borderStyle="dashed"
            textAlign="center"
            cursor="pointer"
            onClick={() => setShowTraining(true)}
            _hover={{ borderColor: 'green.300', bg: 'green.50' }}
            transition="all 0.2s"
          >
            <Text color="gray.500" fontSize="sm">
              +{data.trainingProjects.length} proyectos de formación — haz clic para verlos
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}
