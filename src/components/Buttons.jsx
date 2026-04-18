import { Stack, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionStack = motion(Stack)

const sections = [
  { label: 'Sobre Mí', to: 'about', icon: '👤' },
  { label: 'Tech Stack', to: 'tech', icon: '💻' },
  { label: 'Proyectos', to: 'projects', icon: '🚀' }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export default function Buttons() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <MotionStack
      direction={{ base: 'column', sm: 'row' }}
      spacing={4}
      justify="center"
      w="full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {sections.map((s) => (
        /* Envolvemos el Button en motion.div para no mezclar las props
           de Framer con las de Chakra */
        <motion.div
          key={s.to}
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ display: 'flex', flex: '1 1 auto', justifyContent: 'center' }}
        >
          <Button
            size="lg"
            colorScheme="green"
            variant="solid"
            onClick={() => scrollToSection(s.to)}
            leftIcon={<span>{s.icon}</span>}
            boxShadow="md"
            w={{ base: 'full', sm: 'auto' }}
            _hover={{ boxShadow: 'lg' }}
          >
            {s.label}
          </Button>
        </motion.div>
      ))}
    </MotionStack>
  )
}
