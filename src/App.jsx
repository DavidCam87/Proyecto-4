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
    <Box>
      <Navigation />
      <Container maxW="container.xl" py={8}>
        <Stack spacing={12}>
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
