import { Flex, Box, Heading, Link, IconButton, useDisclosure, VStack, CloseButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import data from '../../../data'

const links = [
  { label: 'Home', to: 'hero' },
  { label: 'Sobre Mi', to: 'about' },
  { label: 'Tech Stack', to: 'tech' },
  { label: 'Proyectos', to: 'projects' },
  { label: 'Contacto', to: 'contact' },
]

export default function Navigation() {
  const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <Box as="header" pos="fixed" w="100%" bg="white" zIndex="10" boxShadow="md">
      <Flex align="center" justify="space-between" maxW="container.xl" mx="auto" px={4} py={2}>
        <Flex align="center">
          <Box boxSize="50px">
            <img src="/assets/DCI.png" alt="Logo" />
          </Box>
          <Heading size="md" ml={3}>{data.name}</Heading>
        </Flex>
        <Flex display={{ base: 'none', md: 'flex' }} gap={6}>
          {links.map(({ label, to }) => (
            <Link href={`#${to}`} key={to} fontWeight="medium">
              {label}
            </Link>
          ))}
        </Flex>
        <IconButton
          aria-label="Toggle Menu"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
        />
      </Flex>
      {isOpen && (
        <VStack pos="fixed" top="0" right="0" h="100vh" w="60%" bg="gray.800" color="white" p={6} spacing={6}>
          <CloseButton alignSelf="flex-end" onClick={onClose} />
          {links.map(({ label, to }) => (
            <Link href={`#${to}`} key={to} onClick={onClose}>
              {label}
            </Link>
          ))}
        </VStack>
      )}
    </Box>
  )
}
