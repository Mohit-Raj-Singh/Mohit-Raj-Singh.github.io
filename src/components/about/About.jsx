import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoAnalyticsSharp } from "react-icons/io5";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color="white">
        {text}
      </Text>
    </Stack>
  );
};

function About() {
  return (
    <Container maxW={"5xl"} py={12} id="about">
      <Heading mb={20} color={"#f9f1ac"}>
        About Me
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text color={"white"} fontSize={"lg"}>
            Enthusiastic Aspiring self-motivated Full Stack Web Developer
            specialized MERN- stack from Masai School. Worked through 1000+
            hours of learning HTML, CSS, JavaScript, React, React-Redux, and
            Chakra-UI. Looking to start a career as a web developer with a
            reputed firm driven by technology.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Coding Practice of 1000+ Hours"}
            />
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"green.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"5+  Projects Completed"}
            />
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"DSA Practice of 700+ Hours"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufD8fHx8&auto=format&fit=crop&w=1031&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
export default About;
