import { Box, Heading, Text, VStack, HStack, Link, Image } from '@chakra-ui/react'
import data from '../../../data'

const social = [
  { icon: '/assets/GitHub.svg', url: data.github },
  { icon: '/assets/X.svg', url: data.twitter },
  { icon: '/assets/linkedin.svg', url: data.linkedin }
]

export default function Contact() {
  return (
    <Box id="contact" mt={16} as="section" textAlign="center">
      <Heading size="lg" mb={4}>Para cualquier consulta, ¡Contáctame!</Heading>
      <Link href={`mailto:${data.email}`} fontSize="xl" bgGradient="linear(to-r, blue.800, green.400)" bgClip="text">
        {data.email}
      </Link>
      <VStack mt={6} spacing={3}>
        <Link href={`tel:${data.phone}`}>{data.phone}</Link>
        <HStack spacing={8} justify="center">
          {social.map((s, i) => (
            <Link href={s.url} key={i} isExternal>
              <Image boxSize="40px" src={s.icon} alt="social" />
            </Link>
          ))}
        </HStack>
      </VStack>
    </Box>
  )
}
