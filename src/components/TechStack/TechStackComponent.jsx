import { Box, Heading, Text, SimpleGrid, VStack, Image } from '@chakra-ui/react'
import data from '../../../data'

export default function TechStack() {
  return (
    <Box id="tech" mt={16} as="section">
      <Heading size="lg" mb={4}>Mis Tech Stacks</Heading>
      <SimpleGrid columns={{ base: 2, md: 5 }} spacing={6}>
        {data.skills.map((skill, i) => (
          <VStack mt={4} key={i} spacing={2}>
            <Image boxSize="80px" src={skill.icon} alt={skill.name} objectFit="contain" />
            <Text>{skill.name}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}
