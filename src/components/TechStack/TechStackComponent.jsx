import { Box, Heading, Text, SimpleGrid, VStack, Image, Tooltip } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import data from '../../../data'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export default function TechStack() {
  return (
    <Box id="tech" mt={16} as="section">
      <Heading
        size="xl"
        mb={2}
        bgGradient="linear(to-r, blue.600, green.400)"
        bgClip="text"
      >
        🛠️ Tech Stack
      </Heading>
      <Text mb={8} fontSize="lg" color="gray.600">
        Tecnologías y herramientas que domino
      </Text>

      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
          spacing={6}
        >
          {data.skills.map((skill, i) => (
            <Tooltip
              key={i}
              label={skill.name}
              hasArrow
              placement="top"
              bg="gray.700"
              color="white"
            >
              <MotionVStack
                variants={itemVariants}
                spacing={3}
                p={6}
                borderRadius="xl"
                bg="white"
                boxShadow="md"
                borderWidth="1px"
                borderColor="gray.200"
                transition="all 0.3s"
                cursor="pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "xl",
                  borderColor: "green.300"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  boxSize="70px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    objectFit="contain"
                    maxH="60px"
                    maxW="60px"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                  />
                </Box>
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  color="gray.700"
                  textAlign="center"
                  noOfLines={2}
                >
                  {skill.name}
                </Text>
              </MotionVStack>
            </Tooltip>
          ))}
        </SimpleGrid>
      </MotionBox>
    </Box>
  )
}