import { Stack, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionButton = motion(Button)

const sections = [
  { label: 'Sobre Mí', to: 'about', icon: '👤' },
  { label: 'Tech Stack', to: 'tech', icon: '💻' },
  { label: 'Proyectos', to: 'projects', icon: '🚀' }
]

export default function Buttons() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      spacing={4}
      justify="center"
      w="full"
    >
      {sections.map((s, index) => (
        <MotionButton
          key={s.to}
          size="lg"
          colorScheme="green"
          variant="solid"
          onClick={() => scrollToSection(s.to)}
          leftIcon={<span>{s.icon}</span>}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          boxShadow="md"
          _hover={{
            boxShadow: 'lg',
            transform: 'translateY(-2px)',
          }}
        >
          {s.label}
        </MotionButton>
      ))}
    </Stack>
  )
}