import {
  Flex, Box, Heading, Link, IconButton, Drawer, DrawerBody,
  DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure,
  VStack, Image
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import data from '../../../data'

const MotionBox = motion(Box)

const links = [
  { label: 'Inicio', to: 'hero' },
  { label: 'Sobre Mí', to: 'about' },
  { label: 'Tech Stack', to: 'tech' },
  { label: 'Proyectos', to: 'projects' },
  { label: 'Contacto', to: 'contact' },
]

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [activeSection, setActiveSection] = useState('hero')

  // Seguimiento de sección activa con IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map(l => l.to)
    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          rootMargin: '-80px 0px -55% 0px',
          threshold: 0
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
    onClose()
  }

  return (
    <MotionBox
      as="header"
      position="fixed"
      top={0}
      w="100%"
      bg="rgba(255,255,255,0.92)"
      zIndex="sticky"
      boxShadow="sm"
      backdropFilter="blur(12px)"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={3}
      >
        {/* Logo */}
        <Flex align="center" gap={3} cursor="pointer" onClick={() => scrollToSection('hero')}>
          <Image src="/assets/DCI.png" alt="Logo DCI" boxSize="45px" />
          <Heading size="md" display={{ base: 'none', sm: 'block' }}>
            {data.name}
          </Heading>
        </Flex>

        {/* Navegación desktop */}
        <Flex display={{ base: 'none', md: 'flex' }} gap={8}>
          {links.map(({ label, to }) => {
            const isActive = activeSection === to
            return (
              <Link
                key={to}
                onClick={() => scrollToSection(to)}
                fontWeight={isActive ? 'bold' : 'medium'}
                fontSize="md"
                position="relative"
                color={isActive ? 'green.600' : 'inherit'}
                _hover={{ color: 'green.500' }}
                transition="color 0.2s"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: isActive ? '100%' : '0%',
                  height: '2px',
                  bg: 'green.500',
                  transition: 'width 0.3s',
                }}
                sx={{
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {label}
              </Link>
            )
          })}
        </Flex>

        {/* Botón hamburguesa móvil */}
        <IconButton
          aria-label="Abrir menú"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="ghost"
          size="lg"
        />
      </Flex>

      {/* Drawer móvil */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt={12}>
            <VStack spacing={6} align="stretch">
              {links.map(({ label, to }) => {
                const isActive = activeSection === to
                return (
                  <Link
                    key={to}
                    onClick={() => scrollToSection(to)}
                    fontSize="lg"
                    fontWeight={isActive ? 'bold' : 'medium'}
                    color={isActive ? 'green.600' : 'inherit'}
                    p={3}
                    borderRadius="md"
                    bg={isActive ? 'green.50' : 'transparent'}
                    _hover={{ bg: 'green.50', color: 'green.600' }}
                    transition="all 0.2s"
                  >
                    {label}
                  </Link>
                )
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  )
}
