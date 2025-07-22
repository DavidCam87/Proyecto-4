import { HStack, Button } from '@chakra-ui/react'

const sections = [
  { label: 'Sobre Mi', to: 'about' },
  { label: 'Tech Stack', to: 'tech' },
  { label: 'Proyectos', to: 'projects' }
]

export default function Buttons() {
  return (
    <HStack spacing={4} justify="center">
      {sections.map(s => (
        <Button
          key={s.to}
          variant="solid"
          bg="green.200"
          _hover={{ transform: 'scale(1.1)' }}
          size="md"
          onClick={() => document.getElementById(s.to).scrollIntoView({ behavior: 'smooth' })}
        >
          {s.label}
        </Button>
      ))}
    </HStack>
  )
}
