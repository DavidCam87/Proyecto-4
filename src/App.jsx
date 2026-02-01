import React from 'react'
import { Box, Container, Stack } from '@chakra-ui/react'
import Navigation from './components/Header/NavigationComponent'
import Hero from './components/Hero/HeroComponent'
import Buttons from './components/Buttons'
import About from './components/About/AboutComponent'
import TechStack from './components/TechStack/TechStackComponent'
import Projects from './components/Projects/ProjectsComponent'
import Contact from './components/Contact/ContactComponent'
import Footer from './components/Footer/FooterComponent'

function App() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Navigation />

      {/* Contenedor principal con padding top para el header fijo */}
      <Container maxW="container.xl" py={8} px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 16, md: 20 }}>
          <Hero />
          <Buttons />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </Stack>
      </Container>

      <Footer />
    </Box>
  )
}

export default App